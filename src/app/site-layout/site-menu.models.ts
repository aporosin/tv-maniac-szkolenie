export interface MenuItem {
  path: string;
  label: string;
  exact?: boolean;
}

export type SiteMenuServiceCOnfig = MenuItem[]; // we need this as array is not allowed everywhere...
