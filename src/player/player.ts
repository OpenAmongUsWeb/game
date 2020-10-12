export class Player {
    constructor(
      private color: string,
      private name: string,
      private id: number,
      private width: number = 16,
      private height: number = 16,
      private offsetX: number = 0,
      private offsetY: number = 0
    ) {}
  
    public setColor(color: string): void {
      this.color = color;
    }
  
    public setOffsetX(offsetX: number): void {
      this.offsetX = offsetX;
    }
  
    public setOffsetY(offsetY: number): void {
      this.offsetY = offsetY;
    }
  
    public getColor(): string {
      return this.color;
    }
  
    public getWidth(): number {
      return this.width;
    }
  
    public getHeight(): number {
      return this.height;
    }
  
    public getOffsetX(): number {
      return this.offsetY;
    }
  
    public getOffsetY(): number {
      return this.offsetY;
    }
  }