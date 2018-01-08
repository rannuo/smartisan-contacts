import { Group } from './models/group';
import { Contact } from './models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { SelectType, SelectedGroup } from './models/selectType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private groups: Group[] = [];
  private contacts: Contact[] = [];
  private selectedGroupId: number;
  private selectedGroupType: SelectType = SelectType.ALL;
  constructor(
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.contactService.getGroups()
      .subscribe(groups => this.groups = groups);
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onSelectGroup(selectedGroup: SelectedGroup) {
    this.selectedGroupType = selectedGroup.type;
    if (selectedGroup.type === SelectType.GROUP) {
      this.selectedGroupId = selectedGroup.id;
    }
  }
  getCurrentGroupContacts() {
    switch (this.selectedGroupType) {
      case SelectType.ALL:
        return this.contacts;
      case SelectType.FAV:
        return this.contacts.filter(contact => contact.is_fav);
      case SelectType.GROUP:
        return this.contacts.filter(contact => contact.groups.includes(this.selectedGroupId));
      default:
        return [];
    }
  }
}
