import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  formFields: any[];
  contactInfo: any[];

  constructor(private fb: FormBuilder) {
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
        iconSrc: 'https://i.postimg.cc/KvYH1Qmr/2.webp',
        altText: 'my email',
        title: 'Email',
        content: 'bargolod@gmail.com',
        className: 'contactEmail',
      },
      {
        iconSrc: 'https://i.postimg.cc/P5pV4xpC/3.webp',
        altText: 'my number',
        title: 'Phone Number',
        content: '+972 502102036',
        className: 'contactPhone',
      },
      {
        iconSrc: 'https://i.postimg.cc/vBMPbtPn/1.webp',
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
      const alertText =
        'Please note that this is a demo, send the following message through your personal mail to my mail: bargolod@gmail.com\n';
      const message =
        'Hi Bar,\n\nThis is ' +
        valueArray[0] +
        ' ' +
        valueArray[1] +
        '.\n\n' +
        valueArray[3] +
        '.\n\nPlease response back to ' +
        valueArray[2] +
        '\n\n' +
        'Best Regards, ' +
        valueArray[0];
      window.alert(alertText + '\n' + message);

      this.contactForm.reset();
    }
  }
}
