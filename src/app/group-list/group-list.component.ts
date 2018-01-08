import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from './../contact.service';
import { Group } from '../models/group';
import { SelectType, SelectedGroup } from '../models/selectType';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  @Input('groups') groups: Group[];
  @Input() selectedGroupType: SelectType;
  @Input('selectedGroupId') selectedGroupId: number;

  @Output() onSelectGroup = new EventEmitter<SelectedGroup>();
  constructor(
  ) { }

  get isSelectedAll() {
    return this.selectedGroupType === SelectType.ALL;
  }
  get isSelectedFav() {
    return this.selectedGroupType === SelectType.FAV;
  }
  isSelectedGroup(group) {
    return this.selectedGroupType === SelectType.GROUP && group.id === this.selectedGroupId;
  }
  ngOnInit() {
  }
  selectGroupAll() {
    this.onSelectGroup.emit({
      type: SelectType.ALL,
    });
  }
  selectGroupFav() {
    this.onSelectGroup.emit({
      type: SelectType.FAV
    });
  }
  selectGroup(group: Group) {
    this.onSelectGroup.emit({
      type: SelectType.GROUP,
      id: group.id
    });
  }
}
