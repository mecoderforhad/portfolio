import MainPageWrapper from "@/components/Layout/MainPageWrapper";
import SubLayout from "@/components/sub-layout/SubLayout";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const index = () => {
  return (
    <MainPageWrapper>
      <SubLayout>
        <div style={{ border: "2px solid red" }}>
          <Typography
            sx={{
              fontFamily: "Gorgia",
              fontSize: "40px",
              fontWeight: "600",
              margin: "20px",
            }}
          >
            About
          </Typography>
        </div>
      </SubLayout>
    </MainPageWrapper>
  );
};
export default index;
