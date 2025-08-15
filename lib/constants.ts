export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    PRIMARY: "#FFA500", // orange
    SECONDARY: "#FFFFFF", // white
};

export const CONFIG = {
    SITE_TITLE: ${BRAND_NAME} - Elevate Your Beauty,
    SITE_DESCRIPTION: "Experience the essence of luxury with premium cosmetics that enhance your natural beauty.",
    BASE_URL: "https://www.luxurylrpcosmetics.com",
    CONTACT_EMAIL: "info@luxurylrpcosmetics.com",
    PHONE_NUMBER: "+1 (800) 123-4567",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/luxurylrpcosmetics",
        FACEBOOK: "https://facebook.com/luxurylrpcosmetics",
        TWITTER: "https://twitter.com/luxurylrpcosmetics",
    },
};

/
 * Interface representing a product in the luxury LRP cosmetics line.
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
 * Function to create a new product for luxury LRP cosmetics.
 * 
 * @param {string} id - Unique identifier for the product.
 * @param {string} name - Name of the product.
 * @param {string} description - Description of the product.
 * @param {number} price - Price of the product.
 * @param {string} category - Category of the product (e.g., lipstick, foundation).
 * @param {string} imageUrl - URL of the product image.
 * @returns {Product} - The created product object.
 */
export const createProduct = (id: string, name: string, description: string, price: number, category: string, imageUrl: string): Product => {
    return {
        id,
        name,
        description,
        price,
        category,
        imageUrl,
    };
};