import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
  return (
    <Button
      variant="text"
      sx={{
        color: "white",
        textTransform: "none",
        p: 0,
      }}
      href="/api/auth/login"
      startIcon={<LoginIcon />}
    >
      Login
    </Button>
  );
}
