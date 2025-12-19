// Predefined formulas with optimal viewing parameters
const presets = [
    { name: 'Ripple', formula: 'sin(sqrt(x*x + y*y))', xMin: -8, xMax: 8, yMin: -8, yMax: 8, zScale: 1.5, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Saddle', formula: 'x*x - y*y', xMin: -3, xMax: 3, yMin: -3, yMax: 3, zScale: 0.4, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Paraboloid', formula: 'x*x + y*y', xMin: -3, xMax: 3, yMin: -3, yMax: 3, zScale: 0.35, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Wave', formula: 'sin(x) * cos(y)', xMin: -6, xMax: 6, yMin: -6, yMax: 6, zScale: 2, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Egg Carton', formula: 'sin(x) * sin(y)', xMin: -6, xMax: 6, yMin: -6, yMax: 6, zScale: 2, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Cone', formula: 'sqrt(x*x + y*y)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 0.7, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Gaussian', formula: '3*exp(-(x*x + y*y)/4)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 1.2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Sinc', formula: 'sin(sqrt(x*x+y*y)+0.01)/(sqrt(x*x+y*y)+0.01)', xMin: -10, xMax: 10, yMin: -10, yMax: 10, zScale: 3, radius: 18, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Monkey Saddle', formula: 'x*x*x - 3*x*y*y', xMin: -2, xMax: 2, yMin: -2, yMax: 2, zScale: 0.4, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Mexican Hat', formula: '(1 - (x*x+y*y)/4) * exp(-(x*x+y*y)/8)', xMin: -6, xMax: 6, yMin: -6, yMax: 6, zScale: 4, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Spiral', formula: 'sin(atan2(y,x) + sqrt(x*x+y*y))', xMin: -6, xMax: 6, yMin: -6, yMax: 6, zScale: 2, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Cross Waves', formula: 'sin(x*x - y*y)', xMin: -3, xMax: 3, yMin: -3, yMax: 3, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Radial Sine', formula: 'sin(x*x + y*y)', xMin: -3, xMax: 3, yMin: -3, yMax: 3, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Hyperbolic', formula: '1/(x*x + y*y + 1)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 3, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Twisted', formula: 'sin(x*y)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Peaks', formula: '3*(1-x)*(1-x)*exp(-x*x-(y+1)*(y+1)) - 10*(x/5-x*x*x-y*y*y*y*y)*exp(-x*x-y*y) - exp(-(x+1)*(x+1)-y*y)/3', xMin: -3, xMax: 3, yMin: -3, yMax: 3, zScale: 0.5, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Drops', formula: 'cos(x*x + y*y) * exp(-sqrt(x*x+y*y)/3)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 3, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Rosenbrock', formula: '(1-x)*(1-x) + (y-x*x)*(y-x*x)/10', xMin: -2, xMax: 2, yMin: -1, yMax: 3, zScale: 0.8, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Rastrigin', formula: '(x*x - cos(2*PI*x)) + (y*y - cos(2*PI*y))', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 0.25, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Checkerboard', formula: 'sin(x*3)*sin(y*3)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 2, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Ridge', formula: 'exp(-abs(x)) + exp(-abs(y))', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Funnel', formula: '-1/(x*x + y*y + 0.5)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Torus Section', formula: 'sqrt(abs((3-sqrt(x*x+y*y))*(3-sqrt(x*x+y*y))))', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 1.5, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Enneper', formula: 'x - x*x*x/3 + x*y*y', xMin: -2, xMax: 2, yMin: -2, yMax: 2, zScale: 0.5, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Heart', formula: '-abs(x)*0.5 + sqrt(1 - (abs(x)-1)*(abs(x)-1)) * (y > 0 ? y*0.5 : -abs(y)*1.5)', xMin: -2, xMax: 2, yMin: -2, yMax: 2, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Double Peak', formula: '3*exp(-((x-1)*(x-1)+(y-1)*(y-1))/2) + 3*exp(-((x+1)*(x+1)+(y+1)*(y+1))/2)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 1.2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Himmelblau', formula: '(x*x + y - 11)*(x*x + y - 11) + (x + y*y - 7)*(x + y*y - 7)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 0.02, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Ackley', formula: '-20*exp(-0.2*sqrt(0.5*(x*x+y*y))) - exp(0.5*(cos(2*PI*x)+cos(2*PI*y))) + 20 + E', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 0.5, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Sphere Cap', formula: 'sqrt(max(0, 9 - x*x - y*y))', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 1, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Bowl', formula: 'x*x*x*x + y*y*y*y', xMin: -2, xMax: 2, yMin: -2, yMax: 2, zScale: 0.3, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Ripple Wave', formula: 'sin(sqrt(x*x + y*y)) * cos(3*atan2(y, x))', xMin: -6, xMax: 6, yMin: -6, yMax: 6, zScale: 2, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Helicoid', formula: 'atan2(y, x)', xMin: -3, xMax: 3, yMin: -3, yMax: 3, zScale: 1, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Exponential', formula: 'exp(-(x*x + y*y)/8) * cos(x) * cos(y)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 3, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Crater', formula: '(x*x + y*y) * exp(-sqrt(x*x + y*y))', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 2, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Sombrero', formula: 'sin(sqrt(x*x + y*y) * 2) / (sqrt(x*x + y*y) + 0.1)', xMin: -8, xMax: 8, yMin: -8, yMax: 8, zScale: 3, radius: 18, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Camel', formula: '(4 - 2.1*x*x + x*x*x*x/3)*x*x + x*y + (-4 + 4*y*y)*y*y', xMin: -2, xMax: 2, yMin: -1.5, yMax: 1.5, zScale: 0.5, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Cross', formula: 'abs(sin(x)) + abs(sin(y))', xMin: -6, xMax: 6, yMin: -6, yMax: 6, zScale: 1.5, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Diamond', formula: 'abs(x) + abs(y)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 0.8, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Wavy Bowl', formula: '(x*x + y*y)/10 + sin(x*2) * sin(y*2)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 1.5, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Starfish', formula: 'cos(5*atan2(y,x)) * sqrt(x*x + y*y)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 0.8, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Terraces', formula: 'floor(sin(x)*sin(y)*5)/2', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 1.5, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Whirlpool', formula: 'sin(sqrt(x*x+y*y) - atan2(y,x)*2)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 2, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Beale', formula: '(1.5 - x + x*y)*(1.5 - x + x*y) + (2.25 - x + x*y*y)*(2.25 - x + x*y*y) + (2.625 - x + x*y*y*y)*(2.625 - x + x*y*y*y)', xMin: -4, xMax: 4, yMin: -4, yMax: 4, zScale: 0.01, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Booth', formula: '(x + 2*y - 7)*(x + 2*y - 7) + (2*x + y - 5)*(2*x + y - 5)', xMin: -5, xMax: 5, yMin: -5, yMax: 5, zScale: 0.05, radius: 16, theta: Math.PI / 4, phi: Math.PI / 4 },
    { name: 'Goldstein-Price', formula: '(1 + (x + y + 1)*(x + y + 1)*(19 - 14*x + 3*x*x - 14*y + 6*x*y + 3*y*y)) * (30 + (2*x - 3*y)*(2*x - 3*y)*(18 - 32*x + 12*x*x + 48*y - 36*x*y + 27*y*y))', xMin: -2, xMax: 2, yMin: -2, yMax: 2, zScale: 0.00001, radius: 14, theta: Math.PI / 4, phi: Math.PI / 4 },
];

// Three.js setup
let scene, camera, renderer, mesh, controls, axesHelper;
let selectedColor = 0xb8b8bd;
let isWireframe = true;
let autoRotate = true;
let showAxes = true;

// Initialize Three.js
function init() {
    const canvas = document.getElementById('chart-canvas');
    const container = canvas.parentElement;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.set(8, 8, 8);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight2.position.set(-10, -10, -10);
    scene.add(directionalLight2);

    // Add grid helper
    const gridHelper = new THREE.GridHelper(10, 20, 0x2a2a3a, 0x1a1a25);
    scene.add(gridHelper);

    // Add axes helper
    axesHelper = new THREE.AxesHelper(6);
    scene.add(axesHelper);

    // Mouse controls
    setupControls(canvas);

    // Handle resize
    window.addEventListener('resize', onResize);

    // Generate initial chart
    generateChart();

    // Start animation loop
    animate();
}

// Custom orbit controls
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let spherical = { theta: Math.PI / 4, phi: Math.PI / 4, radius: 14 };

function setupControls(canvas) {
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        spherical.theta -= deltaX * 0.01;
        spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi + deltaY * 0.01));

        updateCameraPosition();
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    canvas.addEventListener('mouseup', () => isDragging = false);
    canvas.addEventListener('mouseleave', () => isDragging = false);

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        spherical.radius = Math.max(5, Math.min(30, spherical.radius + e.deltaY * 0.01));
        updateCameraPosition();
    });

    // Touch support
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;

        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        spherical.theta -= deltaX * 0.01;
        spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi + deltaY * 0.01));

        updateCameraPosition();
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    });

    canvas.addEventListener('touchend', () => isDragging = false);
}

