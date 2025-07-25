# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Create React App-based project for HZICS (Huizhi Intelligent Conference System) - a cloud platform for intelligent conference management. The project uses React 19.1.0 and features a Chinese-language website with sections for home, solutions, products, projects, news, about, and contact. 

## Tech Stack

- **React**: 19.1.0 (functional components with hooks)
- **React Router**: 7.6.3 (client-side routing)
- **CSS Modules**: Component-scoped styling
- **Create React App**: Build tooling
- **Testing Library**: For testing components

## Development Commands

There is no way currently to test for errors, ask the user to do it manually towards the end after all changes are done. 

## Architecture

### Component Structure
- **App.js**: Main application component with routing and global navigation
- **components/**: Page components organized in folders
  - Each page component has its own folder with index.js export
  - Home page uses modular subcomponent architecture:
    - `HeroSection/`: Main banner area with animated cards
    - `FeaturesSection/`: Feature highlights and system architecture
    - `CustomerExamples/`: Customer case studies with carousel
    - `SolutionsSection/`: Solution offerings and products
    - `AboutUs/`: Company information and news

### Routing
- Uses React Router for SPA navigation
- Custom NavLink component handles active state styling
- Conditional footer rendering controlled via `setShowFooter` prop

### Styling Patterns
- CSS Modules for component-scoped styles
- Global styles in App.css and index.css
- Home subcomponents use semantic .module.css file names matching component names
- CSS module files follow the pattern: `ComponentName.module.css`

### State Management
- Local state with useState hooks
- No global state management library
- Props drilling for shared state like footer visibility

## Assets
- Company logo: `/images/logo.png`
- Banner images: `/images/banner01.png`, `/images/banner02.png`, `/images/banner03.png`
- Business images stored in `/public/images/` directory
- Some Chinese filename images present

## Development Notes
- Components use PascalCase naming
- Chinese UI text is hardcoded (no i18n setup)
- Modern React patterns with hooks
- No TypeScript configuration
- Standard CRA ESLint configuration

## IMPORETANT
- During our conversation break things down in to discrete changes, and suggest a small test after each stage to make sure things are on the right track.
- Request clarification for anything unclear or ambiguous. DO NOT make any changes until you are absolutely certain that the details are accounted for, provide the user with a list of clarifications before you make the change. 
- Any changes that the user request that might require changes else where in the code or changes in more than one file, you should ask if this is what the user intended. 
