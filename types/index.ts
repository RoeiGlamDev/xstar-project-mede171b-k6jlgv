import { Product, Category, User, Order } from './models';

/
 * Represents the luxury LRP cosmetics brand.
 * @interface Brand
 */
export interface Brand {
    name: string; // The name of the brand
    colors: string[]; // Primary colors used in branding
    logoUrl: string; // URL to the brand's logo
}

/
 * Represents a luxury cosmetic product.
 * @interface LuxuryProduct
 */
export interface LuxuryProduct extends Product {
    brand: Brand; // The brand associated with the product
    description: string; // Detailed description of the product highlighting luxury features
    ingredients: string[]; // List of ingredients used in the product
    usageInstructions: string; // Instructions on how to use the product
    price: number; // Price of the product
    isLimitedEdition: boolean; // Indicates if the product is a limited edition
}

/
 * Represents a category of luxury cosmetics.
 * @interface LuxuryCategory
 */
export interface LuxuryCategory extends Category {
    luxuryProducts: LuxuryProduct[]; // List of luxury products in this category
}

/
 * Represents a user of the luxury LRP cosmetics website.
 * @interface LuxuryUser
 */
export interface LuxuryUser extends User {
    preferredProducts: LuxuryProduct[]; // List of luxury products preferred by the user
    purchaseHistory: Order[]; // History of orders made by the user
}

/
 * Represents an order placed by a user.
 * @interface LuxuryOrder
 */
export interface LuxuryOrder extends Order {
    user: LuxuryUser; // The user who placed the order
    orderedProducts: LuxuryProduct[]; // List of products included in the order
    totalAmount: number; // Total amount for the order
    orderDate: Date; // Date when the order was placed
}

/
 * The Luxury LRP cosmetics brand definition.
 * @constant
 */
export const luxuryLRPBrand: Brand = {
    name: "luxury LRP cosmetics",
    colors: ["orange", "white"],
    logoUrl: "https://example.com/logo.png", // Replace with actual logo URL
};