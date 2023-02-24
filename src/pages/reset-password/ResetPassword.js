import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { OtpRequestForm } from "../../components/password-forms/OtpRequestForm";
import { ResetPasswordForm } from "../../components/password-forms/ResetPasswordForm";
import { AdminLayout } from "../layout/AdminLayout";

const ResetPassword = () => {
  const [showForm, setShowForm] = useState("reset");

  const forms = {
    otp: <OtpRequestForm />,
    reset: <ResetPasswordForm />,
  };
  return (
    <AdminLayout>
      <Container>
        <div className="reset-password">
          {forms[showForm] || "Check your syntax"}
        </div>
      </Container>
    </AdminLayout>
  );
};

export default ResetPassword;
