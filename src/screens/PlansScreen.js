import React from "react";
import { useState, useEffect } from "react";
import "./PlansScreen.css";

function PlansScreen() {
  const Alert = () => {
    alert("It's a test APP!");
  };

  const [dateState, setDateState] = useState(new Date());

  const t = new Date();
  const c = t.getHours() - 12;
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 1000);
  }, []);

  return (
    <div className="planScreen">
      <p className="clock">
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour12: true,
        })}
      </p>
      <div className="planScreenPlan">
        <div className="info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button onClick={Alert}>Subscribe</button>
      </div>

      <div className="planScreenPlan">
        <div className="info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button onClick={Alert}>Subscribe</button>
      </div>

      <div className="planScreenPlan">
        <div className="info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button onClick={Alert}>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;

// import React, { useEffect, useState } from "react";
// import "./PlansScreen.css";
// import { db } from "../firebase";
// function PlansScreen() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     db.collection("products")
//       .where("active", "==", true)
//       .get()
//       .then((querySnapshot) => {
//         const products = {};
//         querySnapshot.forEach(async (productDoc) => {
//           products[productDoc.id] = productDoc.data();
//           const priceSnap = await productDoc.ref.collection("prices").get();
//           priceSnap.docs.forEach((doc) => {
//             products[productDoc.id].prices = {
//               priceId: price.id,
//               priceData: price.data(),
//             };
//           });
//         });
//         setProducts(products);
//       });
//   }, []);
//   console.log(products);
//   return <div className="planScreen"></div>;
// }

// export default PlansScreen;
