import React, { ReactNode } from "react";
import { Grid, Box } from "@mui/material";
import SideBar from "./SideBar";
import styles from "../../styles/body.module.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Item, Wrapper } from "../Layout/styles/config";

interface Props {
  children?: ReactNode;
}

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const store = configureStore({
  reducer: {
    //
  },
});

const MainPageWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Box className={styles.body}>
          <Item>
            <Grid sx={{ display: "flex" }}>
              <Grid>
                <SideBar />
              </Grid>
              <Grid sx={{ margin: "20px", border: "2px solid blue" }}>
                {children}
              </Grid>
            </Grid>
          </Item>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};
export default MainPageWrapper;
