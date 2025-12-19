# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A browser-based 3D mathematical function visualizer. Users input formulas like `z = f(x, y)` and see them rendered as interactive 3D surfaces using Three.js. No build process required.

## Running the Application

Open `index.html` directly in a browser, or serve locally:
```bash
python3 -m http.server 8000
```

## Architecture

**Single-page static app with three files:**
- `index.html` - UI structure with sidebar controls and canvas
- `app.js` - All application logic (Three.js rendering, formula parsing, UI)
- `style.css` - Styling with CSS variables and responsive breakpoints

**Key components in app.js:**
- `presets` array (lines 2-48) - 45+ predefined formulas with optimal camera/scale settings
- `createEvaluator()` - Safely evaluates user formulas using `new Function()` with whitelisted Math functions
- `formulaToTeX()` - Converts JS math expressions to LaTeX for KaTeX rendering
- `generateChart()` - Creates Three.js BufferGeometry mesh from formula evaluation
- Custom orbit controls via `spherical` object (theta, phi, radius) - no OrbitControls dependency

**External dependencies (CDN-loaded):**
- Three.js r128 for 3D rendering
- KaTeX 0.16.9 for LaTeX formula preview

## Formula System

User formulas are evaluated via `createEvaluator()` which wraps them in a sandboxed function with access to: `sin, cos, tan, sqrt, abs, exp, log, pow, floor, ceil, atan, atan2, asin, acos, sinh, cosh, tanh, min, max, PI, E`.

Presets include both the formula string and optimal viewing parameters (axis ranges, z-scale, camera position).
