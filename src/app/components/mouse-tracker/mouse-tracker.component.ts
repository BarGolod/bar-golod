import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mouse-tracker',
  templateUrl: './mouse-tracker.component.html',
  styleUrls: ['./mouse-tracker.component.scss'],
})
export class MouseTrackerComponent implements OnInit {
  @ViewChild('demoCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private mouseX = 0;
  private mouseY = 0;

  constructor() {}

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('mousemove', (event) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });

    this.createStars();
    this.animate();
  }

  createStars(): void {
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      const size = Math.random() * 2 + 1;
      const color = 'rgba(255, 255, 255, ' + (Math.random() * 0.5 + 0.1) + ')';
      const star = new Star(x, y, size, color);
      this.stars.push(star);
    }
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const star of this.stars) {
      star.update(this.mouseX, this.mouseY);
      star.draw(this.ctx);
    }
  }
}

class Star {
  private initialSize: number;
  private xSpeed: number;
  private ySpeed: number;

  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string
  ) {
    this.initialSize = size;
    this.xSpeed = (Math.random() - 0.5) * 2;
    this.ySpeed = (Math.random() - 0.5) * 2;
  }

  update(mouseX: number, mouseY: number): void {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Check if star is out of canvas bounds
    if (
      this.x < 0 ||
      this.x > window.innerWidth ||
      this.y < 0 ||
      this.y > window.innerHeight
    ) {
      this.x = mouseX + (Math.random() - 0.5) * 100;
      this.y = mouseY + (Math.random() - 0.5) * 100;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
