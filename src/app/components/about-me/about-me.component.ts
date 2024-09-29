import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  aboutMeText1: string = '';
  aboutMeText2: string = '';
  constructor() {}

  ngOnInit(): void {
    this.aboutMeText1 =
      'I am a skilled Frontend Developer, driven by my enthusiasm for creating exceptional web experiences. I possess a strong command of frontend technologies and a solid grasp of backend development, and I derive satisfaction from converting intricate requirements into practical, inventive solutions. My collaborative nature fuels active engagement with team members to attain project objectives and ensure successful outcomes.';
    this.aboutMeText2 =
      "My abilities extend beyond code; effective communication is one of my strengths. I've taken on the role of representing the frontend team for over 30 sprints as a vital component of our agile development process, collaborating closely with developers, designers, data analysts, product managers, QA professionals, and team leads.";
  }

  downloadCV(): void {
    window.open(
      'https://drive.google.com/file/d/1zucitJ7hcaTs71IH3SkWeEOEmBZ6ElLc/view?usp=sharing',
      '_blank'
    );
  }
}
