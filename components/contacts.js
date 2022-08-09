import { faker } from "@faker-js/faker";
const contacts = [
  {
    id: 1,
    name: "Anne Quigley",
    imgURL: faker.image.people(300, 300, true),
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    id: 2,
    name: "Kristopher Hudson",
    imgURL: faker.image.people(300, 300, true),
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    id: 3,
    name: "Chuck Norris",
    imgURL: faker.image.people(300, 300, true),
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
  {
    id: 4,
    name: "Victor Kessler",
    imgURL: faker.image.people(300, 300, true),
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    id: 5,
    name: "Jack Bauer",
    imgURL: faker.image.people(300, 300, true),
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    id: 6,
    name: "Loren Zemlak",
    imgURL: faker.image.people(300, 300, true),
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
  {
    id: 7,
    name: "Johanna Mosciski",
    imgURL: faker.image.people(300, 300, true),
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    id: 8,
    name: "Caleb Nader",
    imgURL: faker.image.people(300, 300, true),
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    id: 9,
    name: "Chuck Norris",
    imgURL: faker.image.people(300, 300, true),
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
  {
    id: 10,
    name: "Florence Wilkinson",
    imgURL: faker.image.people(300, 300, true),
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    id: 11,
    imgURL: faker.image.people(300, 300, true),
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    id: 12,
    name: "Chuck Norris",
    imgURL: faker.image.people(300, 300, true),
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
  {
    id: 13,
    name: "Genevieve Ferry",
    imgURL: faker.image.people(300, 300, true),
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    id: 14,
    name: "Edwin Smitham",
    imgURL: faker.image.people(300, 300, true),
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    id: 15,
    name: "Clifford Runolfsdottir",
    imgURL: faker.image.people(300, 300, true),
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];
console.log(faker.name.findName(undefined, undefined, "female"));

export default contacts;