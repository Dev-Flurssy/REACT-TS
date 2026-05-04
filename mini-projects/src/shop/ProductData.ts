export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews?: IReview[];
}

export interface IReview {
  comment: string;
  rating: number;
  reviewer: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: "Shoe",
    description:
      "A Stylish and comfortable shoe. Perfect for casual outings or office wear. Made from high-quality materials, this shoe offers a great fit and durability.",
    price: 19.99,
    reviews: [
      {
        comment: "Great shoe! Very comfortable and stylish.",
        rating: 5,
        reviewer: "John Doe",
      },
    ],
  },
  {
    id: 2,
    name: "Shirt & Trouser",
    description:
      "A Stylish and comfortable shirt and trouser set. Perfect for casual outings or office wear.   Made from high-quality materials, this set offers a great fit and durability.",
    price: 29.99,
    reviews: [
      {
        comment: "Great shirt and trouser set! Very comfortable and stylish.",
        rating: 4,
        reviewer: "Blake Treason",
      },
    ],
  },
  {
    id: 3,
    name: "Bed Sheet",
    description:
      "A Soft and comfortable bed sheet made from high-quality materials. Perfect for a good night's sleep.",
    price: 29.99,
    reviews: [
      {
        comment: "Great bed sheet! Very comfortable and soft.",
        rating: 5,
        reviewer: "Lana Smith",
      },
    ],
  },
  {
    id: 4,
    name: "Pillow",
    description:
      "A Soft and comfortable pillow made from high-quality materials. Perfect for a good night's sleep.",
    price: 9.99,
    reviews: [
      {
        comment: "Great pillow! Very comfortable and soft.",
        rating: 4,
        reviewer: "John Doe",
      },
    ],
  },
  {
    id: 5,
    name: "Phone",
    description:
      "A Soft and comfortable phone made from high-quality materials. Perfect for everyday use.",
    price: 102,
    reviews: [
      {
        comment: "Great phone! Very useful and well-designed.",
        rating: 5,
        reviewer: "Jane Doe",
      },
    ],
  },
  {
    id: 6,
    name: "Laptop",
    description:
      "A Powerful and versatile laptop made from high-quality materials. Perfect for work or entertainment.",
    price: 999,
    reviews: [
      {
        comment: "Great laptop! Very powerful and versatile.",
        rating: 5,
        reviewer: "John Doe",
      },
    ],
  },
];
