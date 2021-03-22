import React from "react";
import { useState } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = (props) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const myFetch = () => {
    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, hotel: props.name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        setLoader(false);
      })
      .catch(function () {
        setError(true);
        setLoader(false);
      });
  };

  const sendSubscribe = (e) => {
    e.preventDefault();
    setLoader(true);
    setShow(!show);
    myFetch();
  };
  return (
    <div className="form">
      {!show && (
        <div>
          <h2>
            Request more info about
            <br />
            <strong>{props.name}</strong>
          </h2>
          <form onSubmit={(e) => sendSubscribe(e)}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
              type="submit"
              value="Subscribe"
              disabled={!(email.includes("@") && email.includes("."))}
            />
          </form>
        </div>
      )}

      {loader && <LoadingMask />}
      {message && <h3>Subscribed</h3>}
      {error && <h3>Oops, something happened</h3>}
    </div>
  );
};

export default Subscription;
