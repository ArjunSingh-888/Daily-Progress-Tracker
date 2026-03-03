import React from 'react';
import { Check } from 'lucide-react';

/**
 * Individual goal item component
 * @param {Object} goal - Goal object
 * @param {boolean} isCompleted - Completion status
 * @param {Function} onToggle - Toggle completion handler
 * @param {Function} onEdit - Edit handler (optional)
 * @param {Function} onDelete - Delete handler (optional)
 */
const GoalItem = ({ goal, isCompleted, onToggle, onEdit, onDelete }) => {
  return (
    <div className={`goal-item ${isCompleted ? 'completed' : ''}`}>
      <div className="goal-checkbox" onClick={() => onToggle(goal.id)}>
        <div className={`checkbox ${isCompleted ? 'checked' : ''}`}>
          {isCompleted && <Check size={20} />}
        </div>
        <div className="goal-content">
          <span className="goal-title">{goal.title}</span>
          {goal.weight > 1 && (
            <span className="goal-weight">Weight: {goal.weight}</span>
          )}
        </div>
      </div>
      {(onEdit || onDelete) && (
        <div className="goal-actions">
          {onEdit && (
            <button 
              className="btn-icon"
              onClick={() => onEdit(goal)}
              title="Edit goal"
            >
              ✏️
            </button>
          )}
          {onDelete && (
            <button 
              className="btn-icon"
              onClick={() => onDelete(goal.id)}
              title="Delete goal"
            >
              🗑️
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GoalItem;