function updateCameraPosition() {
    camera.position.x = spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta);
    camera.position.y = spherical.radius * Math.cos(spherical.phi);
    camera.position.z = spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta);
    camera.lookAt(0, 0, 0);
}

function onResize() {
    const container = document.querySelector('.canvas-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Convert JS formula to TeX
function formulaToTeX(formula) {
    let tex = formula;

    // Handle sqrt
    tex = tex.replace(/sqrt\(([^()]+|\([^()]*\))+\)/g, (match) => {
        const inner = match.slice(5, -1);
        return `\\sqrt{${formulaToTeX(inner)}}`;
    });

    // Handle exp
    tex = tex.replace(/exp\(([^()]+|\([^()]*\))+\)/g, (match) => {
        const inner = match.slice(4, -1);
        return `e^{${formulaToTeX(inner)}}`;
    });

    // Handle log
    tex = tex.replace(/log\(([^()]+|\([^()]*\))+\)/g, (match) => {
        const inner = match.slice(4, -1);
        return `\\ln{(${formulaToTeX(inner)})}`;
    });

    // Handle trig functions
    const trigFuncs = ['sin', 'cos', 'tan', 'sinh', 'cosh', 'tanh', 'asin', 'acos', 'atan'];
    trigFuncs.forEach(func => {
        const regex = new RegExp(`${func}\\(([^()]+|\\([^()]*\\))+\\)`, 'g');
        tex = tex.replace(regex, (match) => {
            const inner = match.slice(func.length + 1, -1);
            return `\\${func}{(${formulaToTeX(inner)})}`;
        });
    });

    // Handle atan2
    tex = tex.replace(/atan2\(([^,]+),\s*([^)]+)\)/g, (match, a, b) => {
        return `\\text{atan2}(${formulaToTeX(a)}, ${formulaToTeX(b)})`;
    });

    // Handle abs
    tex = tex.replace(/abs\(([^()]+|\([^()]*\))+\)/g, (match) => {
        const inner = match.slice(4, -1);
        return `\\left|${formulaToTeX(inner)}\\right|`;
    });

    // Handle floor and ceil
    tex = tex.replace(/floor\(([^()]+|\([^()]*\))+\)/g, (match) => {
        const inner = match.slice(6, -1);
        return `\\lfloor ${formulaToTeX(inner)} \\rfloor`;
    });
    tex = tex.replace(/ceil\(([^()]+|\([^()]*\))+\)/g, (match) => {
        const inner = match.slice(5, -1);
        return `\\lceil ${formulaToTeX(inner)} \\rceil`;
    });

    // Handle max and min
    tex = tex.replace(/max\(([^,]+),\s*([^)]+)\)/g, (match, a, b) => {
        return `\\max(${formulaToTeX(a)}, ${formulaToTeX(b)})`;
    });
    tex = tex.replace(/min\(([^,]+),\s*([^)]+)\)/g, (match, a, b) => {
        return `\\min(${formulaToTeX(a)}, ${formulaToTeX(b)})`;
    });

    // Handle pow
    tex = tex.replace(/pow\(([^,]+),\s*([^)]+)\)/g, (match, base, exp) => {
        return `{(${formulaToTeX(base)})}^{${formulaToTeX(exp)}}`;
    });

    // Replace multiplication
    tex = tex.replace(/\*/g, ' \\cdot ');

    // Replace PI and E
    tex = tex.replace(/\bPI\b/g, '\\pi');
    tex = tex.replace(/\bE\b/g, 'e');

    return tex;
}

