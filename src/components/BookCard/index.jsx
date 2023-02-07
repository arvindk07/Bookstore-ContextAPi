import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import { useCart } from "../../contexts/Cart";

const BookCard = ({ book }) => {
  const { addProduct } = useCart();

  return (
    <Card key={book.id}>
      <CardImg src={book.img} className="imgContent" />
      <CardBody>
        <CardTitle>{book.title}</CardTitle>
        <CardSubtitle>{book.author}</CardSubtitle>
        <span className="bg-success text-white px-3 rounded-pill">
          ${book.price}
        </span>
        <div className="d-flex mt-3">
          <button onClick={() => addProduct(book)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </CardBody>
    </Card>
  );
};

export default BookCard;
