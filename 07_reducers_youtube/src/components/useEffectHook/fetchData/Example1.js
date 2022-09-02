import React, { useState, useEffect } from "react";
import axios from "axios";

function Example1() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setPosts(res.data);
      } catch (error) {
        console.error("Error : ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ textAlign: "left" }}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example1;
