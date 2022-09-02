import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Example2.css";

function Example2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
        );
        console.log(response.data);
        setPost(response.data);
        console.log("Post : ", post);
      } catch (error) {
        console.error("Error : ", error);
      }
    }
    getPosts();
  }, [idFromButtonClick]);

  const handleClick = () => {
    // console.log(id);
    setidFromButtonClick(id);
  };
  return (
    <div>
      <h1>Fetching Individual Post with postId</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter the ID of the post"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleClick}>Fetch Post</button>
      </div>
      <div className="content">
        <p>
          userId :<span>{post.userId}</span>
        </p>
        <p>
          id :<span>{post.id}</span>
        </p>
        <p>
          title :<span>{post.title}</span>
        </p>
        <p>
          body :<span>{post.body}</span>
        </p>
      </div>
    </div>
  );
}

export default Example2;
