import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrls: ['./project.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  constructor(private svc: ProjectService) {}
  ngOnInit() {
    this.svc.getAll().subscribe(data => this.projects = data);
  }
}
