# Cash Manager - Personal Finance Tracker

A powerful web-based personal finance manager with support for Income, Expenses, Savings, Loans, Amanat, and Online Payments tracking. Works offline with IndexedDB storage and PWA features.

## Features

- **Dashboard** – real-time summary of Income, Expenses, Savings, Loan balance, Amanat balance, Online Payments, and Net Balance.
- **Entry Types** – Income, Expense, Savings, Savings Withdrawal, Loan Given/Taken/Returned/Received, Amanat Deposit/Withdrawal.
- **Categories & Items** – Zarooriat, Khwahishat, Self Growth, Business, Achanak, Online Payments with predefined items.
- **Advanced Filters** – date range, category, search by text.
- **Charts** – Monthly spending bar chart, main category doughnut chart, item breakdown per category, monthly category comparison line chart, and all items detail bar chart.
- **Trash** – soft delete with restore and permanent delete.
- **Backup & Restore** – export/import JSON, change backup folder (File System Access API), save to Google Drive (manual upload).
- **Dark Mode** – toggle dark/light theme.
- **PWA Ready** – offline support with service worker and manifest.

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- IndexedDB (with localStorage fallback)
- Chart.js for data visualization
- Font Awesome 6 for icons
- Service Worker for offline caching

## How to Run

1. Clone the repository:  
   `git clone https://github.com/yourusername/cash-manager.git`
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No server required – works locally.

## Project Structure
