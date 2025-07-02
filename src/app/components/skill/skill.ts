// src/app/components/skill/skill.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill';

interface SkillWithColor extends Skill {
  color: string;
}

interface SkillGroup {
  category: string;
  skills: SkillWithColor[];
}

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrls: ['./skill.scss']
})
export class SkillComponent implements OnInit {
  groups: SkillGroup[] = [];

  constructor(private svc: SkillService) {}

  ngOnInit() {
    this.svc.getAll().subscribe(data => {
      // Map proficiency to a color (0=red, 5=green)
      const profToColor = (p: number) => {
        const green = Math.round((p / 5) * 120);  // 0→0deg, 5→120deg in HSL
        return `hsl(${green}, 70%, 40%)`;
      };

      // Attach colors
      const colored = data.map(s => ({
        ...s,
        color: profToColor(s.proficiency)
      }));

      // Group by category
      const map = new Map<string, SkillWithColor[]>();
      for (const s of colored) {
        if (!map.has(s.category)) map.set(s.category, []);
        map.get(s.category)!.push(s);
      }
      this.groups = Array.from(map.entries())
        .map(([category, skills]) => ({ category, skills }));
    });
  }
}
