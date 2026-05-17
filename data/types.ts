export interface Plan {
  name: string;
  price: number;
  visible: boolean;
}

export interface Platform {
  slug: string;
  name: string;
  image: string;
  visible: boolean;
  featured?: boolean;
  plans: Plan[];
}
