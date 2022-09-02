import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCESS":
      return { loading: false, post: action.payload, error: "" };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

function DataFetch2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
          // ("https://111.com")
        );

        console.log(response.data);
        dispatch({ type: "FETCH_SUCESS", payload: response.data });
      } catch (err) {
        console.log(err);
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };
    loadPost();
  }, []);

  const { id, userId, title, body } = state.post;
  const { error } = state;
  return (
    <div className="container">
      <h1>Data Fetch with useReducer </h1>
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

export default DataFetch2;
