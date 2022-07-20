//================================================================================= DEPENDENCIES
import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Breadcrumbs, Button, Container, Divider, FormControl, Paper, TextField, Typography } from "@mui/material";

//================================================================================= MAIN FUNCTION - EXPORT
export default function Search() {

    const queryRef = useRef();
    const router = useRouter();

    const handleSubmit = (e) => {

        e.preventDefault();
        router.push(`/pokemon/${queryRef.current.value}`)
        queryRef.current.value = "";

    }

    //================================================================================= RENDER
    return (
        <Container>

            <Typography variant="h4" color="white" sx={{ mt: 1 }} gutterBottom>
                Search
            </Typography>

            <Paper sx={{ p: 1, pb: 5 }} elevation={3}>

                <Breadcrumbs>
                    <Link href="/">
                        <a>Pokedex Home</a>
                    </Link>
                    <Typography color="primary">Getting Started</Typography>
                </Breadcrumbs>

                <Divider />

                <Typography variant="h5" sx={{ mt: 5 }} gutterBottom>
                    Pokemon Search
                </Typography>

                <form onSubmit={handleSubmit}>

                    <FormControl sx={{ display: "flex", flexDirection: "column" }}>

                        <TextField
                            variant="outlined"
                            fullWidth
                            label="Search"
                            placeholder="Search by pokemon name"
                            type="text"
                            required
                            color="secondary"
                            inputRef={queryRef}
                            sx={{ mb: 1 }}
                        />
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            type="submit"
                        >
                            Search
                        </Button>

                    </FormControl>

                </form>

            </Paper>

        </Container>
    )

}