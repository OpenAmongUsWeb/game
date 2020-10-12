import { Canvas } from "../canvas/canvas.js";
import { Player } from "../player/player.js";

window.addEventListener('load', () => loadGame());

function loadGame(): void {
    const game = new Canvas('canvas');
    const p1 = new Player('red', 'p1', 1, 16, 16, 0, 0);
    const p2 = new Player('purple', 'p2', 2, 16, 16, 100, 100);

    game.drawPlayer(p1);
    game.drawPlayer(p2);
}