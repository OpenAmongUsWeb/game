import { Player } from "../player/player";

export class Canvas {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    
    constructor(id: string) {
        this.initCanvas(id);
    }

    public initCanvas(id: string): void {
        this.canvas = document.querySelector(`#${id}`) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    public drawPlayer(player: Player): void {
        this.ctx.fillStyle = player.getColor();

        this.ctx.fillRect(
            player.getOffsetX(),
            player.getOffsetY(),
            player.getWidth(),
            player.getHeight()
        );
    }
}