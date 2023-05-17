import MainPageWrapper from "@/components/Layout/MainPageWrapper";
import { Button, Grid, Typography } from "@mui/material";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <MainPageWrapper>
      <Grid className={styles.main}>
        <Grid className={styles.subContainer1}>
          <Grid className={styles.textWord}>
            <Typography
              sx={{ fontFamily: "Gorgia", fontWeight: "400", fontSize: "20px" }}
            >
              -HELLO
            </Typography>
            <Typography
              sx={{ fontFamily: "Gorgia", fontWeight: "600", fontSize: "40px" }}
            >
              I'm <span style={{ color: "#D71B3E" }}>Jems</span> Kemerun
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gorgia",
                fontSize: "14px",
                margin: "10px 0px 20px",
              }}
            >
              Personal Portfolio Website Concept designed by M S Newaz. Connect
              with them on Dribbble; the global community for designers and
              creative professionals
            </Typography>
            <Button
              sx={{
                background: "#D71B3E",
                fontFamily: "Gorgia",
                color: "white",
                ":hover": { background: "#219ebc" },
              }}
            >
              Download CV
            </Button>
          </Grid>
        </Grid>
        <Grid className={styles.subContainer2}>
          <img src="/images/person.png" />
        </Grid>
      </Grid>
    </MainPageWrapper>
  );
}
