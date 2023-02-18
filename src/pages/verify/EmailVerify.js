import React, { useEffect, useRef, useState } from "react";
import { AdminLayout } from "../layout/AdminLayout";
import { Alert, Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { verifyAdminUser } from "../../helper/axiosHelper";

const EmailVerify = () => {
  const isExeRef = useRef(true);
  const [response, setResponse] = useState({});

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const data = {
      verificationCode: searchParams.get("c"),
      email: searchParams.get("email"),
    };

    verifyUserLink(data);
    isExeRef.current = false;
  }, []);

  const verifyUserLink = async (data) => {
    //axios

    if (!isExeRef.current) {
      return console.log("Api already called");
    }
    const result = await verifyAdminUser(data);
    setResponse(result);
  };

  return (
    <AdminLayout>
      <div className="verify-page">
        {response.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {" "}
            {response.message}
          </Alert>
        ) : (
          <Spinner animation="border"></Spinner>
        )}
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
