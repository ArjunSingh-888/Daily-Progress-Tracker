# 🚀 Quick Start Guide

## Installation (First Time Only)

### Windows
```cmd
Double-click: start.bat
```

### Mac/Linux
```bash
chmod +x start.sh
./start.sh
```

### Manual
```bash
npm install
npm run dev
```

---

## Using the App

### 📊 Dashboard
- **Add Goal**: Click "+ Add Goal" button
- **Check Goal**: Click checkbox to mark complete
- **Edit Goal**: Click ✏️ icon
- **Delete Goal**: Click 🗑️ icon
- **View Progress**: See circular progress indicator

### 📅 History
- **View Past Days**: Click any date card
- **See Details**: View completed/pending goals
- **Check Stats**: 7-day average at top
- **Close Detail**: Click ✕ to return

### ⚙️ Settings
- **Dark Mode**: Toggle switch
- **Export Data**: Click "Export" button
- **Reset Data**: Click "Reset" (careful!)

---

## Key Features

| Feature | Location | Description |
|---------|----------|-------------|
| 🎯 Add Goals | Dashboard | Create new daily goals |
| ✅ Track Progress | Dashboard | Check/uncheck goals |
| 📊 View Percentage | Dashboard | See completion % |
| 🔥 Streak Counter | Dashboard | Consecutive 100% days |
| 📅 View History | History | Past days calendar |
| 🌙 Dark Mode | Settings | Toggle theme |
| 💾 Export Data | Settings | Download JSON backup |

---

## Goal Weights

| Weight | Use For |
|--------|---------|
| 1 | Regular daily tasks (default) |
| 2 | Important tasks |
| 3+ | High-priority/critical tasks |

**Example:**
- 3 goals with weight 1 = 33.3% each
- 1 goal with weight 3 = same as above 3 goals combined

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Esc | Close modal |
| Enter | Submit form |
| Tab | Navigate form fields |

---

## Tips & Tricks

✅ **Best Results**: Check the app daily
✅ **Ideal Goals**: 5-10 goals per day
✅ **Use Weights**: For prioritization
✅ **Weekly Review**: Check history every Sunday
✅ **Monthly Backup**: Export data regularly

---

## Troubleshooting

### App won't start
```bash
rm -rf node_modules
npm install
npm run dev
```

### Data not saving
- Don't use private/incognito mode
- Check localStorage enabled
- Try different browser

### PWA won't install
- Must use HTTPS or localhost
- Clear browser cache
- Check browser supports PWA

---

## Daily Workflow

```
🌅 Morning
→ Open app
→ Add today's goals
→ Assign weights (optional)

☀️ Throughout Day
→ Check off completed goals
→ Watch progress increase

🌙 Evening
→ Review completion %
→ Check streak
→ Feel accomplished!

📅 Weekly
→ Review History page
→ Check 7-day average
→ Adjust future goals
```

---

## Data Location

All data stored in browser's localStorage:
- **Goals**: Your goal list
- **Daily Logs**: Completion history
- **Settings**: App preferences

**No server, no sync, 100% private!**

---

## Need Help?

1. Check [SETUP_GUIDE.md](SETUP_GUIDE.md)
2. Read code comments
3. Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

**Ready to boost your productivity? Let's go! 🚀**
