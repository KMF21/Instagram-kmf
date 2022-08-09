import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

// const post = [
//   {
//     id: "1",
//     username: "Ikoojo",
//     userImg: "https://links.papareact.com/3ke",
//     image: "https://links.papareact.com/3ke",
//     caption: "Its really time to make a difference",
//   },
//   {
//     id: "1",
//     username: "KMF.js",
//     userImg: "https://links.papareact.com/3ke",
//     image: "https://links.papareact.com/3ke",
//     caption: "Its really time to make a difference",
//   },
//   {
//     id: "1",
//     username: "Monday",
//     userImg: "https://links.papareact.com/3ke",
//     image: "https://links.papareact.com/3ke",
//     caption: "Its really time to make a difference",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  // console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          profileImg={post.data().profileImg}
          image={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
