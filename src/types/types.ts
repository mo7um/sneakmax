export interface Sneaker {
    sneakerId: number;
    img: string;
    name: string;
    price: number;
}

export interface Member {
    id: number;
    image: string;
    name: string;
    role: string;
}

export interface Question {
    id: number;
    summary: string;
    description: string;
}