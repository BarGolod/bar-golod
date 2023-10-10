import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../shared/data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  descriptions = [
    'Frontend Developer.',
    'Full Stack Developer.',
    'UI/UX Enthusiast.',
    'Continuous Learner.',
    'Clean Code Evangelist.',
  ];
  typedText: string = '';
  currentIndex: number = 0;
  @ViewChild('typedTextElement', { static: true })
  typedTextElement!: ElementRef;

  constructor(
    private router: Router,
    private renderer: Renderer2,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.animateDescription();
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (!element) {
      this.router.navigate(['/home']).then(() => {
        const updatedElement = document.getElementById(id);
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private animateDescription(): void {
    const currentDescription = this.descriptions[this.currentIndex];
    this.typedText = '';

    this.typeText(currentDescription, () => {
      setTimeout(() => {
        this.eraseText(() => {
          this.currentIndex =
            (this.currentIndex + 1) % this.descriptions.length;
          this.animateDescription();
        });
      }, 1000);
    });
  }

  private typeText(text: string, callback: () => void): void {
    let index = 0;
    const typingSpeed = 50;

    const type = () => {
      if (index < text.length) {
        this.renderer.setProperty(
          this.typedTextElement?.nativeElement,
          'textContent',
          text.substring(0, index + 1)
        );
        index++;
        setTimeout(type, typingSpeed);
      } else {
        callback();
      }
    };

    type();
  }

  private eraseText(callback: () => void): void {
    let text = this.typedTextElement.nativeElement.textContent;
    let index = text.length;
    const erasingSpeed = 30;

    const erase = () => {
      if (index > 0) {
        this.renderer.setProperty(
          this.typedTextElement.nativeElement,
          'textContent',
          text.substring(0, index - 1)
        );
        index--;
        setTimeout(erase, erasingSpeed);
      } else {
        callback();
      }
    };

    erase();
  }
}
