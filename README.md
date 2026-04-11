# 🌐 CSR Valera - Frontend Web

User interface and web platform for the CSR Valera church. Built to be fast, accessible, and responsive.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router).
* **Language:** TypeScript (Strict typing enforced).
* **Styling:** Tailwind CSS.
* **Rendering:** Strategic use of Server Components and Client Components for optimal SEO and performance.

## ⚙️ Local Setup (Development)

1. Clone this repository:
   `git clone https://github.com/tu-org/csr-frontend.git`
2. Install dependencies:
   `npm install` (or `pnpm install` / `yarn`)
3. Set up your environment variables in a `.env.local` file (Make sure to point to the local/develop backend URL).
4. Start the development server:
   `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌿 Gitflow & Workflow

This project enforces strict conventions:
* `main`: Production (Stable and tested). **Direct commits are forbidden.**
* `develop`: Integration and QA environment.
* Branching: `feat/...`, `chore/...`, `fix/...` always originating from `develop`.
* Commits: Must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.