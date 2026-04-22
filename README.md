# 🌐 CSR Valera - Frontend Web

User interface and web platform for the CSR Valera church. Built to be fast, accessible, and responsive.

This repository uses **Next.js (App Router)** and follows the **Atomic Design methodology** to organize UI components, ensuring high reusability and scalability.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router).
* **Language:** TypeScript (Strict typing enforced).
* **Styling:** Tailwind CSS.
* **Rendering:** Strategic use of Server Components and Client Components for optimal SEO and performance.

## 🏗️ Scaffolding Overview (Atomic Design)

The project is structured as follows:

    src/
    ├── app/                  # Next.js App Router (Pages, Layouts, Loading, Error states).
    │   ├── (auth)/           # Route groups for logical separation.
    │   ├── dashboard/        # Server Components by default for optimal SEO and performance.
    │   ├── layout.tsx        # Root layout.
    │   └── page.tsx          # Home page.
    │
    ├── components/           # UI Components structured following Atomic Design.
    │   ├── atoms/            # Smallest building blocks (e.g., Button, Input, Icon).
    │   ├── molecules/        # Combinations of atoms (e.g., SearchBar, FormField).
    │   ├── organisms/        # Complex UI sections (e.g., Header, Sidebar, UserTable).
    │   └── templates/        # Page-level layouts structuring organisms without business logic.
    │
    ├── lib/                  # Utility functions and API clients.
    │   ├── api/              # Fetch wrappers communicating with the backend.
    │   └── utils/            # Helper functions (e.g., Tailwind class mergers).
    │
    ├── hooks/                # Custom React hooks (Client-side logic).
    ├── store/                # Global state management (if necessary, e.g., Zustand).
    └── types/                # Global TypeScript interfaces and types.

## 🧠 Key Architecture Principles
- **Server vs. Client Components:** Default to Server Components. Use the `"use client"` directive only at the lowest possible level in the tree (usually inside specific Atoms or Molecules that require interactivity or React state).
- **Styling:** Tailwind CSS is used strictly. Avoid custom CSS files unless absolutely necessary.
- **Type Safety:** Strict TypeScript rules apply. Avoid `any`.

## ⚙️ Local Setup (Development)

1. Clone this repository:
   `git clone https://github.com/tu-org/csr-frontend.git`
2. Install dependencies:
   `npm install` (or `pnpm install` / `yarn`)
3. Set up your environment variables in a `.env.local` file (Make sure to point to the local/develop backend URL).
4. Start the development server:
   `npm run dev`
5. Open http://localhost:3000 in your browser.

## 🌿 Gitflow & Workflow

This project enforces strict conventions:
* `main`: Production (Stable and tested). **Direct commits are forbidden.**
* `develop`: Integration and QA environment.
* Branching: `feat/...`, `chore/...`, `fix/...` always originating from `develop`.
* Commits: Must follow the Conventional Commits standard.