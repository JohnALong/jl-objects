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

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log("height", wardrobe.height);
console.log("manufacturer", wardrobe.manufacturer);
console.log("contents", wardrobe.contents);
console.log("wardrobe stuff", wardrobe.contents[0],wardrobe.contents[1],wardrobe.contents[2],wardrobe.contents[3],wardrobe.contents[4]);
console.log("depth", wardrobe.depth);
console.log("width", wardrobe.width);
console.log("contents", wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.depth, wardrobe.width);

wardrobe.material = "Cedar";
console.log(wardrobe);