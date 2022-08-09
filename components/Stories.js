import React, { useEffect } from "react";
import contact from "../components/contacts";
import Story from "./Story";
import { signIn, signOut, useSession } from "next-auth/react";


function CreateStory(contact) {
  return <Story key={contact.id} name={contact.name} imgURL={contact?.imgURL} />;
}

function Stories() {
  const { data: session } = useSession();
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 pb-5
     border-gray-200 border rounded-sm overflow-x-scroll scrollbar
     scroll-bar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story imgURL={session?.user?.image} name={session.user?.name} />
      )}
      {contact.map(CreateStory)}
    </div>
  );
}

export default Stories;
