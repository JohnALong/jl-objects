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

// const empireStateBuilding = {
//     stories: 103,
//     height: 1453,
//     address: "350 Fifth Avenue, Manhattan, New York 10118",
//     squareFeet: 2768591,
//     constructionDate: 1931,
//     cost: 40948900,
//     owner: "Empire State Realty Trust",
//     eastWestLength: 424,
//     northSouthLength: 187,
//     architect: "Shreve, Lamb & Harmon"
// }
// // dimensions to console
// console.log("stories of building", empireStateBuilding.stories);
// console.log("height of building", empireStateBuilding.height);
// console.log("square feet of building", empireStateBuilding.squareFeet);
// console.log("Length east and west", empireStateBuilding.eastWestLength);
// console.log("length north & south", empireStateBuilding.northSouthLength);
// console.log(`The empire state building is ${empireStateBuilding.height} feet high with ${empireStateBuilding.stories}. The east west length is ${empireStateBuilding.northSouthLength}.  It is ${empireStateBuilding.squareFeet}`);
// // creating variables to search with bracket notation
// const buildingAddress = "address";
// const dateBuilt = "constructionDate";
// const buildingCost = "cost";
// const buildingOwner = "owner";
// const buildingArchitect = "architect";

// // misc info to console log with bracket notation
// console.log("address of building", empireStateBuilding[buildingAddress]);
// console.log("it was built in", empireStateBuilding[dateBuilt]);
// console.log("the cost to build was", empireStateBuilding[buildingCost]);
// console.log("the owner is", empireStateBuilding[buildingOwner]);
// console.log("the architect was", empireStateBuilding[buildingArchitect]);

// console.log(`The address is ${empireStateBuilding[buildingArchitect]}.  It was built in ${empireStateBuilding[dateBuilt]}, at a cost of ${empireStateBuilding[buildingCost]}.  It was built by ${empireStateBuilding[buildingArchitect]}, and is owned by ${empireStateBuilding[buildingOwner]}.`);

// Lightning exercise 4

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;
console.log(partTimeInstructors);
for (let i = 0; i < partTimeInstructors.length; i++) {
    console.log(`The part time instructors are ${partTimeInstructors[i]}`);
}
const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;
console.log(fullTimeInstructors);
for (let i = 0; i < fullTimeInstructors.length; i++) {
    console.log(`The full time instructors are ${fullTimeInstructors[i]}`);
}

// // jisie code

// // for in loop to iterate instructors object

const instructorsObj = nashvilleSoftwareSchool.instructors;
for (let key in instructorsObj) {
    console.log(instructorsObj[key]);
}
// exercise 2
console.log(`The two instructors asked for are ${fullTimeInstructors[fullTimeInstructors.length -1]} and ${nashvilleSoftwareSchool.instructors.partTime[0]}`);

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
const paul = beatles.members[1].name;
const yearStarted = beatles.history.formed;
const yearEnded = beatles.history.disbanded;
const born = beatles.members[1].birth;
const magMystTour = beatles.albums[3];
console.log("variables needed", paul, yearStarted, yearEnded, born, magMystTour);
console.log(`${paul} was in the Beatles from ${yearStarted} to ${yearEnded}.  He was born in ${born}.  He contributed heavily to the ${magMystTour} album.`);
