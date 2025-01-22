export interface Sneaker {
    id: number;
    vendorСode: string;
    inStock: string;
    title: string;
    description: string;
    imgUrl: string;
    stars: number;
    sizes: number[];
    price: number;
    oldPrice: number;
    gender: string;
    color: string;
    compound: string;
    country: string;
}

export interface Member {
    id: number;
    imgUrl: string;
    name: string;
    role: string;
}

export interface Question {
    id: number;
    summary: string;
    description: string;
}
