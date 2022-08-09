import React from "react";
import { faker } from "@faker-js/faker";

function Story(props) {
  return (
    <div className="">
      <img
        className="w-14 h-14 rounded-full p-[1.5px]
        border-red-500 border-2 object-contain cursor-pointer hover:scale-110
        transition transform duration-200 ease-out"
        src={props?.imgURL}
        alt="image"
      />
      <p className="text-xs w-14 truncate text-center ">{props.name}</p>
    </div>
  );
}

export default Story;
