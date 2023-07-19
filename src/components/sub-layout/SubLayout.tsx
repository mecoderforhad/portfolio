import React, { ReactNode } from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/home.module.css";

interface Props {
  children?: ReactNode;
}

const SubLayout = ({ children }: Props) => {
  return (
    <Grid className={styles.main}>
      <Grid className={styles.subContainer}>{children}</Grid>
    </Grid>
  );
};
export default SubLayout;
