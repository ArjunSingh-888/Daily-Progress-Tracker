# 🎯 Daily Progress Tracker

A modern Progressive Web App (PWA) for tracking daily progress on personal goals.

> **Personal productivity app • No login required • Works offline • 100% private**

---

## ✨ Features

### Core Features
- 📝 **Goal Management** - Add, edit, and delete goals
- ⚖️ **Goal Weights** - Prioritize important goals (1-10)
- ✅ **Daily Tracking** - Check off completed goals
- 📊 **Progress Circle** - Large, animated completion indicator
- 🔄 **Auto Reset** - Fresh checklist every day
- 💾 **Data Persistence** - All data saved locally

### Advanced Features
- 📅 **History View** - Calendar with past completion data
- 🔥 **Streak Counter** - Track consecutive 100% days
- 📈 **Weekly Stats** - 7-day average and trends
- 🌙 **Dark Mode** - Eye-friendly dark theme
- 📤 **Data Export** - Backup as JSON
- 📱 **PWA Ready** - Install as native app
- 🚀 **Offline Support** - Works without internet
- ⚡ **Instant Updates** - Real-time progress calculation

---

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

**Windows:**
```cmd
start.bat
```

**Mac/Linux:**
```bash
chmod +x start.sh
./start.sh
```

### Option 2: Manual Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📖 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Quick reference guide
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview
- **[VISUAL_GUIDE.md](VISUAL_GUIDE.md)** - UI layouts and diagrams

---

## 📱 Install as App

### Desktop
1. Open app in Chrome/Edge
2. Click install icon (⊕) in address bar
3. App opens in standalone window

### Mobile
**iOS:** Share → Add to Home Screen  
**Android:** Menu → Add to Home screen

---

## 🎮 How to Use

### Dashboard
1. Click **"+ Add Goal"** to create goals
2. Assign **weights** to prioritize (optional)
3. **Check** goals as you complete them
4. Watch your **progress circle** update instantly
5. Track your **streak** of 100% days

### History
1. View **calendar** of past days
2. Click any **date** to see details
3. Review **completed** vs **pending** goals
4. Check **7-day average** for trends

### Settings
1. Toggle **dark mode** for comfort
2. **Export data** for backup
3. **Reset** if you want to start fresh

---

## 🛠️ Tech Stack

- **Frontend:** React 18 (Functional Components + Hooks)
- **Build Tool:** Vite 5
- **Routing:** React Router DOM 6
- **Icons:** Lucide React
- **Storage:** localStorage (No Backend)
- **PWA:** Vite Plugin PWA + Workbox
- **Styling:** Pure CSS with CSS Variables

---

## 🏗️ Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── CircularProgress.jsx
│   ├── GoalItem.jsx
│   ├── Modal.jsx
│   ├── Navigation.jsx
│   └── StatCard.jsx
├── pages/           # Route pages
│   ├── Dashboard.jsx
│   ├── History.jsx
│   └── Settings.jsx
├── hooks/           # Custom React hooks
│   └── useStorage.js
├── utils/           # Helper functions
│   ├── storage.js
│   ├── date.js
│   └── helpers.js
├── App.jsx          # Main app + routing
├── App.css          # All styles
└── main.jsx         # Entry point
```

---

## 🎨 Features Highlights

### Weighted Goals
```
Example: 3 goals
- Exercise (weight: 3) = 60%
- Reading (weight: 1)  = 20%
- Meditate (weight: 1) = 20%

Complete exercise = 60% progress!
```

### Automatic Daily Reset
- New day = fresh checklist
- Previous data automatically saved
- Goals persist across days

### Streak Counter
- Tracks consecutive 100% completion days
- Motivates consistent progress
- Visible on dashboard

---

## 💾 Data Storage

All data stored **locally** in your browser:

- ✅ **No server** required
- ✅ **No login** needed
- ✅ **100% private** - data never leaves your device
- ✅ **Offline ready** - works without internet
- ✅ **Exportable** - download JSON backup anytime

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 🌟 Why This App?

- **No Distractions:** Focus on your goals, not features
- **Privacy First:** Your data stays on your device
- **Works Offline:** Track progress anywhere
- **Fast & Light:** Loads instantly, uses minimal resources
- **Mobile Optimized:** Perfect for on-the-go tracking
- **Open Source:** Customize as you like

---

## 🤝 Contributing

This is a personal productivity tool. Feel free to:
- Fork and customize for your needs
- Add new features
- Improve the design
- Share your modifications

---

## 📝 License

MIT License - Free for personal use

---

## 🆘 Need Help?

1. Check [SETUP_GUIDE.md](SETUP_GUIDE.md) for troubleshooting
2. Review code comments for implementation details
3. See [QUICK_START.md](QUICK_START.md) for usage tips

---

**Start tracking your progress today! 🎯✨**

*Version 1.0.0 - Built with React & Vite*
