// Ambient Background Effects - Choose Your Style

document.addEventListener('DOMContentLoaded', function() {
    
    // Option 1: Animated Grid Pattern
    function createAnimatedGrid() {
        const gridContainer = document.createElement('div');
        gridContainer.className = 'animated-grid';
        document.body.appendChild(gridContainer);

        // Create grid lines
        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            line.className = 'grid-line';
            line.style.left = (i * 5) + '%';
            line.style.animationDelay = (i * 0.1) + 's';
            gridContainer.appendChild(line);
        }
    }

    // Option 2: Floating Code Symbols
    function createCodeSymbols() {
        const symbolsContainer = document.createElement('div');
        symbolsContainer.className = 'code-symbols';
        document.body.appendChild(symbolsContainer);

        const symbols = ['<', '>', '{', '}', '(', ')', '[', ']', '/', '*', '+', '-', '=', ';', ':', '.', ','];
        
        for (let i = 0; i < 60; i++) {
            const symbol = document.createElement('div');
            symbol.className = 'code-symbol';
            symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            symbol.style.left = Math.random() * 100 + '%';
            symbol.style.top = Math.random() * 100 + '%';
            symbol.style.animationDelay = Math.random() * 5 + 's';
            symbol.style.fontSize = (Math.random() * 10 + 12) + 'px';
            symbolsContainer.appendChild(symbol);
        }
    }

    // Option 3: Subtle Geometric Shapes
    function createGeometricShapes() {
        const shapesContainer = document.createElement('div');
        shapesContainer.className = 'geometric-shapes';
        document.body.appendChild(shapesContainer);

        const shapes = ['circle', 'triangle', 'square', 'diamond'];
        
        for (let i = 0; i < 15; i++) {
            const shape = document.createElement('div');
            const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
            shape.className = `geometric-shape ${shapeType}`;
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = Math.random() * 4 + 's';
            shapesContainer.appendChild(shape);
        }
    }

    // Option 4: Binary Rain Effect
    function createBinaryRain() {
        const rainContainer = document.createElement('div');
        rainContainer.className = 'binary-rain';
        document.body.appendChild(rainContainer);

        for (let i = 0; i < 15; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = (i * 6.67) + '%';
            column.style.animationDelay = Math.random() * 3 + 's';
            
            // Add binary digits to column
            for (let j = 0; j < 20; j++) {
                const digit = document.createElement('span');
                digit.textContent = Math.random() > 0.5 ? '1' : '0';
                digit.style.animationDelay = (j * 0.1) + 's';
                column.appendChild(digit);
            }
            
            rainContainer.appendChild(column);
        }
    }

    // Choose which effect to use (change this to switch effects)
    const selectedEffect = 'codeSymbols'; // Options: 'grid', 'codeSymbols', 'geometric', 'binary'
    
    switch(selectedEffect) {
        case 'grid':
            createAnimatedGrid();
            break;
        case 'codeSymbols':
            createCodeSymbols();
            break;
        case 'geometric':
            createGeometricShapes();
            break;
        case 'binary':
            createBinaryRain();
            break;
        default:
            createCodeSymbols();
    }
});

// CSS for all ambient effects
const ambientCSS = `
/* Animated Grid Effect */
.animated-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.grid-line {
    position: absolute;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, 
        transparent 0%, 
        var(--orange-yellow-crayola) 50%, 
        transparent 100%);
    opacity: 0.1;
    animation: grid-pulse 4s ease-in-out infinite;
}

@keyframes grid-pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
}

/* Code Symbols Effect */
.code-symbols {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.code-symbol {
    position: absolute;
    color: var(--orange-yellow-crayola);
    opacity: 0.2;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    animation: float-symbol 8s ease-in-out infinite;
}

@keyframes float-symbol {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.2;
    }
    25% {
        transform: translateY(-30px) rotate(90deg);
        opacity: 0.4;
    }
    50% {
        transform: translateY(-15px) rotate(180deg);
        opacity: 0.6;
    }
    75% {
        transform: translateY(-45px) rotate(270deg);
        opacity: 0.3;
    }
}

/* Geometric Shapes Effect */
.geometric-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.geometric-shape {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0.15;
    animation: shape-float 6s ease-in-out infinite;
}

.geometric-shape.circle {
    background: var(--orange-yellow-crayola);
    border-radius: 50%;
}

.geometric-shape.triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 20px solid var(--orange-yellow-crayola);
}

.geometric-shape.square {
    background: var(--orange-yellow-crayola);
}

.geometric-shape.diamond {
    background: var(--orange-yellow-crayola);
    transform: rotate(45deg);
}

@keyframes shape-float {
    0%, 100% {
        transform: translateY(0px) scale(1);
        opacity: 0.15;
    }
    50% {
        transform: translateY(-40px) scale(1.2);
        opacity: 0.3;
    }
}

/* Binary Rain Effect */
.binary-rain {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.binary-column {
    position: absolute;
    top: -100%;
    width: 20px;
    height: 200%;
    display: flex;
    flex-direction: column;
    animation: binary-fall 8s linear infinite;
}

.binary-column span {
    color: var(--orange-yellow-crayola);
    opacity: 0.3;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.2;
    animation: binary-fade 2s ease-in-out infinite;
}

@keyframes binary-fall {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
}

@keyframes binary-fade {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.4; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .code-symbol {
        font-size: 10px;
    }
    
    .geometric-shape {
        width: 15px;
        height: 15px;
    }
    
    .binary-column span {
        font-size: 12px;
    }
    
    .grid-line {
        opacity: 0.05;
    }
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = ambientCSS;
document.head.appendChild(style);
