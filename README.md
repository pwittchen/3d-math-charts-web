# 3D Math Charts

**[Live Demo](https://pwittchen.github.io/3d-math-charts-web/)**

An interactive vibe-coded web application for visualizing mathematical functions as 3D surfaces. Enter any formula z = f(x, y) and see it rendered in real-time.

## Features

- **Custom formulas** - Input any mathematical expression using x and y variables
- **25+ presets** - Built-in functions like Ripple, Saddle, Gaussian, Mexican Hat, and more
- **Live LaTeX preview** - See your formula rendered in proper mathematical notation
- **Interactive 3D controls** - Drag to rotate, scroll to zoom
- **Customizable parameters** - Adjust X/Y ranges, resolution, Z scale
- **Multiple color schemes** - 8 color options for the surface
- **Display options** - Toggle wireframe, auto-rotation, and axes
- **Responsive design** - Works on desktop, tablet, and mobile devices

## Usage

Simply open `index.html` in a modern web browser. No installation or build process required.

Alternatively, serve it via a local HTTP server:

```bash
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

### Controls

- **Left-click + drag** - Rotate the view
- **Scroll wheel** - Zoom in/out
- **Touch** - Drag to rotate, pinch to zoom (mobile)

### Supported Math Functions

| Trigonometric | Exponential | Other |
|---------------|-------------|-------|
| sin, cos, tan | exp, log | sqrt, pow, abs |
| asin, acos, atan | sinh, cosh, tanh | floor, ceil |
| atan2 | | min, max |

**Constants:** `PI`, `E`

### Example Formulas

```
sin(sqrt(x*x + y*y))          # Ripple
x*x - y*y                     # Saddle
exp(-(x*x + y*y))             # Gaussian
sin(x) * cos(y)               # Egg Carton
sin(x*x + y*y) / (x*x + y*y)  # Sinc
```

## Requirements

- Modern web browser with WebGL support (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection (for CDN-hosted libraries)

## Technologies

- [Three.js](https://threejs.org/) (r128) - 3D graphics
- [KaTeX](https://katex.org/) (0.16.9) - LaTeX rendering

