//================================================================================= DEPENDENCIES
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

//================================================================================= MAIN FUNCTION - EXPORT
export default function Home() {

  const router = useRouter();

  //================================================================================= RENDER
  return (
    <Container>

      <Grid container>

        <Grid item xs={12} md={6}>

          <Typography variant="h2" sx={{ marginTop: 10, fontSize: "5rem" }} gutterBottom color="White">Pokedex</Typography>
          <Typography variant="h6" color="White">Pokedex is an advance tool for understanding the world of pokemon with all the information you need.</Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push("/search")}
            sx={{ marginTop: 5 }}
            color="secondary"
          >
            Get Started
          </Button>

        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: 10 }}>
            <Image src="/pokeball.png" width="512px" height="512px" />
          </Box>
        </Grid>

      </Grid>

    </Container>
  )

}
