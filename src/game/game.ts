import { Canvas } from "../canvas/canvas.js";

window.addEventListener('load', () => loadGame());

function loadGame(): void {
    new Canvas('canvas');
}