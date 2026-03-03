import React, { useState } from 'react';
import { Plus, Flame } from 'lucide-react';
import CircularProgress from '../components/CircularProgress';
import GoalItem from '../components/GoalItem';
import { GoalModal } from '../components/Modal';
import StatCard from '../components/StatCard';
import { useGoals, useDailyProgress } from '../hooks/useStorage';
import { getTodayString, formatDateForDisplay, getDayOfWeek, calculateStreak } from '../utils/date';

/**
 * Dashboard page - Main view with progress tracker and daily checklist
 */
const Dashboard = () => {
  const { goals, addGoal, updateGoal, deleteGoal } = useGoals();
  const { getTodayCompleted, toggleGoalCompletion, getTodayPercentage, dailyLogs } = useDailyProgress(goals);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);

  const today = getTodayString();
  const todayCompleted = getTodayCompleted();
  const percentage = getTodayPercentage();
  const streak = calculateStreak(dailyLogs);

  const handleAddGoal = (title, weight) => {
    addGoal(title, weight);
    setIsModalOpen(false);
  };

  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setIsModalOpen(true);
  };

  const handleUpdateGoal = (title, weight) => {
    if (editingGoal) {
      updateGoal(editingGoal.id, { title, weight });
      setEditingGoal(null);
      setIsModalOpen(false);
    }
  };

  const handleDeleteGoal = (goalId) => {
    if (confirm('Are you sure you want to delete this goal?')) {
      deleteGoal(goalId);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingGoal(null);
  };

  return (
    <div className="page dashboard-page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Daily Progress</h1>
          <p className="date-display">
            {formatDateForDisplay(today)} • {getDayOfWeek(today)}
          </p>
        </div>
      </div>

      {/* Progress Circle */}
      <div className="progress-section">
        <CircularProgress percentage={percentage} size={220} strokeWidth={14} />
      </div>

      {/* Stats */}
      {streak > 0 && (
        <div className="stats-grid">
          <StatCard 
            icon={<Flame size={24} />}
            label="Day Streak"
            value={streak}
            color="success"
          />
        </div>
      )}

      {/* Goals Section */}
      <div className="goals-section">
        <div className="section-header">
          <h2>Today's Goals</h2>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={18} />
            Add Goal
          </button>
        </div>

        {goals.length === 0 ? (
          <div className="empty-state">
            <p>No goals yet. Add your first goal to get started!</p>
            <button 
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={20} />
              Add Your First Goal
            </button>
          </div>
        ) : (
          <div className="goals-list">
            {goals.map(goal => (
              <GoalItem
                key={goal.id}
                goal={goal}
                isCompleted={todayCompleted.includes(goal.id)}
                onToggle={toggleGoalCompletion}
                onEdit={handleEditGoal}
                onDelete={handleDeleteGoal}
              />
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Goal Modal */}
      <GoalModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={editingGoal ? handleUpdateGoal : handleAddGoal}
        initialGoal={editingGoal}
      />
    </div>
  );
};

export default Dashboard;
