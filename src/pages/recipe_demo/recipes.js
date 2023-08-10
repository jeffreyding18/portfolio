import chickenSoup from "../../assets/images/RecipeDemo/chickenSoup.jpg";
import steak from "../../assets/images/RecipeDemo/steak.jpg";

const recipelist = [
    {
        name: "Chicken soup",
        description: "A hearty chicken soup for the winter!",
        favorite: false,
        ingredients: ["Chicken", "Chicken Stock", "Water", "Seasonings"],
        instructions: ["Boil Water", "Add Chicken Stock", "Add Chicken", "Season", "Serve"],
        img: {
            id: 1,
            src: chickenSoup,
            alt: "Chicken Soup",
        } 
    },

    {
        name: "Steak",
        description: "Tried and true!",
        favorite: false,
        ingredients: ["Chicken", "Chicken Stock", "Water", "Seasonings"],
        instructions: ["Boil Water", "Add Chicken Stock", "Add Chicken", "Season", "Serve"],
        img: {
            id: 2,
            src: steak,
            alt: "Steak",
        } 
    },
    {
        name: "Chicken soup",
        description: "A hearty chicken soup for the winter!",
        favorite: false,
        ingredients: ["Chicken", "Chicken Stock", "Water", "Seasonings"],
        instructions: ["Boil Water", "Add Chicken Stock", "Add Chicken", "Season", "Serve"],
        img: {
            id: 1,
            src: chickenSoup,
            alt: "Chicken Soup",
        } 
    },
    {
        name: "Steak",
        description: "Tried and true!",
        favorite: false,
        ingredients: ["Chicken", "Chicken Stock", "Water", "Seasonings"],
        instructions: ["Boil Water", "Add Chicken Stock", "Add Chicken", "Season", "Serve"],
        img: {
            id: 2,
            src: steak,
            alt: "Steak",
        } 
    },
];

export {
    recipelist,
};