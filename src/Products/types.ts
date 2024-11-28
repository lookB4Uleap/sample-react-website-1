export type ProductProps = {
    index?: number;
    imageUrl?: string;
    title?: string;
    description?: string;
    price?: number;
    supports?: string[];
    dosage?: number;
};

export type ActionButtonProps = {
    index?: number;
    hovering: boolean;
};
