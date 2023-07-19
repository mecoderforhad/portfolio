import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./../../styles/sidebar.module.css";
import { useRouter } from "next/router";
import { menuObj } from "./data/data";

interface Imenu {
  title: string;
  icon: any;
}
const SideBar = () => {
  const [key, setKey] = useState<string | null>(null);
  const Router = useRouter();
  const handleHover = (title: string) => {
    setKey(title);
  };
  const handleClick = (title: string) => {
    title == "home" ? Router.push("/") : title ? Router.push(`${title}`) : "";
  };
  return (
    <Box className={styles.container}>
      {menuObj.map((item: Imenu, i: number) => (
        <div key={i}>
          <Grid
            className={styles.menuIcon}
            onMouseOver={() => handleHover(item.title)}
            onMouseLeave={() => handleHover("")}
            onClick={() => handleClick(item.title)}
          >
            <Grid>{item.icon}</Grid>
          </Grid>
          {key === item.title ? (
            <Grid className={styles.sideHoverMenu}>
              <Typography sx={{ fontFamily: "Gorgia" }}>
                {item.title}
              </Typography>
            </Grid>
          ) : (
            ""
          )}
        </div>
      ))}
    </Box>
  );
};

export default SideBar;
