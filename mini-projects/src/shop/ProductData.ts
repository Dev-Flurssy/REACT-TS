export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: "Shoe",
    description:
      "A Stylish and comfortable shoe. Perfect for casual outings or office wear. Made from high-quality materials, this shoe offers a great fit and durability.",
    price: 19.99,
  },
  {
    id: 2,
    name: "Shirt & Trouser",
    description:
      "A Stylish and comfortable shirt and trouser set. Perfect for casual outings or office wear.   Made from high-quality materials, this set offers a great fit and durability.",
    price: 29.99,
  },
  {
    id: 3,
    name: "Bed Sheet",
    description:
      "A Soft and comfortable bed sheet made from high-quality materials. Perfect for a good night's sleep.",
    price: 29.99,
  },
  {
    id: 4,
    name: "Pillow",
    description:
      "A Soft and comfortable pillow made from high-quality materials. Perfect for a good night's sleep.",
    price: 9.99,
  },
  {
    id: 5,
    name: "Phone",
    description:
      "A Soft and comfortable phone made from high-quality materials. Perfect for everyday use.",
    price: 102,
  },
  {
    id: 6,
    name: "Laptop",
    description:
      "A Powerful and versatile laptop made from high-quality materials. Perfect for work or entertainment.",
    price: 999,
  },
];
