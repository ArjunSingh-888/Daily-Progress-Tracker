# 🎯 Daily Progress Tracker - Setup & Usage Guide

## 📋 Table of Contents
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Features Guide](#features-guide)
- [PWA Installation](#pwa-installation)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Steps

1. **Open a terminal in the project directory**
   ```bash
   cd "c:\Users\ASUS\Desktop\PROGRESS TRACKER"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The app will open at: `http://localhost:3000`
   - Or click the link shown in the terminal

---

## 🎮 Running the App

### Development Mode
```bash
npm run dev
```
- Hot reload enabled
- Access at `http://localhost:3000`

### Production Build
```bash
npm run build
npm run preview
```
- Creates optimized build in `/dist` folder
- Preview production build locally

---

## ✨ Features Guide

### 1️⃣ Dashboard (Home Page)

**Main Features:**
- **Circular Progress Indicator**: Shows your daily completion percentage
- **Today's Goals List**: All your goals with checkboxes
- **Streak Counter**: Shows consecutive 100% completion days

**How to Use:**
1. Click "Add Goal" to create a new goal
2. Enter goal title and optional weight (1-10)
3. Check/uncheck goals to mark completion
4. Progress updates instantly
5. Edit or delete goals using the icons

**Goal Weights:**
- Default weight: 1
- Higher weight = more impact on percentage
- Example: Weight 3 goal = 3x a weight 1 goal

### 2️⃣ History Page

**Main Features:**
- **Calendar Grid**: Visual overview of all logged days
- **7-Day Average**: Weekly performance metric
- **Date Details**: Click any date to see that day's goals

**How to Use:**
1. Navigate to History tab
2. View colored progress bars for each day
3. Click a date to see full details
4. Green = 100%, Blue = 50%+, Red = <50%

**Understanding the Calendar:**
- Each card shows date and progress bar
- Percentage displayed below
- Today is highlighted with green border
- Selected date shows detailed breakdown

### 3️⃣ Settings Page

**Main Features:**
- **Dark Mode Toggle**: Switch between light/dark themes
- **Export Data**: Download all data as JSON backup
- **Reset Data**: Clear all goals and history

**How to Use:**

**Enable Dark Mode:**
1. Go to Settings
2. Toggle "Dark Mode" switch
3. Theme changes instantly

**Export Your Data:**
1. Click "Export" button
2. JSON file downloads automatically
3. Keep as backup or for analysis

**Reset All Data (CAREFUL!):**
1. Click "Reset" button
2. Confirm twice (irreversible!)
3. All data deleted, app resets

---

## 📱 PWA Installation

### Desktop (Chrome/Edge)
1. Open the app in browser
2. Look for install icon in address bar (➕)
3. Click "Install" 
4. App appears in Start Menu/Applications
5. Works offline after installation

### Mobile (iOS)
1. Open in Safari
2. Tap Share button (□↑)
3. Select "Add to Home Screen"
4. Tap "Add"
5. App icon appears on home screen

### Mobile (Android)
1. Open in Chrome
2. Tap menu (⋮)
3. Select "Add to Home screen"
4. Tap "Add"
5. App installs like native app

**Benefits of PWA Installation:**
- ✅ Works offline
- ✅ Fast loading
- ✅ Home screen icon
- ✅ Full-screen experience
- ✅ Push notifications (future feature)

---

## 📁 Project Structure

```
PROGRESS TRACKER/
├── public/
│   ├── icon.svg              # App icon (SVG)
│   ├── icon-192.png          # PWA icon 192x192
│   └── icon-512.png          # PWA icon 512x512
├── src/
│   ├── components/           # React components
│   │   ├── CircularProgress.jsx
│   │   ├── GoalItem.jsx
│   │   ├── Modal.jsx
│   │   ├── Navigation.jsx
│   │   └── StatCard.jsx
│   ├── pages/               # Page components
│   │   ├── Dashboard.jsx
│   │   ├── History.jsx
│   │   └── Settings.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useStorage.js
│   ├── utils/               # Utility functions
│   │   ├── storage.js       # localStorage helpers
│   │   ├── date.js          # Date utilities
│   │   └── helpers.js       # General helpers
│   ├── App.jsx              # Main app component
│   ├── App.css              # All styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # This file
```

---

## 🔧 Troubleshooting

### Issue: App won't start
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Issue: Icons not showing (PWA)
**Solution:**
- SVG placeholders are included
- For production, convert SVG to PNG
- See `ICONS_README.md` for instructions
- Use online tool: https://realfavicongenerator.net/

### Issue: Dark mode not working
**Solution:**
- Clear browser cache
- Check localStorage isn't full
- Try different browser

### Issue: Data not persisting
**Solution:**
- Check browser localStorage isn't disabled
- Try different browser
- Don't use incognito/private mode
- Clear old localStorage data

### Issue: PWA not installing
**Solution:**
- Must use HTTPS (or localhost)
- Check browser supports PWA
- Generate proper PNG icons
- Clear browser cache and retry

### Issue: Build fails
**Solution:**
```bash
# Clear cache and rebuild
npm run build --force
```

---

## 💡 Tips & Best Practices

### Daily Usage
1. **Morning**: Add today's goals
2. **Throughout day**: Check off completed goals
3. **Evening**: Review progress and plan for tomorrow
4. **Weekly**: Check History for patterns and trends

### Goal Setting Tips
- Be specific and actionable
- Use weights for important goals
- Don't overload (5-10 goals is ideal)
- Review and adjust goals weekly

### Data Management
- Export data monthly for backup
- Review history for motivation
- Track streak to build habits
- Use weights to prioritize

---

## 🎨 Customization

### Change Theme Colors
Edit [src/App.css](src/App.css):
```css
:root {
  --primary-color: #6366f1;  /* Change this */
  --success-color: #10b981;  /* And this */
}
```

### Add More Stats
Edit [src/pages/Dashboard.jsx](src/pages/Dashboard.jsx) to add custom statistics.

### Change Progress Ring Size
In [src/pages/Dashboard.jsx](src/pages/Dashboard.jsx):
```jsx
<CircularProgress percentage={percentage} size={220} strokeWidth={14} />
```

---

## 📊 Data Format

### Goals Structure
```json
[
  {
    "id": "unique_id",
    "title": "Exercise for 30 minutes",
    "weight": 2,
    "createdAt": "2026-03-03T10:00:00.000Z"
  }
]
```

### Daily Logs Structure
```json
{
  "2026-03-03": {
    "date": "2026-03-03",
    "completed": ["goal_id_1", "goal_id_2"],
    "percentage": 75,
    "goals": [...],
    "timestamp": "2026-03-03T20:00:00.000Z"
  }
}
```

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

---

## 📝 License

This project is for personal use. Feel free to modify and customize as needed!

---

## 🤝 Support

For issues or questions:
1. Check [Troubleshooting](#troubleshooting) section
2. Review code comments in source files
3. Check browser console for errors

---

**Happy tracking! 🎯✨**
