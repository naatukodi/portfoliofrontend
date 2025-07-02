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
  styleUrls: ['./summary.scss']
})
export class SummaryComponent implements OnInit {
  summary?: Summary;

  constructor(private svc: SummaryService) {}

  ngOnInit() {
    this.svc.get().subscribe(data => this.summary = data);
  }

  /** Split bio into sentences for bullets */
  get bioPoints(): string[] {
    if (!this.summary?.bio) return [];
    return this.summary.bio
      .split(/\. +/)               // split on period + space
      .map(s => s.trim())          // trim whitespace
      .filter(s => s.length > 0)   // drop empty
      .map(s => s.endsWith('.') ? s : s + '.'); // ensure trailing period
  }
}