import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  socialLinks: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.socialLinks = this.dataService.getSocialLinks();
  }

  public showAlertFunction() {
    const alertText =
      'Please note that this is a demo, send the following message through your personal mail to my mail: bargolod@gmail.com\n';
    const message =
      'Hi Bar,\n\nThis is ' +
      'XXX.\n\n' +
      'Your message\n\n' +
      'Best Regards, XXX';
    window.alert(alertText + '\n' + message);
  }
}
