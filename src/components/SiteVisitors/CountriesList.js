import Badge from "@mui/material/Badge";
import { Image } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import Span from "../Span/Span";
import image from "../../assets/images/44x44.png";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "& .MuiTableCell-root": {
    borderBottom: "none",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
  },

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CountriesList = ({ countries }) => {
  return (
    <>
      <Typography variant={"h6"} color={"text.secondary"} sx={{ ml: "4px" }}>
        Countries
      </Typography>
      <Table sx={{ ml: -1 }}>
        <TableBody>
          {countries.map((country, index) => {
            return (
              <StyledTableRow key={index}>
                <TableCell>
                  <Span
                    sx={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      mr: 1,
                    }}
                  >
                    <Image src={image} alt="dummy" />
                  </Span>
                  {country.name}
                </TableCell>
                <TableCell>{country.visitors}</TableCell>
                <TableCell align={"right"}>
                  <Badge
                    overlap={"circular"}
                    sx={{
                      p: "4px",
                      borderRadius: "50%",
                      bgcolor: country.badgeColor,
                    }}
                  />
                </TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default CountriesList;
