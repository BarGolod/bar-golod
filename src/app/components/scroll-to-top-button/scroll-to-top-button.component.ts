import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top-button',
  templateUrl: './scroll-to-top-button.component.html',
  styleUrls: ['./scroll-to-top-button.component.scss'],
})
export class ScrollToTopButtonComponent implements OnInit {
  showScrollToTopButton: boolean = false;

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private checkScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.showScrollToTopButton = scrollY > 100;
  }
}
