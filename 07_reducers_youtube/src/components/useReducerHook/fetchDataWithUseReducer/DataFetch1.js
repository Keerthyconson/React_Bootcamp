import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch1() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
          //   "https://111.com"
        );
        console.log(response.data);
        setPost(response.data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };
    loadPost();
  }, []);

  const { id, userId, title, body } = post;
  return (
    <div className="container">
      <h1>Data Fetch with useState </h1>
      <p>
        id : <span className="count">{id}</span>
      </p>
      <p>
        userId : <span className="count">{userId}</span>
      </p>
      <p>
        title : <span className="count">{title}</span>
      </p>
      <p>
        body : <span className="count">{body}</span>
      </p>
      {error ? (
        <p>
          <span className="count">{error}</span>
        </p>
      ) : null}
    </div>
  );
}

export default DataFetch1;
