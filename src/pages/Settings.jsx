import React from 'react';
import { Moon, Sun, Download, Trash2, Info } from 'lucide-react';
import { useSettings } from '../hooks/useStorage';
import { clearAllStorage, getFromStorage, STORAGE_KEYS } from '../utils/storage';
import { exportToJSON } from '../utils/helpers';

/**
 * Settings page - App configuration and data management
 */
const Settings = () => {
  const { settings, toggleDarkMode } = useSettings();

  const handleExportData = () => {
    const data = {
      goals: getFromStorage(STORAGE_KEYS.GOALS, []),
      dailyLogs: getFromStorage(STORAGE_KEYS.DAILY_LOGS, {}),
      settings: getFromStorage(STORAGE_KEYS.SETTINGS, {}),
      exportedAt: new Date().toISOString()
    };
    
    exportToJSON(data, `progress-tracker-backup-${Date.now()}.json`);
  };

  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
      if (confirm('This will delete all your goals and history. Are you absolutely sure?')) {
        clearAllStorage();
        window.location.reload();
      }
    }
  };

  return (
    <div className="page settings-page">
      {/* Header */}
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your app preferences</p>
      </div>

      {/* Appearance Section */}
      <div className="settings-section">
        <h2>Appearance</h2>
        
        <div className="setting-item">
          <div className="setting-info">
            <div className="setting-icon">
              {settings.darkMode ? <Moon size={24} /> : <Sun size={24} />}
            </div>
            <div>
              <div className="setting-title">Dark Mode</div>
              <div className="setting-description">
                {settings.darkMode ? 'Using dark theme' : 'Using light theme'}
              </div>
            </div>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.darkMode}
              onChange={toggleDarkMode}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      {/* Data Management Section */}
      <div className="settings-section">
        <h2>Data Management</h2>
        
        <div className="setting-item">
          <div className="setting-info">
            <div className="setting-icon">
              <Download size={24} />
            </div>
            <div>
              <div className="setting-title">Export Data</div>
              <div className="setting-description">
                Download all your data as JSON
              </div>
            </div>
          </div>
          <button className="btn btn-secondary" onClick={handleExportData}>
            Export
          </button>
        </div>

        <div className="setting-item danger">
          <div className="setting-info">
            <div className="setting-icon">
              <Trash2 size={24} />
            </div>
            <div>
              <div className="setting-title">Reset All Data</div>
              <div className="setting-description">
                Delete all goals and history permanently
              </div>
            </div>
          </div>
          <button className="btn btn-danger" onClick={handleResetData}>
            Reset
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="settings-section">
        <h2>About</h2>
        
        <div className="about-content">
          <div className="app-info">
            <h3>Daily Progress Tracker</h3>
            <p className="version">Version 1.0.0</p>
            <p className="description">
              A personal productivity app for tracking daily goal completion. 
              All data is stored locally on your device.
            </p>
          </div>

          <div className="features-list">
            <h4>Features</h4>
            <ul>
              <li>✅ Track multiple goals daily</li>
              <li>📊 Visual progress indicators</li>
              <li>📅 Complete history tracking</li>
              <li>🔥 Streak counter</li>
              <li>🌙 Dark mode support</li>
              <li>📱 Works offline (PWA)</li>
              <li>💾 Local data storage</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="settings-footer">
        <p>Made with ❤️ for personal productivity</p>
        <p className="copyright">© 2026 Daily Progress Tracker</p>
      </div>
    </div>
  );
};

export default Settings;