function updateFormulaPreview() {
    const formula = document.getElementById('formula-input').value;
    const preview = document.getElementById('formula-preview');

    try {
        const tex = `z = ${formulaToTeX(formula)}`;
        katex.render(tex, preview, {
            throwOnError: false,
            displayMode: true
        });
    } catch (e) {
        preview.textContent = formula;
    }
}

// Safe math evaluation
function createEvaluator(formula) {
    const mathFuncs = {
        sin: Math.sin,
        cos: Math.cos,
        tan: Math.tan,
        sqrt: Math.sqrt,
        abs: Math.abs,
        exp: Math.exp,
        log: Math.log,
        pow: Math.pow,
        floor: Math.floor,
        ceil: Math.ceil,
        PI: Math.PI,
        E: Math.E,
        atan: Math.atan,
        atan2: Math.atan2,
        asin: Math.asin,
        acos: Math.acos,
        sinh: Math.sinh,
        cosh: Math.cosh,
        tanh: Math.tanh,
        min: Math.min,
        max: Math.max,
    };

    return function(x, y) {
        try {
            const func = new Function(
                'x', 'y',
                ...Object.keys(mathFuncs),
                `return ${formula};`
            );
            return func(x, y, ...Object.values(mathFuncs));
        } catch (e) {
            return NaN;
        }
    };
}

