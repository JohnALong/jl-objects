// Lightning exercise 1

// console.log("it works")
// const myStang = {
//     type: "car",
//     year: 2015,
//     make: "Ford",
//     model: "Mustang",
//     color: "red",
//     traction: "rear wheel drive",
//     value: "depreciated",
//     resale: 3900,
// }
// console.log("mustang", myStang);

// const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];
// console.log("animals", animals);

// const me = {
//     name: "John",
//     age: 45,
//     weight: "over",
// }
// const jeanne = {
//     name: "Jeanne",
//     age: 43
// }
// const sis = {
//     name: "Brenda",
//     age: 48,
// }
// const sis2 = {
//     name: "Barb",
//     age: 51
// }
// const familyMembers = [me, jeanne, sis, sis2];
// console.log("my family", familyMembers);


// Lightning exercise 2
// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }
// console.log("height", wardrobe.height);
// console.log("manufacturer", wardrobe.manufacturer);
// console.log("contents", wardrobe.contents);
// console.log("wardrobe stuff", wardrobe.contents[0],wardrobe.contents[1],wardrobe.contents[2],wardrobe.contents[3],wardrobe.contents[4]);
// console.log("depth", wardrobe.depth);
// console.log("width", wardrobe.width);
// console.log("contents", wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.depth, wardrobe.width);

// wardrobe.material = "Cedar";
// console.log(wardrobe);

// Lightning exercise 3

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log("stories of building", empireStateBuilding.stories);
console.log("height of building", empireStateBuilding.height);
console.log("square feet of building", empireStateBuilding.squareFeet);
console.log("Length east and west", empireStateBuilding.eastWestLength);
console.log("length north & south", empireStateBuilding.northSouthLength);

const buildingAddress = "address";
const dateBuilt = "constructionDate";
const buildingCost = "cost";
const buildingOwner = "owner";
const buildingArchitect = "architect";

console.log("address of building", empireStateBuilding[buildingAddress]);
console.log("it was built in", empireStateBuilding[dateBuilt]);
console.log("the cost to build was", empireStateBuilding[buildingCost]);
console.log("the owner is", empireStateBuilding[buildingOwner]);
console.log("the architect was", empireStateBuilding[buildingArchitect]);