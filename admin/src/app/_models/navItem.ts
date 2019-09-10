export interface NavItem {
  displayName: string;
  disabled?: boolean;
  itemType?: string;
  iconName: string;
  route?: string;
  children?: NavItem[];
}
