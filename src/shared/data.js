import { itemImage1, itemImage2, itemImage3, itemImage4 } from './staticAssets';
export const Dishes = [
    { id:1, title: "Fruit salad mix", description: "Delics fruit salad Ngasem", price: "18.50", isFavorite: false, image: itemImage3 },
    { id:2, title: "Fruit salad mix", description: "Delics fruit salad Ngasem", price: "16.00", isFavorite: true, image: itemImage2 },
    { id:3, title: "Fruit salad mix", description: "Delics fruit salad Ngasem", price: "11.00", isFavorite: false, image: itemImage1 },
    { id:4, title: "Fruit salad mix", description: "Delics fruit salad Ngasem", price: "11.00", isFavorite: false, image: itemImage4 },
];

// In our case we already have very few dishes, so put all the dishes as popular don't be confuse here.
export const PopularDishes = Dishes;

export const FeaturedTags = [
    { title: "Favorite", icon: "heart-outline", category: "FAVORITE" },
    { title: "Cheap", icon: "tag-heart-outline", category: "CHEAP" },
    { title: "Trend", icon: "trending-up", category: "TREND" },
    { title: "More", icon: "apps", category: "MORE" }
]


export const Categories = [
    { title: "Starter", description: "", image: itemImage3 },
    { title: "Soups", description: "", image: itemImage2 },
    { title: "Oriental", description: "", image: itemImage1 },
    { title: "Chinese", description: "", image: itemImage3 },
    { title: "American", description: "", image: itemImage2 },
    { title: "African", description: "", image: itemImage3 },
]

export const PillsCategories = [
    { title: "", icon: "magnify" },
    { title: "Favorite", icon: "heart" },
    { title: "Cheap", icon: "tag-heart-outline" },
    { title: "Trending", icon: "trending-up" },
    { title: "Starter", icon: "" },
    { title: "Soups", icon: "" },
    { title: "Oriental", icon: "" },
    { title: "Chinese", icon: "" },
    { title: "American", icon: "" },
    { title: "African", icon: "" }
]