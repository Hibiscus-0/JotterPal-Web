import React from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import mascot from "/src/assets/JotterpalLogo.png";
import { Link } from "@mui/material";

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
  return (
    <Box
      sx={{
        backgroundColor: "#1E2054",
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
        overflow: "hidden",
      }}
    >
{/* Left Side with Mascot */}
<Box
  sx={{
    width: { xs: "100%", md: "50%" }, // Full width on mobile, half on desktop
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: { xs: "20px", md: "0" }, // Add padding on mobile
  }}
>
  {/* Mascot Image */}
  <img
    src={mascot}
    alt="JotterPal Mascot"
    style={{
      maxWidth: "100%",
      height: "auto",
      width: { xs: "40%", md: "30%" }, // Smaller size on all screens
      marginBottom: "10px",
    }}
  />

  {/* Tagline Text */}
  <Typography
    variant="h6"
    sx={{
      fontFamily: "Poppins, Arial, sans-serif",
      fontSize: { xs: "14px", md: "16px" }, // Smaller font on mobile
      fontWeight: "700",
      color: "#FB9EBB",
      textAlign: "center", // Center text
      marginTop: { xs: "0", md: "-20px" }, // Adjust margin for alignment
      marginLeft: { xs: "0", md: "-65px" }, // Align with mascot on desktop
    }}
  >
    Your note-taking bestfriend.
  </Typography>
</Box>
      {/* Right Side - Form */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" }, // Full width on mobile, half on desktop
          backgroundColor: "#fff",
          borderTopLeftRadius: { xs: "0", md: "40px" }, // No border radius on mobile
          borderBottomLeftRadius: { xs: "0", md: "40px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "20px", md: "80px" }, // Less padding on mobile
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "900",
            marginTop: "10px",
            fontSize: { xs: "30px", md: "40px" }, // Smaller font on mobile
            color: "#1E2054",
            textAlign: "center", // Center text on mobile
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
            fontSize: { xs: "13px", md: "15px" }, // Smaller font on mobile
            textAlign: "center", // Center text on mobile
          }}
        >
          Hey there! Let's get started.
        </Typography>

        {/* Personal Information */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "14px", md: "16px" }, // Smaller font on mobile
            fontWeight: "900",
            alignSelf: "flex-start",
          }}
        >
          Personal Information
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on tablet+
            gap: "10px",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <TextField fullWidth label="First Name" variant="outlined" sx={inputStyles} />
          <TextField fullWidth label="Last Name" variant="outlined" sx={inputStyles} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on tablet+
            gap: "10px",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <TextField select fullWidth label="Birthmonth" variant="outlined" sx={inputStyles}>
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
              <MenuItem key={month} value={month}>{month}</MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Day" variant="outlined" sx={inputStyles}>
            {[...Array(31)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </TextField>
          <TextField select fullWidth label="Year" variant="outlined" sx={inputStyles}>
            {[...Array(100)].map((_, i) => (
              <MenuItem key={i} value={2025 - i}>
                {2025 - i}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField fullWidth label="Contact Number" variant="outlined" sx={{ ...inputStyles, marginBottom: "10px" }} />
        <TextField fullWidth label="Email" variant="outlined" sx={{ ...inputStyles, marginBottom: "20px" }} />

        {/* Account Information */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "14px", md: "16px" }, // Smaller font on mobile
            fontWeight: "900",
            alignSelf: "flex-start",
          }}
        >
          Account Information
        </Typography>

        <TextField fullWidth label="Username" variant="outlined" sx={{ ...inputStyles, marginBottom: "10px" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, row on tablet+
            gap: "10px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
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
            "&:hover": { backgroundColor: "#1E8663" },
            "&:active": { backgroundColor: "#0F112D" },
          }}
        >
          Create Account
        </Button>

        <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            href="#"
            sx={{
              color: "#1E2054",
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default CreateAccount;