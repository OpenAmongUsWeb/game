import { Canvas } from "../canvas/canvas.js";
import { Player } from "../player/player.js";

export class Game {

    public canvas: Canvas;
    public running: boolean;

    constructor() {
        window.addEventListener('load', () => this.load());
    }

    private load(): void {
        this.running = false;
        this.canvas = new Canvas('canvas');
        const p1 = new Player('red', 'p1', 1, 16, 16, 0, 0);
        const p2 = new Player('purple', 'p2', 2, 16, 16, 100, 100);
    
        this.canvas.drawPlayer(p1);
        this.canvas.drawPlayer(p2);
    }

    public start(): void {
    }

    public update(): void {
    }

    public stop(): void {
    }

    public render(): void {
    }

    public destroy(): void {
        window.removeEventListener('load', () => this.load());
    }
}
new Game();