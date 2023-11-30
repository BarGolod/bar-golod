import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private currentDate: any = this.datePipe.transform(
    new Date(),
    'MMMM d, yyyy'
  );

  private navbarLinks: any = [
    { name: 'Home', id: 'home', key: 'home' },
    { name: 'About', id: 'about', key: 'about' },
    { name: 'Resume', id: 'resume', key: 'resume' },
    { name: 'Hire Me', id: 'contact', key: 'contact' },
  ];

  private legals: any = {
    'terms-of-use': {
      title: 'Terms of Use',
      subtitle: 'Last updated: ' + this.currentDate,
      content: `Welcome to Bar Golod's Portfolio Website, referred to as the 'Website.'<br>By accessing or using this Website, you are indicating your agreement to comply with and be bound by the following terms and conditions, known as the 'Terms of Use.' We kindly request that you carefully review these Terms of Use before utilizing the Website.<br><br>1. Acceptance of Terms:<br>By accessing or using the Website, you are acknowledging that you have read, comprehended, and consented to abide by these Terms of Use. If you do not concur with these Terms of Use, please refrain from using the Website.<br><br>2. Intellectual Property:<br>All content available on this Website, including text, images, graphics, videos, and logos, is the exclusive property of Bar Golod and is protected by copyright, trademark, and other intellectual property laws. Any reproduction, modification, distribution, or utilization of the Website's content requires the explicit written permission of Bar Golod.<br><br>3. Use of the Website:<br>You are obligated to use the Website solely for lawful purposes and in a manner that does not contravene any applicable laws or regulations. Prohibited activities include:<br>- Engaging in any illegal or harmful actions while using the Website.<br>- Attempting to gain unauthorized access to any part of the Website or its related systems.<br>- Transmitting content that is harmful, offensive, or infringes upon the rights of others.<br><br>4. Disclaimer:<br>The content provided on this Website is intended solely for informational purposes. Bar Golod disclaims any representations or warranties, whether express or implied, regarding the accuracy, completeness, or suitability of the content. Your use of the Website is entirely at your own risk.<br><br>5. Links to Third-Party Websites:<br>The Website may include links to third-party websites for your convenience. Please be aware that Bar Golod neither endorses nor exercises control over the content or privacy practices of these third-party websites. We bear no responsibility for the content or privacy policies of these external sites.<br><br>6. Changes to Terms:<br>Bar Golod retains the right to amend these Terms of Use at any time. Such modifications will become effective immediately upon posting on the Website. Your continued use of the Website after any alterations constitutes your acceptance of the updated Terms of Use.<br><br>7. Termination:<br>Bar Golod maintains the right to terminate or suspend your access to the Website at any time and without prior notice, for any reason, including if you violate these Terms of Use.<br><br>8. Contact Information:<br>Should you have any inquiries or concerns regarding these Terms of Use, please do not hesitate to contact us at bargolod@gmail.com.<br><br>9. Governing Law:<br>These Terms of Use are governed by and construed in accordance with the laws of Israel, without consideration of its conflict of law principles. By using this Website, you consent to the exclusive jurisdiction of the courts located within Israel for the resolution of any disputes arising from or related to these Terms of Use.`,
    },

    'privacy-policy': {
      title: 'Privacy Policy',
      subtitle: 'Last updated: ' + this.currentDate,
      content: `Welcome to Bar Golod's Portfolio Website, known as the 'Website.' Our Privacy Policy provides insights into how Bar Golod acquires, utilizes, and safeguards your personal data during your use of the Website.<br><br>Data Collection:<br>We gather personal information voluntarily submitted by you, such as through contact forms or newsletter subscriptions. This may encompass details like your name, email address, and additional information of your choice.<br><br>Utilization of Your Data:<br>Your personal data serves various purposes, including responding to inquiries, delivering updates or newsletters, and enhancing the Website's content and functionality.<br><br>Cookies and Tracking Technologies:<br>We employ cookies and akin tracking technologies to capture insights into your browsing activities on our Website. You can tailor your browser settings to decline cookies or receive notifications about their transmission.<br><br>Links to Third-Party Websites:<br>Our Website features links to third-party websites. We don't govern the privacy practices of these external sites and bear no responsibility for their content or privacy policies. We advocate reviewing the privacy policies of these third-party websites.<br><br>Security Measures:<br>We undertake reasonable precautions to shield your personal data from unauthorized access or disclosure. Nonetheless, it's essential to recognize that no online data transmission or storage is entirely foolproof, and we cannot ensure absolute security.<br><br>Privacy Policy Updates:<br>Periodically, we may revise this Privacy Policy. Any alterations will be posted on this page, with the latest revision date indicated at the top.<br><br>Contact Information:<br>For inquiries or concerns regarding this Privacy Policy or the handling of your personal data, please reach out to us at bargolod@gmail.com.<br><br>By utilizing this Website, you express your consent to abide by the terms of this Privacy Policy.`,
    },

    accessibility: {
      title: 'Accessibility',
      subtitle: 'Last updated: ' + this.currentDate,
      content: `At Bar Golod's Portfolio Website, we are dedicated to ensuring accessibility for all users, including those with disabilities, fostering inclusivity through user-friendly design, accessibility features, feedback channels, ongoing improvements, and recommendations for modern web browsers and assistive technologies. Reach us at bargolod@gmail.com for assistance or concerns, affirming your support for our commitment to an inclusive online environment.`,
    },
  };

  private socialLinks: any = [
    {
      name: 'LinkedIn',
      iconClass: 'fab fa-linkedin-in',
      link: 'https://www.linkedin.com/in/bar-golod/',
    },
    {
      name: 'GitHub',
      iconClass: 'fab fa-github',
      link: 'https://github.com/bargolod',
    },
    // {
    //   name: 'Email',
    //   iconClass: 'fas fa-envelope',
    //   link: '',
    // },
  ];

  private skills: any = [
    { name: 'Angular', iconClass: 'fab fa-angular', color: '#dd0031' },
    { name: 'HTML', iconClass: 'fab fa-html5', color: '#f06c00' },
    { name: 'CSS', iconClass: 'fab fa-css3-alt', color: '#4d8eff' },
    { name: 'SASS', iconClass: 'fab fa-sass', color: '#ca649a' },
    { name: 'JavaScript', iconClass: 'fab fa-js-square', color: '#f0db4f' },
    { name: 'Java', iconClass: 'fab fa-java', color: '#ff0000' },
    { name: 'AngularJS', iconClass: 'fab fa-angular', color: '#dd0031' },
    { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', color: '#9500a8' },
    { name: 'Kendo-UI', iconClass: 'kendo-ui-icon icon', color: '#dd0031' },
    { name: 'React', iconClass: 'fab fa-react', color: '#61dafb' },
    { name: 'Git', iconClass: 'fab fa-git', color: '#000' },
    { name: 'GitHub', iconClass: 'fab fa-github', color: '#000' },
    { name: 'GitLab', iconClass: 'gitlab-icon icon', color: '#ffa200' },
    { name: 'Jira', iconClass: 'jira-icon icon', color: '#1476f0' },
    { name: 'Bitbucket', iconClass: 'bitbucket-icon icon', color: '#2684ff' },
    { name: 'Confluence', iconClass: 'confluence-icon icon', color: '#1476f0' },
  ];

  private resume: any = [
    {
      name: 'Frontend Developer',
      company: 'Modelity Technologies',
      description: `
      <ul>
        <li>Develop and implement the UI of several financial advisory technologies using <strong>Angular 13</strong>.</li>
        <li>Integrate client-server features with the backend team in Agile methodology.</li>
        <li>Lead cross-company processes and projects with backend developers, UX/UI designers, and QA engineers.</li>
        <li>Perform QA testing to ensure seamless functionality and optimal user resume.</li>
      </ul>`,
      year: '2020 - 2023',
      logo: 'assets/icons/modelity-technologies-logo.png',
    },
    {
      name: 'NOC Engineer',
      company: 'Modelity Technologies',
      description: `
      <ul>
        <li>Monitor large computer networks and server issues as part of the Production team.</li>
        <li>Perform troubleshooting and update relevant databases.</li>
        <li>Collect and analyze data in real-time to ensure the stability of automated processes.</li>
      </ul>`,
      year: '2018 - 2020',
      logo: 'assets/icons/modelity-technologies-logo.png',
    },
    {
      name: 'Technical Tier 3 Support',
      company: 'ZotaPay Payments',
      description: `
      <ul>
        <li>Support customers through various outlets including MT4 CRM.</li>
        <li>Configure secured payment environments via dedicated API.</li>
        <li>Prevent Chargebacks & Frauds cases as part of the Risk Team.</li>
        <li>Integrate end-user accounts all across the world, mainly in China & South East-Asia.</li>
      </ul>`,
      year: '2017 - 2018',
      logo: 'assets/icons/zotapay-logo.png',
    },
    {
      name: 'B.Sc with major in Cybersecurity',
      company: 'College of Management Academic Studies',
      description: `
    <ul>
      <li>GPA: 83</li>
    </ul>`,
      year: '2017 - 2020',
      logo: 'assets/icons/the-academic-college-of-management-logo.png',
    },
    {
      name: 'Shaliach in the 92Y Camps in New York, the Jewish Agency',
      description: `
      <ul>
        <li>Shaliach of the Jewish Agency as a general counselor in the 92Y Camps in New York.</li>
        <li>Additional summer as a Shaliach of the Jewish Agency in New York.</li>
        <li>Jewish Agency Seminar Guide for upcoming Shlichim, Summer 2016.</li>
      </ul> `,
      year: '2014, 2015, 2016',
      logo: 'assets/icons/jewish-agency-logo.png',
    },
    {
      name: '“Patriot” Defense Commander, Air Force, IDF',
      description: `
      <ul>
      <li>Full-service as an Air Force fighter, discharged as a first sergeant.</li>
      <li>Squadron commander and a commander of a Patriot battery interceptions center.</li>
      <li>Graduated an interception course of the "Patriot" system.</li>
      <li>Graduated a commander's course.</li>
      <li>Squadron commander of 2 squads, up to 60 fighters.</li>
      <li>Performing tasks that required swift decision-making while working 24/7 under high and intense tasks.</li>
    </ul>`,
      year: '2010 - 2013',
      logo: 'assets/icons/idf-icon.png',
    },
  ];

  constructor(private datePipe: DatePipe, private dialog: MatDialog) {}

  public getNavbarLinks() {
    return this.navbarLinks;
  }

  public getSocialLinks() {
    return this.socialLinks;
  }

  public getLegal(key: string) {
    return key ? this.legals[key] : null;
  }

  public getSkills() {
    return this.skills;
  }

  public getResume() {
    return this.resume;
  }

  public showDialogFunction(notification: string, message: string) {
    const data = {
      title: 'Notification',
      subtitle: '',
      content: notification + message,
    };

    this.dialog.open(DialogComponent, {
      width: '80%',
      data: data,
    });
  }
}
