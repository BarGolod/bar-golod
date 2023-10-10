import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
})
export class SocialLinksComponent implements OnInit {
  socialLinks: any[] = [];

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.socialLinks = this.dataService.getSocialLinks();
  }

  public showDialogFunction() {
    const notification =
      'Please note that this is a Frontend demo site, without any Backend. </br>' +
      'Send the following message through your personal mail to my mail: bargolod@gmail.com</br></br>';
    const message =
      'Hi Bar,</br></br>This is ' +
      'XXX.</br></br>' +
      '- Your message -</br></br>' +
      'Best Regards, XXX';

    this.dataService.showDialogFunction(notification, message);
  }
}
