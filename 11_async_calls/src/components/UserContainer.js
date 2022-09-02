import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import { apiCallUsers } from "../redux/user/userActions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function UserContainer(props) {
  const { dispatch, users } = props;
  useEffect(() => {
    setTimeout(() => {
      dispatch();
    }, [1000]);
  }, []);
  const { data, loading, error } = users;
  const errorDisplay = () => toast.error(error, { toastId: 1 });
  return (
    <div className="user-component">
      <h1>Users</h1>

      {error ? (
        errorDisplay()
      ) : loading ? (
        <Spinner />
      ) : (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => dispatch(apiCallUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
