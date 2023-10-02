import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data-service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  windowWidth: number = window.innerWidth;
  showMenu: boolean = false;
  navbarLinks: any;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.navbarLinks = this.dataService.getNavbarLinks();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  scrollTo(id: string, closeMenu = false): void {
    const element = document.getElementById(id);
    if (!element) {
      this.router.navigate(['/home']);
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (closeMenu) {
      this.showMenu = false;
    }
  }
}
