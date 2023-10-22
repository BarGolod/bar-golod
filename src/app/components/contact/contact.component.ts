import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../shared/data-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  formFields: any[];
  contactInfo: any[];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.formFields = [
      { name: 'firstName', type: 'text', displayName: 'First Name' },
      { name: 'lastName', type: 'text', displayName: 'Last Name' },
      { name: 'email', type: 'email', displayName: 'Email' },
      { name: 'message', type: 'text', displayName: 'Message' },
    ];

    // Initialize the form
    this.contactForm = this.fb.group({});
    this.formFields.forEach((field) => {
      if (field.type === 'email') {
        this.contactForm.addControl(
          field.name,
          this.fb.control('', [Validators.required, Validators.email])
        );
      } else {
        this.contactForm.addControl(
          field.name,
          this.fb.control('', Validators.required)
        );
      }
    });

    this.contactInfo = [
      {
        iconSrc: '/assets/icons/contact-email.svg',
        altText: 'my email',
        title: 'Email',
        content: 'bargolod@gmail.com',
        className: 'contactEmail',
      },
      {
        iconSrc: '/assets/icons/contact-phone.png',
        altText: 'my number',
        title: 'Phone Number',
        content: '+972 502102036',
        className: 'contactPhone',
      },
      {
        iconSrc: '/assets/icons/contact-address.svg',
        altText: 'my address',
        title: 'Address',
        content: 'Givatayim',
        className: 'contactAddress',
      },
    ];
  }

  ngOnInit(): void {}

  sendMessage() {
    if (this.contactForm.valid) {
      let valueArray = Object.values(this.contactForm.controls).map(
        (el: any) => el.value
      );

      const notification =
        'Please note that this is a Frontend demo site, without any Backend. </br>' +
        'Send the following message through your personal mail to my mail: bargolod@gmail.com</br></br>';

      const message =
        'Hi Bar,</br></br>This is ' +
        valueArray[0] +
        ' ' +
        valueArray[1] +
        '.</br></br>' +
        valueArray[3] +
        '.</br></br>Please response back to ' +
        valueArray[2] +
        '</br></br>' +
        'Best Regards, ' +
        valueArray[0] +
        '</br>';

      this.dataService.showDialogFunction(notification, message);

      this.contactForm.reset();
    }
  }
}
