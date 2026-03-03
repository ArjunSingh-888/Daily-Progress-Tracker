import { useState, useEffect } from 'react';
import { getFromStorage, saveToStorage, STORAGE_KEYS } from '../utils/storage';
import { getTodayString } from '../utils/date';
import { generateId, calculatePercentage } from '../utils/helpers';

/**
 * Custom hook for managing goals
 * @returns {Object} Goals state and methods
 */
export const useGoals = () => {
  const [goals, setGoals] = useState([]);

  // Load goals from storage on mount
  useEffect(() => {
    const savedGoals = getFromStorage(STORAGE_KEYS.GOALS, []);
    setGoals(savedGoals);
  }, []);

  // Save goals to storage whenever they change
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.GOALS, goals);
  }, [goals]);

  const addGoal = (title, weight = 1) => {
    const newGoal = {
      id: generateId(),
      title: title.trim(),
      weight: parseInt(weight) || 1,
      createdAt: new Date().toISOString()
    };
    setGoals(prev => [...prev, newGoal]);
    return newGoal;
  };

  const updateGoal = (id, updates) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id ? { ...goal, ...updates } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  };

  return { goals, addGoal, updateGoal, deleteGoal };
};

/**
 * Custom hook for managing daily progress
 * @param {Array} goals - Array of goals
 * @returns {Object} Progress state and methods
 */
export const useDailyProgress = (goals) => {
  const [dailyLogs, setDailyLogs] = useState({});
  const today = getTodayString();

  // Load daily logs from storage on mount
  useEffect(() => {
    const savedLogs = getFromStorage(STORAGE_KEYS.DAILY_LOGS, {});
    setDailyLogs(savedLogs);
  }, []);

  // Save daily logs to storage whenever they change
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.DAILY_LOGS, dailyLogs);
  }, [dailyLogs]);

  // Get today's completed goal IDs
  const getTodayCompleted = () => {
    return dailyLogs[today]?.completed || [];
  };

  // Toggle goal completion for today
  const toggleGoalCompletion = (goalId) => {
    const todayCompleted = getTodayCompleted();
    const isCompleted = todayCompleted.includes(goalId);
    
    const updatedCompleted = isCompleted
      ? todayCompleted.filter(id => id !== goalId)
      : [...todayCompleted, goalId];
    
    const percentage = calculatePercentage(goals, updatedCompleted);
    
    setDailyLogs(prev => ({
      ...prev,
      [today]: {
        date: today,
        completed: updatedCompleted,
        percentage,
        goals: goals.map(g => ({ id: g.id, title: g.title, weight: g.weight })),
        timestamp: new Date().toISOString()
      }
    }));
  };

  // Get progress for a specific date
  const getProgressForDate = (dateString) => {
    return dailyLogs[dateString] || null;
  };

  // Get today's percentage
  const getTodayPercentage = () => {
    const todayCompleted = getTodayCompleted();
    return calculatePercentage(goals, todayCompleted);
  };

  return {
    dailyLogs,
    getTodayCompleted,
    toggleGoalCompletion,
    getProgressForDate,
    getTodayPercentage
  };
};

/**
 * Custom hook for app settings
 * @returns {Object} Settings state and methods
 */
export const useSettings = () => {
  const [settings, setSettings] = useState({
    darkMode: true
  });

  // Load settings from storage on mount
  useEffect(() => {
    const savedSettings = getFromStorage(STORAGE_KEYS.SETTINGS, { darkMode: true });
    setSettings(savedSettings);
    
    // Apply dark mode class to body (cyberpunk theme)
    document.body.classList.add('dark-mode');
    if (savedSettings.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  // Save settings to storage and apply changes
  const updateSettings = (newSettings) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    saveToStorage(STORAGE_KEYS.SETTINGS, updated);
    
    // Apply dark mode class
    if (updated.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const toggleDarkMode = () => {
    updateSettings({ darkMode: !settings.darkMode });
  };

  return { settings, updateSettings, toggleDarkMode };
};
