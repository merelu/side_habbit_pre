import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginReset } from "../../store/actions";
import "../../styles/errorPage.css";

interface ErrorPageProps {
  status: string;
  description: string;
}
function ErrorPage({
  status = "404",
  description = "Page Not Found",
}: ErrorPageProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginReset());
  });
  return (
    <>
      <div className="error_container">
        <div className="error_box">
          <div className="error_code">{status}</div>
          <div className="error_desc">{description}</div>
        </div>

        <Link to="/">
          <Button className="button" variant="contained" color="primary">
            Home
          </Button>
        </Link>
      </div>
      <div className="animation-area">
        <ul className="box-area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default ErrorPage;
