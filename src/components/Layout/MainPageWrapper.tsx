import React, { ReactNode } from "react";
import { Grid, Box } from "@mui/material";
import SideBar from "./SideBar";
import styles from "../../styles/body.module.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

interface Props {
  children?: ReactNode;
}

const store = configureStore({
  reducer: {
    //
  },
});

const MainPageWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <Box className={styles.body}>
        <Grid sx={{ display: "flex" }}>
          <Grid>
            <SideBar />
          </Grid>
          <Grid>{children}</Grid>
        </Grid>
      </Box>
    </Provider>
  );
};
export default MainPageWrapper;
