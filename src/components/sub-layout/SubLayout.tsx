import { Grid } from "@mui/material";
import styles from "../../styles/home.module.css";

const SubLayout = ({ children }) => {
  return (
    <Grid className={styles.main}>
      <Grid className={styles.subContainer1}>{children}</Grid>
    </Grid>
  );
};
export default SubLayout;
