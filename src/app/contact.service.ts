import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact';
import { Group } from './models/group';

@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  getContacts() {
    return this.http.get<Contact[]>('api/contacts');
  }

  getGroups() {
    return this.http.get<Group[]>('api/groups');
  }
  getContact(id) {
    return this.http.get<Contact>('api/contacts/' + id);
  }
}
