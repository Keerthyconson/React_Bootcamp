import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h1>Component E</h1>
      <p> User : {user}</p>
      <p>Channel : {channel}</p>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
