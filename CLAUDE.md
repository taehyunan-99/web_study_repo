# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a Korean web development learning repository organized by technology and complexity level:

### Core Structure
- **HTML/**: Basic HTML learning with tags, forms, tables, and practice exercises
- **CSS/**: Two-tier CSS learning (CSS1 basic selectors, CSS2 advanced layouts/animations)
- **JavaScript/**: Progressive JavaScript learning (JS1-JS3, DOM manipulation, async programming, destructuring)
- **React/**: Two React applications for learning React fundamentals

### File Organization Pattern
Most learning modules follow this pattern:
- Main concept files (e.g., `selector1.html`, `array-method.js`)
- Corresponding practice directories with numbered exercises
- HTML files typically have matching CSS/JS files in the same directory

## Development Commands

### React Applications
Navigate to the specific React app directory first:

```bash
cd React/first-react/
# or
cd React/my-todo-app/
```

Then use standard React scripts:
- **Development server**: `npm start` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Tests**: `npm run test`

### React App Architecture
- **first-react**: Demonstrates React basics (Props, State, components, map rendering)
  - Uses styled-components for styling
  - Includes a Counter component demonstrating state management
  
- **my-todo-app**: Full todo application with CRUD operations
  - State management with useState
  - Local state for todo items with id, text, completed properties
  - Standard React patterns for form handling and list rendering

## Content Language
All content and comments in this repository are in Korean. Learning materials, variable names, and UI text use Korean language.

## Working with Learning Files
- HTML files are standalone and can be opened directly in browsers
- JavaScript files are typically imported into corresponding HTML files
- CSS files are linked from HTML files following standard web development practices
- No build process needed for vanilla HTML/CSS/JS files - just open HTML files in browser