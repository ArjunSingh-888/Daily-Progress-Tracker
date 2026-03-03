/**
 * Calculate completion percentage
 * @param {Array} goals - Array of goal objects
 * @param {Array} completedGoalIds - Array of completed goal IDs for today
 * @returns {number} Percentage (0-100)
 */
export const calculatePercentage = (goals, completedGoalIds) => {
  if (!goals || goals.length === 0) return 0;
  
  const completedSet = new Set(completedGoalIds);
  
  // Calculate using weights
  const totalWeight = goals.reduce((sum, goal) => sum + (goal.weight || 1), 0);
  const completedWeight = goals
    .filter(goal => completedSet.has(goal.id))
    .reduce((sum, goal) => sum + (goal.weight || 1), 0);
  
  return totalWeight > 0 ? Math.round((completedWeight / totalWeight) * 100) : 0;
};

/**
 * Generate unique ID
 * @returns {string} Unique ID
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Export data as JSON file
 * @param {Object} data - Data to export
 * @param {string} filename - File name
 */
export const exportToJSON = (data, filename = 'progress-tracker-data.json') => {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Validate goal object
 * @param {Object} goal - Goal object
 * @returns {boolean} Is valid
 */
export const isValidGoal = (goal) => {
  return goal && 
         typeof goal.title === 'string' && 
         goal.title.trim().length > 0;
};
