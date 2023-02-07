import AppHeader from "./components/AppHeader/AppHeader";
import CartProvider from "./contexts/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppFooter from "./components/AppFooter/AppFooter";
import { Container, Spinner } from "reactstrap";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  return (
    <Suspense fallback={<Spinner>Loading...</Spinner>}>
      <CartProvider>
        <Router>
          <div className="appWrapper d-flex flex-column">
            <AppHeader />
            <Container className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/your-cart" element={<Cart />} />
              </Routes>
            </Container>
            <AppFooter />
          </div>
        </Router>
      </CartProvider>
    </Suspense>
  );
};

export default App;
