export enum SelectType {
  ALL,
  FAV,
  GROUP
}

export interface SelectedGroup {
  type: SelectType;
  id?: number;
}
