import { Item, ItemCategory } from './Item.model';

export interface CakeDetails {
    readonly type: string;
    readonly flavor: string;
    readonly filling: string;
    readonly size: number;
    readonly layers: number;
    readonly frostingType: string;
    readonly frostingFlavor: string;
    readonly decorationType: string;
    readonly decorationColor: string;
    readonly customMessage: string;
    readonly shape: string;
    readonly allergies: string;
    readonly specialIngredients: string;
    readonly packagingType: string;
}

export class Cake implements Item {
    private readonly category = ItemCategory.CAKE;
    private readonly type: string;
    private readonly flavor: string;
    private readonly filling: string;
    private readonly size: number;
    private readonly layers: number;
    private readonly frostingType: string;
    private readonly frostingFlavor: string;
    private readonly decorationType: string;
    private readonly decorationColor: string;
    private readonly customMessage: string;
    private readonly shape: string;
    private readonly allergies: string;
    private readonly specialIngredients: string;
    private readonly packagingType: string;

    constructor(details: CakeDetails) {
        this.type = details.type;
        this.flavor = details.flavor;
        this.filling = details.filling;
        this.size = details.size;
        this.layers = details.layers;
        this.frostingType = details.frostingType;
        this.frostingFlavor = details.frostingFlavor;
        this.decorationType = details.decorationType;
        this.decorationColor = details.decorationColor;
        this.customMessage = details.customMessage;
        this.shape = details.shape;
        this.allergies = details.allergies;
        this.specialIngredients = details.specialIngredients;
        this.packagingType = details.packagingType;
    }

    getCategory(): ItemCategory {
        return this.category;
    }

    getType(): string {
        return this.type;
    }

    getFlavor(): string {
        return this.flavor;
    }

    getFilling(): string {
        return this.filling;
    }

    getSize(): number {
        return this.size;
    }

    getLayers(): number {
        return this.layers;
    }

    getFrostingType(): string {
        return this.frostingType;
    }

    getFrostingFlavor(): string {
        return this.frostingFlavor;
    }

    getDecorationType(): string {
        return this.decorationType;
    }

    getDecorationColor(): string {
        return this.decorationColor;
    }

    getCustomMessage(): string {
        return this.customMessage;
    }

    getShape(): string {
        return this.shape;
    }

    getAllergies(): string {
        return this.allergies;
    }

    getSpecialIngredients(): string {
        return this.specialIngredients;
    }

    getPackagingType(): string {
        return this.packagingType;
    }
}
