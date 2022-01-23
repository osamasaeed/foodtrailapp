export default colors = {
    primary: "#E84C4F",
    secondary: "#EDA345",
    white: "white",
    accent:"#c940be",
    tertiary: "#645DAF",
    text_primary: "#3E4462",
    text_secondary: "#7E7E7E",
    text_tertiary: "#CACACA",
    fb_primary: "#4267b2",
    darkPrimary: "#D42C30",
    cardsBackground: "#f8f5f2",
    background_primary: "#f7eded",
    background_secondary: "#f7e7e5",
}
export const palette = [
    "#E16F7C", //Candy Pink
    "#cd4b60", // popstar
    "#c33952", // Brick Red
    "#b92744", // Bright Maroon
    "#cc4767", // popstar light
    "#df678a", // Blush
    "#ca2b72", // Telemagenta
    "#d04090", // Pink Pantone
    "#d555ad", // Frostbite
    "#c940be", // Steel Pink
]
export const getColorByIndex = (index) => palette[index % 10];