# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Zpay
├── src
│   ├── assets
│   ├── custom
│   │   ├── auth
│   │   │   ├── component
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── SignupForm.jsx
│   │   │   └── pages
│   │   │       ├── Login.jsx
│   │   │       ├── Signup.jsx
│   │   ├── Dashboard
│   │   │   ├── components
│   │   │   │   ├── DashboardAnalytics.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── SidebarItem.jsx   # New file for sidebar item component
│   │   │   │   └── SidebarItemsData.js  # Store sidebar items data separately
│   │   │   └── pages
│   │   │       ├── dashboardanalytics.jsx
│   │   │       ├── sidebar.jsx
│   ├── core
│   │   └── components
│   │       ├── Header.jsx
│   ├── App.jsx
│   ├── index.css
