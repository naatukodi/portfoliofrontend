import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../services/education.service';
import { Education } from '../../models/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];
  constructor(private svc: EducationService) {}
  ngOnInit() {
    this.svc.getAll().subscribe(data => this.educationList = data);
  }
}