function generateChart() {
    const formula = document.getElementById('formula-input').value;
    const xMin = parseFloat(document.getElementById('x-min').value);
    const xMax = parseFloat(document.getElementById('x-max').value);
    const yMin = parseFloat(document.getElementById('y-min').value);
    const yMax = parseFloat(document.getElementById('y-max').value);
    const resolution = parseInt(document.getElementById('resolution').value);
    const zScale = parseFloat(document.getElementById('z-scale').value);

    const evaluate = createEvaluator(formula);

    // Test the formula
    const testValue = evaluate(0, 0);
    if (isNaN(testValue) && formula.indexOf('sqrt') === -1) {
        showError('Invalid formula');
        return;
    }

    // Remove existing mesh
    if (mesh) {
        scene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
    }

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const indices = [];
    const colors = [];

    const xStep = (xMax - xMin) / resolution;
    const yStep = (yMax - yMin) / resolution;

    let minZ = Infinity, maxZ = -Infinity;
    const zValues = [];

    // Calculate Z values and find range
    for (let i = 0; i <= resolution; i++) {
        zValues[i] = [];
        for (let j = 0; j <= resolution; j++) {
            const x = xMin + i * xStep;
            const y = yMin + j * yStep;
            let z = evaluate(x, y);

            if (isNaN(z) || !isFinite(z)) z = 0;
            z *= zScale;

            zValues[i][j] = z;
            if (isFinite(z)) {
                minZ = Math.min(minZ, z);
                maxZ = Math.max(maxZ, z);
            }
        }
    }

    // Create vertices with color based on height
    const color = new THREE.Color(selectedColor);
    const colorDark = new THREE.Color(selectedColor).multiplyScalar(0.3);

    for (let i = 0; i <= resolution; i++) {
        for (let j = 0; j <= resolution; j++) {
            const x = xMin + i * xStep;
            const y = yMin + j * yStep;
            const z = zValues[i][j];

            vertices.push(x, z, y);

            // Color based on height
            const t = maxZ !== minZ ? (z - minZ) / (maxZ - minZ) : 0.5;
            const vertexColor = colorDark.clone().lerp(color, t);
            colors.push(vertexColor.r, vertexColor.g, vertexColor.b);
        }
    }

    // Create faces
    for (let i = 0; i < resolution; i++) {
        for (let j = 0; j < resolution; j++) {
            const a = i * (resolution + 1) + j;
            const b = a + 1;
            const c = a + (resolution + 1);
            const d = c + 1;

            indices.push(a, c, b);
            indices.push(b, c, d);
        }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    // Create material
    const material = new THREE.MeshPhongMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
        wireframe: isWireframe,
        shininess: 30,
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
}

function showError(message) {
    const toast = document.getElementById('error-toast');
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3000);
}

function animate() {
    requestAnimationFrame(animate);

    if (autoRotate && !isDragging) {
        spherical.theta += 0.003;
        updateCameraPosition();
    }

    renderer.render(scene, camera);
}

// Setup UI
function setupUI() {
    // Generate preset buttons
    const presetsGrid = document.getElementById('presets-grid');
    presets.forEach((preset, index) => {
        const btn = document.createElement('button');
        btn.className = 'preset-btn' + (index === 0 ? ' active' : '');
        btn.innerHTML = `
            <div class="preset-name">${preset.name}</div>
            <div class="preset-formula">${preset.formula}</div>
        `;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update formula
            document.getElementById('formula-input').value = preset.formula;

            // Update axis ranges
            document.getElementById('x-min').value = preset.xMin;
            document.getElementById('x-max').value = preset.xMax;
            document.getElementById('y-min').value = preset.yMin;
            document.getElementById('y-max').value = preset.yMax;

            // Update z-scale
            document.getElementById('z-scale').value = preset.zScale;

            // Update camera position for optimal viewing
            spherical.radius = preset.radius;
            spherical.theta = preset.theta;
            spherical.phi = preset.phi;
            updateCameraPosition();

            updateFormulaPreview();
            generateChart();
        });
        presetsGrid.appendChild(btn);
    });

    // Color picker
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            selectedColor = parseInt(option.dataset.color);
            generateChart();
        });
    });

    // Generate button
    document.getElementById('generate-btn').addEventListener('click', generateChart);

    // Wireframe toggle
    document.getElementById('wireframe-toggle').addEventListener('change', (e) => {
        isWireframe = e.target.checked;
        if (mesh) {
            mesh.material.wireframe = isWireframe;
        }
    });

    // Auto-rotate toggle
    document.getElementById('auto-rotate').addEventListener('change', (e) => {
        autoRotate = e.target.checked;
    });

    // Show axes toggle
    document.getElementById('show-axes').addEventListener('change', (e) => {
        showAxes = e.target.checked;
        if (axesHelper) {
            axesHelper.visible = showAxes;
        }
    });

    // Enter key to generate
    document.getElementById('formula-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateChart();
    });

    // Update formula preview on input
    document.getElementById('formula-input').addEventListener('input', updateFormulaPreview);

    // Initial formula preview
    updateFormulaPreview();

    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        sidebarToggle.classList.toggle('collapsed');
        // Trigger resize after transition
        setTimeout(onResize, 300);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupUI();
    init();
});