import TourCard from "@/app/components/TourCard";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function HomePage() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} md={3}>
          <TourCard />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <TourCard />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <TourCard />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <TourCard />
        </Grid>
      </Grid>
    </Container>
  );
}
