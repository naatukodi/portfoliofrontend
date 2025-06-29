// src/app/components/experience/experience.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience';
import { Experience } from '../../models/experience';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  constructor(private svc: ExperienceService) {}
  ngOnInit() { this.svc.getAll().subscribe(data => this.experiences = data); }
}