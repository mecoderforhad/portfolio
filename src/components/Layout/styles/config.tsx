import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  background: "#1976d2",
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    background: "orange",
  },
  [theme.breakpoints.down("sm")]: {
    background: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    background: "purple",
  },
}));