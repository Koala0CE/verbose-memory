// SwipeableEdgeDrawer.tsx
import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Image, { StaticImageData } from "next/image";
import { Stack } from "@mui/material";

const drawerBleeding = 56;

interface Props {
  window?: () => Window;
  imageSrc: string | StaticImageData | null;
  isOpen: boolean; // New prop to control the drawer's open state
  onToggleDrawer: () => void; // Callback to toggle the drawer's state
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function SwipeableEdgeDrawer(props: Props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={props.isOpen}
        onClose={props.onToggleDrawer}
        onOpen={props.onToggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            Memories
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {props.imageSrc ? ( // Check if imageSrc is not null
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              width={"100%"}
              height={"100%"}
            >
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
              >
                <Image
                  width={700}
                  height={475}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={props.imageSrc}
                  alt="pic"
                />
              </Stack>
            </Stack>
          ) : null}
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
