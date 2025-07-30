# Dynamic GPA Calculator 🎓

A flexible and dynamic GPA calculator that supports both pre-configured course loads (for CSE students) and fully custom setups for any department or university. Built with React, Vite, and Tailwind CSS.

[![Live Site](https://img.shields.io/badge/Live_Site-View_Now-brightgreen?style=for-the-badge&logo=github)](https://RashmikaMadaela.github.io/GPA_Calculator/)

## ✨ Features

-   **Dual Modes**:
    -   **CSE Mode**: Starts with a pre-filled, expandable template for CSE students.
    -   **Custom Mode**: Start from a blank slate, perfect for any department or university curriculum.
-   **Fully Dynamic Structure**:
    -   Add or remove entire semesters.
    -   Add or remove individual modules within any semester.
-   **Custom Modules**: Define your own module names and credit values.
-   **Real-time Calculations**:
    -   **SGPA** (Semester GPA) is calculated and displayed for each semester card.
    -   **CGPA** (Cumulative GPA) updates instantly with every change.
-   **Modern UI & Responsive Design**: A clean, dark-themed interface that works seamlessly on desktop and mobile devices.

## 🛠️ Tech Stack

-   **Frontend:** [React.js](https://react.dev/) (with Hooks like `useState`, `useEffect`, `useMemo`)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Deployment:** [GitHub Pages](https://pages.github.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or later) and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd <YOUR-REPO-NAME>
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Your application should now be running on `http://localhost:5173/`.

## 🚢 Deployment

This project is configured for easy deployment to GitHub Pages.

To deploy your version, simply run the following command:

```sh
npm run deploy
