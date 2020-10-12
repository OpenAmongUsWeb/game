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
}