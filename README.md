# Saga's Developer Portfolio & Blog

Welcome to the source code of my personal developer portfolio and digital garden. This project showcases my work, open-source contributions, and blog posts focusing on software engineering and web development.

## 🚀 Tech Stack

This site is built with modern web technologies focusing on performance, accessibility, and developer experience.

*   **Framework:** [Astro](https://astro.build/) - For incredibly fast static site generation (SSG) using its Islands Architecture.
*   **UI/Interactivity:** [React](https://react.dev/) - Used minimally for interactive components like the theme toggle.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework for rapid and responsive UI development.
*   **Icons:** [Lucide React](https://lucide.dev/) - Clean and consistent iconography.
*   **Typography:** [Fontsource (Inter)](https://fontsource.org/fonts/inter) - Beautiful, highly legible sans-serif font.
*   **Content:** Markdown / MDX via Astro's Content Collections API.
*   **Forms:** [Web3Forms](https://web3forms.com/) - Simple static form submissions.

## ✨ Features

*   **⚡️ Blazing Fast:** Ships zero JavaScript by default. Interactive elements are hydrated only when needed.
*   **🌙 Dark Mode:** Full dark mode support with system preference detection and `localStorage` persistence.
*   **📝 Markdown Blog:** Robust blogging system utilizing Astro Content Collections for type-safe frontmatter. Includes rich text styling via `@tailwindcss/typography`.
*   **📱 Responsive Design:** Looks great on mobile, tablet, and desktop screens.
*   **📬 Working Contact Form:** Fully functional contact page without needing a backend server.
*   **📂 Categorized Projects:** A dedicated portfolio page highlighting featured work, open-source contributions, and coding challenges.

## 🛠️ Local Development

To run this project locally on your machine, follow these steps:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm (or yarn, pnpm, bun)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Saga-sanga/my-portfolio-site.git
    cd my-portfolio-site
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:4321` to view the site.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📁 Project Structure

```text
/
├── public/                 # Static assets (favicons, images)
├── src/
│   ├── components/         # Reusable UI elements
│   │   ├── astro/          # Static Astro components (Header, Footer)
│   │   └── react/          # Interactive React islands (ThemeToggle)
│   ├── content/            # Content collections
│   │   └── blog/           # Markdown blog posts
│   ├── layouts/            # Page wrappers (BaseLayout)
│   ├── pages/              # File-based routing
│   └── styles/             # Global CSS and Tailwind directives
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
