import { Box, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import BaseCard from "../src/components/cards/BaseCard";
import LineChart from "../src/components/charts/echarts/LineChart";
import PieChart from "../src/components/charts/echarts/PieChart";
import AdminLayout from "../src/components/layout/AdminLayout";

const Home: NextPage = () => {
  return (
    <AdminLayout>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <BaseCard
              sx={{
                p: 3,
                width: "100%",
                position: "relative",
                borderRadius: 2,
                transition: "all .5s",
              }}
              variant="outlined"
            >
              <Typography variant={"body2"}>Card 1</Typography>
            </BaseCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <BaseCard sx={{ p: 3, borderRadius: 2 }} variant="outlined">
              <Typography variant={"body2"}>Card 2</Typography>
            </BaseCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <BaseCard sx={{ p: 3, borderRadius: 2 }} variant="outlined">
              <Typography variant={"body2"}>Card 3</Typography>
            </BaseCard>
          </Grid>
        </Grid>
        <Box sx={{ my: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <BaseCard
              sx={{ p: 1, borderRadius: 2, overflow: 'scroll' }}
              variant="outlined"
            > 
              <LineChart />              
            </BaseCard>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <BaseCard
              sx={{ p: 1, borderRadius: 2, overflow: 'scroll' }}
              variant="outlined"
            >
              <PieChart />
            </BaseCard>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default Home;
