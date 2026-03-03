import React, { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Modal component
 * @param {boolean} isOpen - Modal open state
 * @param {Function} onClose - Close handler
 * @param {string} title - Modal title
 * @param {React.ReactNode} children - Modal content
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="btn-icon" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * Add/Edit Goal Modal
 */
export const GoalModal = ({ isOpen, onClose, onSubmit, initialGoal = null }) => {
  const [title, setTitle] = useState(initialGoal?.title || '');
  const [weight, setWeight] = useState(initialGoal?.weight || 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title, weight);
      setTitle('');
      setWeight(1);
      onClose();
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={initialGoal ? 'Edit Goal' : 'Add New Goal'}
    >
      <form onSubmit={handleSubmit} className="goal-form">
        <div className="form-group">
          <label htmlFor="goal-title">Goal Title *</label>
          <input
            id="goal-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your goal..."
            autoFocus
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="goal-weight">Weight (optional)</label>
          <input
            id="goal-weight"
            type="number"
            min="1"
            max="10"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value) || 1)}
          />
          <small>Higher weight goals contribute more to your percentage</small>
        </div>
        
        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {initialGoal ? 'Update' : 'Add'} Goal
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Modal;
