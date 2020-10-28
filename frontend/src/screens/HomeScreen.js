import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
// import products from "../products";
import Axios from "axios";
const HomeScreen = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const resultProduct = await Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/products`
      );
      setProduct(resultProduct.data);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {product.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
