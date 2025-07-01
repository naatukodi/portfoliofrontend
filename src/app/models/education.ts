// src/app/models/education.ts
export interface Education {
  id: number;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;    // e.g. "2010-08-01"
  endDate?: string;     // e.g. "2014-05-01" or undefined
  gpa?: number;
  location: string;
}
