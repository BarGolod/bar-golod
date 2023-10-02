import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }
}
