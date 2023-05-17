import { Box, Grid, Typography, keyframes } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CreateIcon from "@mui/icons-material/Create";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useState } from "react";
import styles from "./../../styles/sidebar.module.css";
import { useRouter } from "next/router";

const menuObj = [
  {
    title: "home",
    icon: <HomeIcon />,
  },
  {
    title: "about",
    icon: <PersonIcon />,
  },
  {
    title: "resume",
    icon: <ArticleIcon />,
  },
  {
    title: "portfolio",
    icon: <FolderCopyIcon />,
  },
  {
    title: "blogs",
    icon: <CreateIcon />,
  },
  {
    title: "contact",
    icon: <ContactPhoneIcon />,
  },
];

const SideBar = () => {
  const [key, setKey] = useState(null);
  const Router = useRouter();
  const handleHover = (title) => {
    setKey(title);
  };
  const handleClick = (title) => {
    title == "home" ? Router.push("/") : title ? Router.push(`${title}`) : "";
  };
  return (
    <Box className={styles.container}>
      {menuObj.map((item) => (
        <>
          <Grid
            className={styles.menuIcon}
            onMouseOver={() => handleHover(item.title)}
            onMouseLeave={() => handleHover(null)}
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
        </>
      ))}
    </Box>
  );
};

export default SideBar;
