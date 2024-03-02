import { forwardRef, useCallback, useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CodeIcon from "@mui/icons-material/Code";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CustomIconButton from "../CustomIconButton/CustomIconButton";
import CodeBlock from "../CodeBlock/CodeBlock";

const Transition = forwardRef(function Transition(
  { children, ...restProps },
  ref
) {
  return (
    <Slide direction="up" ref={ref} {...restProps}>
      {children}
    </Slide>
  );
});

const DemoCard = ({
  title,
  subheader,
  children,
  demoCode,
  noWrapper,
  wrapperSx,
  sx,
}) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(demoCode)
      .then((response) => response.text())
      .then((textContent) => {
        setText(textContent);
      });
  }, [demoCode]);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Card sx={sx}>
        <CardHeader
          title={
            title && (
              <Typography variant={"h4"} mb={0}>
                {title}
              </Typography>
            )
          }
          subheader={
            subheader && (
              <Typography sx={{ mt: 1, color: "text.secondary" }}>
                {subheader}
              </Typography>
            )
          }
          action={
            <CustomIconButton
              onClick={handleClickOpen}
              sx={{
                margin: "-10px -6px -10px 0",
              }}
            >
              <CodeIcon />
            </CustomIconButton>
          }
        />
        {noWrapper ? (
          children
        ) : (
          <CardContent
            sx={{
              display: "flex",
              minWidth: 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: (theme) => theme.palette.action.hover,
              ...wrapperSx,
            }}
          >
            {children}
          </CardContent>
        )}
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth={false}
        fullWidth={true}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 2,
            pb: 3,
          },

          "& .kZOESq": {
            backgroundColor: "#19243B",
            p: 1.5,
            borderRadius: 2,

            "& > span": {
              pl: "0 !important",
              backgroundColor: "inherit !important",
            },
          },
          "& .lfriTS": {
            top: "12px",
            right: "12px",
            backgroundColor: "inherit",
            border: "solid 2px #FFF",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: 20,
            display: "flex",
            minWidth: 0,
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0,
          }}
        >
          {`${title} > Source Code`}
          <CustomIconButton
            onClick={handleClose}
            sx={{ margin: "-10px -6px -10px 0" }}
          >
            <CloseIcon />
          </CustomIconButton>
        </DialogTitle>
        <DialogContent sx={{ pb: 0 }}>
          <DialogContentText id="alert-dialog-slide-description">
            <CodeBlock text={text} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DemoCard;
