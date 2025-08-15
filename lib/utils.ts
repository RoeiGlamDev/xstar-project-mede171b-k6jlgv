import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application.
 * This module contains various helper functions for formatting and other utilities.
 * 
 * @module utils
 */

/
 * Represents a product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Represents a customer in the luxury LRP cosmetics application.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    purchaseHistory: Array<Product>;
}

/
 * Formats the price of a product to display in a luxurious manner.
 * 
 * @param price - The price of the product.
 * @returns A formatted price string with currency symbol.
 */
export const formatPrice = (price: number): string => {
    return $${price.toFixed(2)};
};

/
 * Formats the date for order history display.
 * 
 * @param date - The date to format.
 * @returns A formatted date string.
 */
export const formatOrderDate = (date: Date): string => {
    return format(date, 'MMMM dd, yyyy');
};

/
 * Generates a unique identifier for products.
 * 
 * @returns A string representing a unique product ID.
 */
export const generateProductId = (): string => {
    return luxury-${Math.random().toString(36).substr(2, 9)};
};

/
 * Utility function to capitalize the first letter of a string.
 * 
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/
 * Luxury LRP cosmetics specific function to create a 3D effect style.
 * 
 * @param element - The HTML element to apply the 3D effect.
 */
export const applyLuxury3DEffect = (element: HTMLElement): void => {
    element.style.transform = 'perspective(1000px) rotateY(10deg)';
    element.style.transition = 'transform 0.3s ease';
};

/
 * Custom function to handle the luxury LRP cosmetics branding.
 * 
 * @param message - The message to be displayed with branding.
 * @returns The branded message.
 */
export const brandedMessage = (message: string): string => {
    return ✨ ${message} - luxury LRP cosmetics ✨;
};