import { Item, ItemCategory } from './Item.model';

export interface BookDetails {
    readonly title: string;
    readonly author: string;
    readonly isbn: string;
    readonly genre: string;
    readonly publisher: string;
    readonly publicationYear: number;
    readonly pageCount: number;
    readonly language: string;
}

export class Book implements Item {
    private readonly category = ItemCategory.BOOK;
    private readonly title: string;
    private readonly author: string;
    private readonly isbn: string;
    private readonly genre: string;
    private readonly publisher: string;
    private readonly publicationYear: number;
    private readonly pageCount: number;
    private readonly language: string;

    constructor(details: BookDetails) {
        this.title = details.title;
        this.author = details.author;
        this.isbn = details.isbn;
        this.genre = details.genre;
        this.publisher = details.publisher;
        this.publicationYear = details.publicationYear;
        this.pageCount = details.pageCount;
        this.language = details.language;
    }

    getCategory(): ItemCategory {
        return this.category;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getIsbn(): string {
        return this.isbn;
    }

    getGenre(): string {
        return this.genre;
    }

    getPublisher(): string {
        return this.publisher;
    }

    getPublicationYear(): number {
        return this.publicationYear;
    }

    getPageCount(): number {
        return this.pageCount;
    }

    getLanguage(): string {
        return this.language;
    }
}
