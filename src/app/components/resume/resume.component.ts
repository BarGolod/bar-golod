import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  timelineEvents: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.timelineEvents = this.dataService.getResume();
  }
}
