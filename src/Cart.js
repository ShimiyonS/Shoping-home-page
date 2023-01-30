import { useState } from "react";
import { Button } from "react-bootstrap";
import { Rating } from "./Rating";

export function Cart({ setCard, setItems, name, bage, between, orinalprizes, discountedPrice, idx, item, stars }) {
  const [showBtn, setShowBtn] = useState(true);
  const handleCartAdd = (idx, setItems, item) => {
    setShowBtn(!showBtn);

    setItems(item + 1);
    console.log(item + 1);

  };
  const handleCartRemove = (idx, setItems, item, setCard) => {
    setShowBtn(!showBtn);
    setItems(item - 1);
    console.log(item - 1);
    ///
  };
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}>{bage}</div>
        {/* <!-- Product image--> */}
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{name}</h5>
            {/* <!-- Product reviews--> */}
            {stars === "true" ? <Rating /> : false}
            {/* <!-- Product price--> */}
            {between}
            <span className="text-muted text-decoration-line-through">

              {orinalprizes}
            </span>
            {discountedPrice}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {showBtn ? <Button onClick={() => handleCartAdd(idx, setItems, item)} variant="primary">Add to Cart</Button> :
              <Button onClick={() => handleCartRemove(idx, setItems, item, setCard)} variant="primary">Remove to Cart</Button>}
          </div>
        </div>
      </div>
    </div>

  );
}
