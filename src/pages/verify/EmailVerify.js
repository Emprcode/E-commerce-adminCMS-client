import React from "react";
import { AdminLayout } from "../layout/AdminLayout";
import { Alert } from "react-bootstrap";

const EmailVerify = () => {
  return (
    <AdminLayout>
      <div className="verify-page">
        <Alert variant="success"> Your account is verified</Alert>
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
