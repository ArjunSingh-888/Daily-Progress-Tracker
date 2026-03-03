import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDailyProgress } from '../hooks/useStorage';
import { getLastNDays, formatDateForDisplay, getDayOfWeek, isToday } from '../utils/date';

/**
 * History page - View past daily progress
 */
const History = () => {
  const { dailyLogs, getProgressForDate } = useDailyProgress([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [daysToShow, setDaysToShow] = useState(30);

  const dates = getLastNDays(daysToShow);
  const sortedDates = Object.keys(dailyLogs).sort().reverse();

  const selectedProgress = selectedDate ? getProgressForDate(selectedDate) : null;

  // Calculate weekly average
  const calculateWeeklyAverage = () => {
    const lastWeek = getLastNDays(7);
    const percentages = lastWeek
      .map(date => dailyLogs[date]?.percentage || 0)
      .filter(p => p > 0);
    
    if (percentages.length === 0) return 0;
    return Math.round(percentages.reduce((a, b) => a + b, 0) / percentages.length);
  };

  const weeklyAverage = calculateWeeklyAverage();

  return (
    <div className="page history-page">
      {/* Header */}
      <div className="page-header">
        <h1>History</h1>
        <p>Review your past progress</p>
      </div>

      {/* Weekly Stats */}
      {sortedDates.length > 0 && (
        <div className="weekly-stats">
          <div className="stat-item">
            <span className="stat-label">7-Day Average</span>
            <span className="stat-value">{weeklyAverage}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Days Logged</span>
            <span className="stat-value">{sortedDates.length}</span>
          </div>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="calendar-section">
        <h2>Daily Progress</h2>
        
        {sortedDates.length === 0 ? (
          <div className="empty-state">
            <p>No history yet. Complete some goals to see your progress here!</p>
          </div>
        ) : (
          <div className="calendar-grid">
            {sortedDates.map(date => {
              const log = dailyLogs[date];
              const percentage = log?.percentage || 0;
              
              return (
                <div
                  key={date}
                  className={`calendar-day ${selectedDate === date ? 'selected' : ''} ${isToday(date) ? 'today' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <div className="day-header">
                    <span className="day-date">{new Date(date + 'T00:00:00').getDate()}</span>
                    <span className="day-month">
                      {new Date(date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </div>
                  <div className="day-progress">
                    <div 
                      className="progress-bar"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: percentage === 100 ? 'var(--success-color)' : 
                                       percentage >= 50 ? 'var(--primary-color)' : 
                                       'var(--danger-color)'
                      }}
                    />
                  </div>
                  <div className="day-percentage">{percentage}%</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Selected Date Detail */}
      {selectedProgress && (
        <div className="date-detail">
          <div className="detail-header">
            <h2>{formatDateForDisplay(selectedDate)}</h2>
            <button 
              className="btn-icon"
              onClick={() => setSelectedDate(null)}
            >
              ✕
            </button>
          </div>
          
          <div className="detail-percentage">
            <div className="percentage-circle">
              {selectedProgress.percentage}%
            </div>
          </div>

          <div className="detail-goals">
            <h3>Goals ({selectedProgress.completed.length} / {selectedProgress.goals.length})</h3>
            <div className="goals-list">
              {selectedProgress.goals.map(goal => {
                const isCompleted = selectedProgress.completed.includes(goal.id);
                return (
                  <div key={goal.id} className={`goal-item ${isCompleted ? 'completed' : ''}`}>
                    <div className="goal-checkbox">
                      <div className={`checkbox ${isCompleted ? 'checked' : ''}`}>
                        {isCompleted && '✓'}
                      </div>
                      <div className="goal-content">
                        <span className="goal-title">{goal.title}</span>
                        {goal.weight > 1 && (
                          <span className="goal-weight">Weight: {goal.weight}</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
