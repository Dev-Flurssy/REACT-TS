export interface IUsers {
  id: number;
  name: string;
  isAdmin: boolean;
  purchases: number[]; // product IDs
}

export const AdminData: IUsers[] = [
  { id: 1, name: "Alice Benjamin", isAdmin: true, purchases: [1, 2] },
  { id: 2, name: "Bob Martin", isAdmin: false, purchases: [3] },
  { id: 3, name: "Charlie Davis", isAdmin: true, purchases: [1, 4] },
  { id: 4, name: "David Wilson", isAdmin: false, purchases: [] },
];

export interface IProducts {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export const ProductData: IProducts[] = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    description: "High-performance laptop",
  },
  { id: 2, name: "Mouse", price: 29.99, description: "Wireless mouse" },
  { id: 3, name: "Keyboard", price: 79.99, description: "Mechanical keyboard" },
  { id: 4, name: "Monitor", price: 299.99, description: "24-inch LED monitor" },
];
