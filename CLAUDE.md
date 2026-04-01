# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Umami Lab is a single-page marketing website for an anime-themed Japanese restaurant in New Delhi. Built with React 18 + TypeScript + Vite, styled with Tailwind CSS.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (outputs to `dist/`)
- **Preview build:** `npm run preview`
- **Lint:** `npm run lint`

No test framework is configured.

## Architecture

Single-page app with smooth-scroll navigation between sections. No client-side routing is used despite React Router being installed — all content is on one page with anchor-based scrolling via a custom `ScrollLink` component.

**Key paths:**
- `src/App.tsx` — Main layout composing all sections top-to-bottom
- `src/components/` — One component per page section (HeroSection, MenuSection, AnimeSection, etc.)
- `src/utils/classNames.ts` — Tailwind class merge helper (`cn`) using clsx + tailwind-merge
- `src/main.tsx` — Entry point, wraps app in BrowserRouter

**Styling:** All styling is inline Tailwind classes. No separate CSS modules. Global styles in `src/index.css`.

**State:** Local component state only (no global store). VideoSection uses useState for modal toggle.

**Backend:** Supabase JS client is installed but not yet integrated. No API calls in current code. CTAs link to WhatsApp.

## TypeScript

Strict mode is enabled. The project targets ES2020 with bundler module resolution (`tsconfig.app.json`).
