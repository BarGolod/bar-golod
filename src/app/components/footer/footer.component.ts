import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/data-service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  sections: any = [];
  phoneNumber: string = '';
  email: string = '';

  constructor(
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.phoneNumber = '+972 502102036';
    this.email = 'bargolod@gmail.com';
    this.sections = [
      {
        title: 'Links',
        items: [
          { text: 'Home', action: () => this.scrollTo('home'), type: 'link' },
          { text: 'About', action: () => this.scrollTo('about'), type: 'link' },
          {
            text: 'Resume',
            action: () => this.scrollTo('resume'),
            type: 'link',
          },
          {
            text: 'Contact',
            action: () => this.scrollTo('contact'),
            type: 'link',
          },
        ],
      },
      {
        title: 'Contact',
        items: [this.phoneNumber, this.email].map((text) => ({
          text,
          type: 'text',
        })),
      },
      {
        title: 'Services',
        items: ['Web Development', 'Web Design', 'UI/UX Design'].map(
          (text) => ({ text, type: 'text' })
        ),
      },
      {
        title: 'Legal',
        items: [
          {
            text: 'Terms of use',
            routerLink: 'terms-of-use',
            type: 'link',
          },
          {
            text: 'Privacy policy',
            routerLink: 'privacy-policy',
            type: 'link',
          },
          {
            text: 'Accessibility',
            routerLink: 'accessibility',
            type: 'link',
          },
        ],
      },
    ];
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      this.router.navigate(['home']).then(() => {
        const updatedElement = document.getElementById(id);
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  getLegal(key: string): any {
    return this.dataService.getLegal(key);
  }

  openLegalDialog(legalKey: string) {
    const legalText = this.dataService.getLegal(legalKey);

    this.dialog.open(DialogComponent, {
      width: '80%',
      data: legalText,
    });
  }
}
