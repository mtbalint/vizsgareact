import React from "react";
import { useState } from "react";
import Subscription from "./Subscription";
function Hotel(props) {
  const [show, setShow] = useState(false);
  const [showSub, setShowSub] = useState(false);

  function clickHandler() {
    setShow(!show);
  }
  function clickHandlerSub() {
    setShowSub(!showSub);
  }

  return (
    <div className="hotel">
      <div>
        <p>
          <strong>{props.item.name}</strong>
        </p>
        {show ? (
          <>
            <p>
              <button onClick={clickHandler}>Show less</button>
            </p>
            <div>
              {props.item.city} ({props.item.stars})<br />
              {!showSub && (
                <button onClick={clickHandlerSub}>Request more info</button>
              )}
              {showSub && (
                <Subscription key={props.item.name} name={props.item.name} />
              )}
            </div>
          </>
        ) : (
          <button onClick={clickHandler}>show more</button>
        )}
      </div>
    </div>
  );
}

export default Hotel;
