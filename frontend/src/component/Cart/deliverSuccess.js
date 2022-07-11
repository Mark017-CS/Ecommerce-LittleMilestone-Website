import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Thank you! Do you want to try other products?</Typography>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default OrderSuccess;
