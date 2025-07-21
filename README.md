# 🧠 React Concepts Playground

This repository contains a structured and practical collection of mini React projects and examples, each focused on mastering a specific React concept. Every folder has its own isolated Vite project for quick testing, debugging, and hands-on learning.

## 📁 Folder Structure & Concepts

| Folder Name        | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `useState`         | Basic examples of `useState` for handling local component state.            |
| `useEffect`        | Side effects such as data fetching, DOM events, timers using `useEffect`.   |
| `useContext`       | Shared global state using the Context API with `useContext`.                |
| `useRef`           | Accessing and modifying DOM nodes or storing mutable values using `useRef`. |
| `useMemo`          | Performance optimization with memoized values using `useMemo`.              |
| `useCallback`      | Prevent unnecessary re-renders of functions using `useCallback`.            |
| `stateLifting`     | Demonstrating how to lift state up between components.                      |
| `ReactProps`       | Passing props between parent-child components, including prop drilling.     |
| `ReactRouterDom`   | Routing with nested routes, params, redirects using `react-router-dom`.     |
| `ReactHookForm`    | Forms with validation using `react-hook-form` for cleaner code and UX.      |
| `LazyLoading`      | Lazy loading components using `React.lazy()` and `Suspense`.                |
| `Redux Toolkit`    | State management using modern Redux Toolkit (`@reduxjs/toolkit`).           |
| `Project`          | A mini-project combining multiple hooks and concepts in a real-world setup. |

## 🚀 Features

- Vite setup for every project
- Minimal, focused code examples
- Tailwind/MUI compatible (depending on project)
- Clean folder structure and naming
- Beginner to advanced concepts covered

## 🛠 How to Run Any Folder

```bash
cd FolderName
npm install
npm run dev
