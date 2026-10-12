import { Item, ItemCategory } from './Item.model';

export interface ToyDetails {
    readonly name: string;
    readonly brand: string;
    readonly type: string;
    readonly material: string;
    readonly color: string;
    readonly minimumAge: number;
    readonly maximumAge: number;
    readonly requiresBatteries: boolean;
}

export class Toy implements Item {
    private readonly category = ItemCategory.TOY;
    private readonly name: string;
    private readonly brand: string;
    private readonly type: string;
    private readonly material: string;
    private readonly color: string;
    private readonly minimumAge: number;
    private readonly maximumAge: number;
    private readonly requiresBatteries: boolean;

    constructor(details: ToyDetails) {
        this.name = details.name;
        this.brand = details.brand;
        this.type = details.type;
        this.material = details.material;
        this.color = details.color;
        this.minimumAge = details.minimumAge;
        this.maximumAge = details.maximumAge;
        this.requiresBatteries = details.requiresBatteries;
    }

    getCategory(): ItemCategory {
        return this.category;
    }

    getName(): string {
        return this.name;
    }

    getBrand(): string {
        return this.brand;
    }

    getType(): string {
        return this.type;
    }

    getMaterial(): string {
        return this.material;
    }

    getColor(): string {
        return this.color;
    }

    getMinimumAge(): number {
        return this.minimumAge;
    }

    getMaximumAge(): number {
        return this.maximumAge;
    }

    getRequiresBatteries(): boolean {
        return this.requiresBatteries;
    }
}
