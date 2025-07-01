import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private svc: ContactService) {}
  ngOnInit() {
    this.svc.getAll().subscribe(data => this.contacts = data);
  }
}
