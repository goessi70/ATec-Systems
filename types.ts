
export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'Alarm' | 'Fire' | 'Video' | 'Control';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
