import Typography from "@mui/material/Typography";
import Div from "../Div/Div";
import Image from "../../assets/images/noList.png";

const ListNoDataPlaceholder = ({ children }) => {
  return (
    <Div
      sx={{
        display: "flex",
        minWidth: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {children ? (
        children
      ) : (
        <Div sx={{ textAlign: "center", p: 3, m: "auto" }}>
          <Div
            sx={{
              width: 360,
              maxWidth: "100%",
              height: "auto",
              mb: 2,

              "& svg": {
                width: "100%",
                height: "auto",
              },
            }}
          >
            <img src={Image} alt="your alt here" />
          </Div>
          <Typography variant={"h3"} color={"text.secondary"}>
            No data available
          </Typography>
        </Div>
      )}
    </Div>
  );
};

export default ListNoDataPlaceholder;
