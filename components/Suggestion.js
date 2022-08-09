import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const suggestion = [
  {
    id: "5",
    username: faker.name.findName(undefined, undefined, 'male'),
    userImg: "https://links.papareact.com/3ke",
    image: faker.image.people(300, 300, true),
    caption: "Its really time ",
  },
  {
    id: "4",
    username: faker.name.findName(undefined, undefined, 'female'),
    userImg: "https://links.papareact.com/3ke",
    image: faker.image.people(300, 300, true),
    caption: "Its really time ",
  },
  {
    id: "3",
    username:faker.name.findName(undefined, undefined, 'male'),
    userImg: "https://links.papareact.com/3ke",
    image: faker.image.people(300, 300, true),
    caption: "Its really time ",
  },
  {
    id: "6",
    username:faker.name.findName(undefined, undefined, 'male'),
    userImg: "https://links.papareact.com/3ke",
    image: faker.image.people(300, 300, true),
    caption: "Its really time ",
  },
  {
    id: "7",
    username:faker.name.findName(undefined, undefined, 'male'),
    userImg: "https://links.papareact.com/3ke",
    image: faker.image.people(300, 300, true),
    caption: "Its really time ",
  },
];

function Tsuggestion({ image, id, username, caption }) {
  return (
    <div className=" flex items-center justify-between mt-3">
      <img
        src={image}
        alt=""
        className="w-10 h-10 rounded-full border p-[2px]"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <h3 className="text-xs text-gray-400">{caption}</h3>
      </div>
      <button className="text-blue-400 text-sm">Follow</button>
    </div>
  );
}

function Suggestion() {
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestion.map((suggestion) => (
        <Tsuggestion
          key={suggestion.id}
          id={suggestion.id}
          image={suggestion.image}
          username={suggestion.username}
          caption={suggestion.caption}
        />
      ))}
    </div>
  );
}

export default Suggestion;
