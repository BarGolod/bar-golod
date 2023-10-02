import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './shared/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = '';
  subtitle: string = '';
  content: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const slug = params ? params['slug'] : null;
      this.setContent(slug);
    });

    const element = document.getElementById('content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setContent(slug: string): void {
    const legals = this.dataService.getLegal(slug);

    if (legals && legals[slug]) {
      this.title = legals[slug].title;
      this.subtitle = legals[slug].subtitle;
      this.content = legals[slug].content;
    } else {
      this.title = '404';
      this.subtitle = 'Page not found';
      this.content = 'The page you are looking for does not exist.';
    }
  }
}
