import { Contact } from './../models/contact';
import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  private selectedContact: Contact;
  constructor( ) { }

  ngOnInit() {
  }
  selectContact(contact: Contact) {
    this.selectedContact = contact;
  }
}
