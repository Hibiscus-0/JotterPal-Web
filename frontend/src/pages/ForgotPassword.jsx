import React, { useState } from "react";
import { Box, Typography, TextField, Button, Stepper, Step } from "@mui/material";
import mascot from "/src/assets/Jotterpal Mascot.png";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "../components/ConfirmationDialog";

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [contactNumber, setContactNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleRecover = () => setOpenDialog(true);
  const handleContinue = () => setActiveStep((prevStep) => prevStep + 1);

  const stepContent = [
    {
      title: "Contact Number",
      description: "Enter the Contact Number you use to sign to your account.",
      fields: [
        {
          label: "Contact Number",
          value: contactNumber,
          onChange: (e) => setContactNumber(e.target.value),
        },
      ],
      buttons: [
        { label: "Continue", onClick: handleContinue },
        { label: "Back to Login", onClick: () => navigate("/login") },
      ],
    },
    {
      title: "Verification Code",
      description: "Enter the verification code sent to your contact number.",
      fields: [
        {
          label: "Verification Code",
          value: verificationCode,
          onChange: (e) => setVerificationCode(e.target.value),
        },
      ],
      buttons: [
        { label: "Verify", onClick: () => setActiveStep(2) },
        { label: "Back", onClick: () => setActiveStep(0) },
      ],
    },
    {
      title: "New Password",
      description: "Enter your new password",
      fields: [
        { label: "New Password", value: newPassword, onChange: (e) => setNewPassword(e.target.value), type: "password" },
        { label: "Confirm New Password", value: confirmNewPassword, onChange: (e) => setConfirmNewPassword(e.target.value), type: "password" },
      ],
      buttons: [
        { label: "Recover", onClick: handleRecover },
        { label: "Back", onClick: () => setActiveStep(1) },
      ],
    },
  ];

  const commonTextFieldStyles = {
    mb: 3,
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "#FCDCD2",
      "& fieldset": { borderColor: "#FCDCD2" },
      "&:hover fieldset": { borderColor: "#FCDCD2" },
      "&.Mui-focused fieldset": { borderColor: "#FCDCD2" },
    },
    "& .MuiInputBase-input, & .MuiInputLabel-root": {
      fontWeight: "bold",
      fontFamily: "Poppins, Arial, sans-serif",
    },
  };

  const commonButtonStyles = {
    fontWeight: "bold",
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    mb: 1,
    "&:hover": { backgroundColor: "#1E8663" },
    "&:active": { backgroundColor: "#0F112D" },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E2054",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <img src={mascot} alt="JotterPal Mascot" style={{ width: "100px", height: "auto" }} />
      <Typography variant="h1" sx={{ color: "#fff", fontWeight: "900", fontSize: { xs: "32px", md: "48px" }, textAlign: "center", mb: 0.6 }}>
        Recover Your Password
      </Typography>
      <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold", fontSize: { xs: "14px", md: "18px" }, textAlign: "center", mb: 3 }}>
        No worries! Let’s recover your password.
      </Typography>

      <Box sx={{ backgroundColor: "#fff", borderRadius: "16px", padding: "40px", width: "100%", maxWidth: "600px", textAlign: "center" }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {[0, 1, 2].map((stepIndex) => (
            <Step key={stepIndex}>
              <Box
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: stepIndex < activeStep ? "transparent" : activeStep === stepIndex ? "#1E2054" : "#ccc",
                  color: stepIndex < activeStep ? "#4CAF50" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                }}
              >
                {stepIndex < activeStep ? "✔" : stepIndex + 1}
              </Box>
            </Step>
          ))}
        </Stepper>

        {stepContent[activeStep] && (
          <>
            <Typography variant="h4" sx={{ fontWeight: "900", color: "#1E2054", mb: 0 }}>
              {stepContent[activeStep].title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mb: 4, fontWeight: "bold" }}>
              {stepContent[activeStep].description}
            </Typography>

            {stepContent[activeStep].fields.map((field, index) => (
              <TextField
                key={index}
                fullWidth
                label={field.label}
                variant="outlined"
                value={field.value}
                onChange={field.onChange}
                type={field.type || "text"}
                sx={commonTextFieldStyles}
              />
            ))}

            {stepContent[activeStep].buttons.map((button, index) => (
              <Button
                key={index}
                variant="contained"
                onClick={button.onClick}
                sx={{
                  ...commonButtonStyles,
                  backgroundColor: index === 0 ? "#1E2054" : "#7F7F7F",
                  "&:hover": { backgroundColor: index === 0 ? "#1E8663" : "#383939" },
                }}
              >
                {button.label}
              </Button>
            ))}
          </>
        )}
      </Box>

      <ConfirmationDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        title="Password Recovered"
        message="Congratulations, you have successfully recovered your password!"
        buttonText="Go to Login"
      />
    </Box>
  );
};

export default ForgotPassword;