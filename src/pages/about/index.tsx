import MainPageWrapper from "@/components/Layout/MainPageWrapper";
import SubLayout from "@/components/sub-layout/SubLayout";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const index = () => {
  return (
    <MainPageWrapper>
      <SubLayout>
        <Typography
          sx={{ fontFamily: "Gorgia", fontSize: "40px", fontWeight: "600" }}
        >
          About
        </Typography>
      </SubLayout>
    </MainPageWrapper>
  );
};
export default index;
