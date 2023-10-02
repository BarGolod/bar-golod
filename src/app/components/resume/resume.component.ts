import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  timelineEvents: any = []; // Your timeline events data

  constructor() {}

  ngOnInit(): void {
    this.timelineEvents = [
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
  }
}
