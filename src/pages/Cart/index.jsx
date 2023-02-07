import { Table } from "reactstrap";
import { useCart } from "../../contexts/Cart";

const Cart = () => {
  const { cart, addProduct, removeProduct } = useCart();
  return (
    <div className="my-5">
      {cart.length > 0 && (
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, i) => (
              <tr key={product.id}>
                <th scope="row">{i + 1}</th>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <img
                      className="cart-book-img"
                      src={product.img}
                      alt={product.title}
                    />
                    <p className="px-3 text-bold">{product.title}</p>
                  </div>
                </td>
                <td>${product.price}</td>
                <td>{product.qty}</td>
                <td>{product.author}</td>
                <th>
                  <div className="d-flex gap-3">
                    <button
                      className="btn  btn-primary"
                      onClick={() => addProduct(product)}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeProduct(product)}
                      className="btn  rounded btn-danger"
                    >
                      -
                    </button>
                  </div>
                </th>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>Your Grand Total:</td>
              <td colSpan={3}>
                {cart.reduce((acc, item) => {
                  return acc + item.price * item.qty;
                }, 0)}
                $
              </td>
            </tr>
          </tbody>
        </Table>
      )}
      {cart.length === 0 && (
        <p className="text-center">
          Your Shopping cart is empty please add some products....
        </p>
      )}
    </div>
  );
};

export default Cart;
