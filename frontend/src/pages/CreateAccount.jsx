import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import mascot from "/src/assets/JotterpalLogo.png";
import { Link } from "@mui/material";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { Link as RouterLink } from "react-router-dom";

const inputStyles = {
  marginTop: "5px",
  borderRadius: "8px",
  backgroundColor: "#FCDCD2",
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": { borderColor: "#FCDCD2" },
    "&:hover fieldset": { borderColor: "#FCDCD2" },
    "&.Mui-focused fieldset": { borderColor: "#FCDCD2" },
  },
  "& .MuiInputBase-input": {
    fontWeight: "bold",
    fontFamily: "Poppins, Arial, sans-serif",
  },
  "& .MuiInputLabel-root": {
    fontWeight: "bold",
    fontFamily: "Poppins, Arial, sans-serif",
  },
};

const CreateAccount = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCreateAccount = () => {
    setOpenDialog(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E2054",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
      }}
    >
      {/* Left Side with Mascot */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: { xs: "20px", md: "0" },
        }}
      >
        <img
          src={mascot}
          alt="JotterPal Mascot"
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "40%",
            marginBottom: "20px",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, Arial, sans-serif",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "700",
            color: "#FB9EBB",
            textAlign: "center",
            marginTop: { xs: "0", md: "-25px" },
            marginLeft: { xs: "0", md: "-50px" },
          }}
        >
          Your note-taking bestfriend.
        </Typography>
      </Box>

      {/* Right Side - Form */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#F5FFFA",
          borderTopLeftRadius: { xs: "0", md: "40px" },
          borderBottomLeftRadius: { xs: "0", md: "40px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "20px", md: "80px" },
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "900",
            marginTop: "10px",
            fontSize: { xs: "30px", md: "40px" },
            color: "#1E2054",
            textAlign: "center",
          }}
        >
          Create Account
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            marginBottom: "30px",
            color: "#1E2054",
            fontSize: { xs: "13px", md: "15px" },
            textAlign: "center",
          }}
        >
          Hey there! Let's get started.
        </Typography>

        {/* Personal Information */}
        <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: "900", alignSelf: "flex-start" }}>
          Personal Information
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px", width: "100%", marginBottom: "10px" }}>
          <TextField fullWidth label="First Name" variant="outlined" sx={inputStyles} />
          <TextField fullWidth label="Last Name" variant="outlined" sx={inputStyles} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px", width: "100%", marginBottom: "10px" }}>
          <TextField select fullWidth label="Birthmonth" variant="outlined" sx={inputStyles}>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
              <MenuItem key={month} value={month}>{month}</MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Day" variant="outlined" sx={inputStyles}>
            {[...Array(31)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Year" variant="outlined" sx={inputStyles}>
            {[...Array(100)].map((_, i) => (
              <MenuItem key={i} value={2025 - i}>{2025 - i}</MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField fullWidth label="Contact Number" variant="outlined" sx={{ ...inputStyles, marginBottom: "10px" }} />
        <TextField fullWidth label="Email" variant="outlined" sx={{ ...inputStyles, marginBottom: "20px" }} />

        {/* Account Information */}
        <Typography variant="h6" sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: "900", alignSelf: "flex-start" }}>
          Account Information
        </Typography>

        <TextField fullWidth label="Username" variant="outlined" sx={{ ...inputStyles, marginBottom: "10px" }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px", width: "100%", marginBottom: "20px" }}>
          <TextField fullWidth label="Password" type="password" variant="outlined" sx={inputStyles} />
          <TextField fullWidth label="Re-enter Password" type="password" variant="outlined" sx={inputStyles} />
        </Box>

        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#1E2054",
            color: "#fff",
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "20px",
            "&:hover": { backgroundColor: "#1E8663" },
            "&:active": { backgroundColor: "#0F112D" },
          }}
          onClick={handleCreateAccount}
        >
          Create Account
        </Button>

        <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            component={RouterLink} // Use RouterLink for navigation
            to="/login" // Path to the LoginAccount page
            sx={{
              color: "#1E2054",
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
              "&:hover": {
                textDecorationThickness: "3px", // Thicker underline on hover
              },
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>

      {/* Confirmation Dialog */}
      <ConfirmationDialog
  open={openDialog}
  onClose={() => setOpenDialog(false)}
  title="Account Created"
  message="Congratulations, you have successfully created your account!"
  buttonText="Go to Login"
/>
    </Box>
  );
};

export default CreateAccount;
