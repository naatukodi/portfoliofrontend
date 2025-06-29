// src/app/components/summary/summary.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryService } from '../../services/summary';
import { Summary } from '../../models/summary';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './summary.html',
  styleUrls: ['./summary.scss'],
  providers: [SummaryService]
})
export class SummaryComponent implements OnInit {
  summary?: Summary;
  constructor(private svc: SummaryService) {}
  ngOnInit() { this.svc.get().subscribe(data => this.summary = data); }}