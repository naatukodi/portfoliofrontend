// src/app/app.routes.ts
import { provideRouter, Routes } from '@angular/router';
import { SummaryComponent } from './components/summary/summary';
import { ExperienceComponent } from './components/experience/experience';
import { EducationComponent } from './components/education/education';
import { ProjectComponent } from './components/project/project';
import { SkillComponent } from './components/skill/skill';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '',         component: SummaryComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education',  component: EducationComponent },
  { path: 'projects',   component: ProjectComponent },
  { path: 'skills',     component: SkillComponent },
  { path: 'contact',    component: ContactComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutes = provideRouter(routes);