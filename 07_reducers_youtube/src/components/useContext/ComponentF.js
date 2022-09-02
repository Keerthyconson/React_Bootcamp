import React from "react";
import { UserContext, ChannelContext } from "../../App";

function ComponentF(props) {
  return (
    <div>
      <h1>Component F</h1>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <p>
                    Data to be displayed :{user} & {channel}
                  </p>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
