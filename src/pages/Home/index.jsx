import BookCard from "../../components/BookCard";
import books from "../../data/data";
import { Row, Col } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Row>
        {books.map((book, index) => (
          <Col sm={12} md={3} key={index} className="mb-3">
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
