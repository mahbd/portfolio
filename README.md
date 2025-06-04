# Mahmudul Alam – Portfolio

> A personal portfolio website showcasing my skills and projects, built with Next.js 13 (App Router), React, TypeScript, and Tailwind CSS.

Available at https://mahmudul.com.bd

## Table of Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Data & Configuration](#data--configuration)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Demo

Run locally on http://localhost:3000 after starting the development server.

## Technologies

- Next.js 13 (App Router)
- React & TypeScript
- Tailwind CSS
- React Icons

## Features

- Fully responsive, mobile-first design
- Light/dark theme toggling with CSS variables
- Modular, data-driven sections: Hero, Stats, Services, Works, Hobby Projects, Resume, Skills, Contact
- Easy content management via a central `data/portfolioData.ts` file
- SEO-friendly metadata configuration

## Getting Started

1. Clone the repository:
   ```powershell
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start development server:
   ```powershell
   npm run dev
   ```
4. Open http://localhost:3000 in your browser.

## Project Structure

```text
.
├─ app/
│  ├─ layout.tsx      # Root layout with ThemeProvider & Header
│  └─ page.tsx        # HomePage importing all sections
├─ components/        # UI components & sections
│  └─ sections/       # Individual page sections
├─ contexts/          # ThemeContext for light/dark mode
├─ data/
│  └─ portfolioData.ts  # All content and icon configuration
├─ public/
│  └─ images/         # Static image assets
├─ styles/
│  └─ globals.css     # Tailwind imports & CSS variables
├─ next.config.ts
├─ postcss.config.mjs
├─ tailwind.config.js
└─ README.md          # Project overview and setup instructions
```

## Available Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server

## Data & Configuration

All dynamic content lives in `data/portfolioData.ts`: contact links, services, works, experiences, education, skills, and stats. Update this file to modify website content without touching UI code.

## Deployment

1. Push to GitHub
2. Connect your repository on [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys your site

## License

This project is open source under the MIT License.

## Contact

- **Portfolio**: https://mahmudul.com.bd
- **Email**: mahbd17@hotmail.com
- **Facebook**: https://facebook.com/maha48bd20thb
- **LinkedIn**: https://www.linkedin.com/in/mah20t/
- **GitHub**: https://github.com/mahbd
- **Codeforces**: https://codeforces.com/profile/mahbd
