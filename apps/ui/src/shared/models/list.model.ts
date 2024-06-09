export interface ListModel {
  name: string;
  items: ListItem[];
}

export interface ListItem {
  metadata?: { genres?: Tag[]; tags?: string[] };
  name: string;
  description?: string;
  imagePath?: string;
}

export interface Tag {
  color: string;
  key: string;
}
