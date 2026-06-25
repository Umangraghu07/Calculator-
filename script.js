* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #0f172a, #1e293b);
}

.calculator {
    width: 320px;
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 24px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.display {
    margin-bottom: 20px;
}

#screen {
    width: 100%;
    height: 70px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    color: #ffffff;
    font-size: 2rem;
    text-align: right;
    padding: 0 10px;
    outline: none;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.btn {
    height: 60px;
    border: none;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);
    color: #f8fafc;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

.btn:active {
    transform: translateY(0);
}

.btn-operator {
    background: rgba(249, 115, 22, 0.2);
    color: #f97316;
}

.btn-operator:hover {
    background: #f97316;
    color: #ffffff;
}

.btn-clear {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.btn-clear:hover {
    background: #ef4444;
    color: #ffffff;
}

.btn-equal {
    grid-row: span 2;
    height: 132px;
    background: #10b981;
    color: #ffffff;
}

.btn-equal:hover {
    background: #059669;
}

.btn-zero {
    grid-column: span 2;
}
