import { Grid, Box, Container } from "@mui/material";
import SideBar from "./SideBar";
import styles from "../../styles/body.module.css";

const MainPageWrapper = ({ children }) => {
  return (
    <Box className={styles.body}>
      <Grid sx={{ display: "flex"}}>
        <Grid>
          <SideBar />
        </Grid>
        <Grid>{children}</Grid>
      </Grid>
    </Box>
  );
};
export default MainPageWrapper;
