import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import mascot from "/src/assets/JotterpalLogo.png"; // Import the mascot image
import { Link as RouterLink } from "react-router-dom"; // For navigation

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

const LoginAccount = () => {
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

      {/* Right Side - Login Form */}
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
          Login
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
          Welcome back!
        </Typography>

        {/* Username Field */}
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          sx={{ ...inputStyles, marginBottom: "20px" }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ ...inputStyles, marginBottom: "20px" }}
        />

{/* Forgot Password Button */}
<Typography
  variant="body2"
  sx={{
    alignSelf: "flex-end", // Align to the right
    marginTop: "-15px", 
    marginBottom: "40px", 
  }}
>
  <Link
    /*component={RouterLink} // Use RouterLink for navigation
    to="/forgot-password"*/ // Path to the Forgot Password page
    sx={{
      color: "#1E2054",
      fontWeight: "bolder", 
      textDecoration: "underline",
      textDecorationThickness: "2px",
      textUnderlineOffset: "4px",
      fontStyle: "italic",
      "&:hover": {
        textDecorationThickness: "3px", 
        cursor: "pointer", 
      },
    }}
  >
    Forgot Password?
  </Link>
</Typography>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#1E2054",
            color: "#fff",
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#1E8663" },
            "&:active": { backgroundColor: "#0F112D" },
          }}
        >
          Login
        </Button>

        {/* Sign Up Link */}
        <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
          Don't have an account?{" "}
          <Link
            component={RouterLink} // Use RouterLink for navigation
            to="/" // Path to the CreateAccount page
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
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginAccount;