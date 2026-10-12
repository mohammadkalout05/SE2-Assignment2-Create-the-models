export enum ItemCategory {
    CAKE = 'Cake',
    BOOK = 'Book',
    TOY = 'Toy',
}

export interface Item {
    getCategory(): ItemCategory;
}
