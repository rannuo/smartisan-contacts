import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const groups = [
      { id: 1,  name: '家人' },
      { id: 2, name: '朋友' },
      { id: 3, name: '同事' },
      { id: 4, name: '同学' },
    ];
    const contacts = [
      { id: 11, name: 'Mr. Nice', is_fav: true, groups: [1], phone: '18840826549' },
      { id: 12, name: 'Narco', is_fav: false, groups: [2, 3], phone: '18840826549' },
      { id: 13, name: 'Bombasto', is_fav: false, groups: [4], phone: '18840826549' },
      { id: 14, name: 'Celeritas', is_fav: false, groups: [1, 2], phone: '18840826549' },
      { id: 15, name: 'Magneta', is_fav: true, groups: [3], phone: '18840826549' },
      { id: 16, name: 'RubberMan', is_fav: false, groups: [4], phone: '18840826549' },
      { id: 17, name: 'Dynama', is_fav: false, groups: [2], phone: '18840826549' },
      { id: 18, name: 'Dr IQ', is_fav: false, groups: [3], phone: '18840826549' },
      { id: 19, name: 'Magma', is_fav: false, groups: [1, 2, 3, 4], phone: '18840826549' },
      { id: 20, name: 'Tornado', is_fav: false, groups: [2, 3], phone: '18840826549' },
    ];
    return { groups, contacts };
  }
}
