import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Logout() {
  return (
    <Button
      variant="text"
      sx={{
        color: "white",
        textTransform: "none",
        p: 0,
      }}
      href="/api/auth/logout"
      startIcon={<LogoutIcon />}
    >
      Logout
    </Button>
  );
}
