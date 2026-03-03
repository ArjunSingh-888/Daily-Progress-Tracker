/**
 * Get today's date in YYYY-MM-DD format
 * @returns {string} Date string
 */
export const getTodayString = () => {
  const today = new Date();
  return formatDate(today);
};

/**
 * Format a date object to YYYY-MM-DD string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Format date for display (e.g., "March 3, 2026")
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date string
 */
export const formatDateForDisplay = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get day of week from date string
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Day name
 */
export const getDayOfWeek = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

/**
 * Check if date is today
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {boolean}
 */
export const isToday = (dateString) => {
  return dateString === getTodayString();
};

/**
 * Get dates for the last N days
 * @param {number} days - Number of days
 * @returns {string[]} Array of date strings
 */
export const getLastNDays = (days) => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < days; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    dates.push(formatDate(date));
  }
  
  return dates;
};

/**
 * Calculate consecutive days with 100% completion
 * @param {Object} dailyLogs - Daily logs object
 * @returns {number} Streak count
 */
export const calculateStreak = (dailyLogs) => {
  const today = getTodayString();
  let streak = 0;
  let currentDate = new Date();
  
  while (true) {
    const dateString = formatDate(currentDate);
    const log = dailyLogs[dateString];
    
    // Stop if we've reached a date without a log or not 100% completion
    if (!log || log.percentage < 100) {
      break;
    }
    
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
    
    // Prevent infinite loop
    if (streak > 365) break;
  }
  
  return streak;
};
