import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrls: ['./skill.scss']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];
  constructor(private svc: SkillService) {}
  ngOnInit() {
    this.svc.getAll().subscribe(data => this.skills = data);
  }
}
