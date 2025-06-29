export interface Experience {
  id:               number;
  company:          string;
  role:             string;
  startDate:        string;       // ISO date string
  endDate?:         string;       // ISO date string or undefined
  location:         string;
  responsibilities: string[];
}