import { Box, Paper, Stack, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import Image from "next/image";

export default function TourCard() {
  return (
    <Paper elevation={3}>
      <img
        src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1451&q=80"
        alt=""
      />

      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          Immerse into the falls
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <AccessTime sx={{ width: 12.5 }} />

          <Typography variant="body2">5 hours</Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
