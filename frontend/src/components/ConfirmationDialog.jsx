import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system"; // Import keyframes
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const scaleUp = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  60% {
    transform: scale(1.3); 
    opacity: 1;
  }
  100% {
    transform: scale(1); // Return to normal size
    opacity: 1;
  }
`;

const ConfirmationDialog = ({ open, onClose, title, message, buttonText }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          padding: "40px",
          textAlign: "center",
        },
      }}
    >
      {/* Icon at the top center with animation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "9px",
        }}
      >
        <CheckCircleIcon
          sx={{
            fontSize: "100px",
            color: "#4CAF50",
            animation: `${scaleUp} 0.7s ease-in-out`, // Apply the animation
          }}
        />
      </Box>

      {/* Dialog Title */}
      <DialogTitle
        sx={{
          fontSize: "34px",
          fontWeight: "800",
          color: "#1E2054",
          padding: "0",
          marginBottom: "-3px",
        }}
      >
        {title}
      </DialogTitle>

      {/* Dialog Message */}
      <DialogContent
        sx={{
          padding: "0",
          marginBottom: "16px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "black",
          }}
        >
          {message}
        </Typography>
      </DialogContent>

      {/* Dialog Actions (OK Button) */}
      <DialogActions
        sx={{
          justifyContent: "center",
          padding: "0",
        }}
      >
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            marginTop: "20px",
            width: "50%",
            fontSize: "16px",
            backgroundColor: "#1E2054",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 24px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#1E8663",
            },
          }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;