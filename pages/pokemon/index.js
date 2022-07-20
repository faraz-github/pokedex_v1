//================================================================================= DEPENDENCIES
import { useEffect } from "react";
import { connect } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import _ from "lodash";
import { Button, Card, CardContent, CardActions, Grid, Typography, Box, ButtonGroup, Container, Stack, Skeleton } from "@mui/material";

import { fetchAllPokemon, fetchNextPage, fetchPrevPage } from "../../actions"

//================================================================================= MAIN FUNCTION
function Pokemon(props) {

    const router = useRouter();
    const placeHolderNumber = 20;

    useEffect(() => {
        props.fetchAllPokemon();
    }, [])

    function renderList() {
        
        return props.list.map((pokemon) => {

            const imageNumber = pokemon.url.slice(34, (pokemon.url.length - 1));
            // console.log(imageNumber); // code is fine but the api is breaking to provide the data above 649
            let imageURl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imageNumber}.svg`;
            if (imageNumber > 649) {
                imageURl = "https://via.placeholder.com/128";
            }
            return <Grid item xs={12} md={4} lg={3}
                key={pokemon.name}
                sx={{ textAlign: "center" }}
            >
                <Card
                    sx={{ minWidth: 275, cursor: "pointer" }}
                    elevation={3}
                    onClick={() => router.push(`/pokemon/${imageNumber}`)}
                >
                    <CardContent>
                        <Box>
                            <Image src={imageURl} width="128" height="128" />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Typography variant="h6">{_.capitalize(pokemon.name)}</Typography>
                    </CardActions>
                </Card>

            </Grid>
        })
    }

    if (props.list.length !== 0) {
        //================================================================================= RENDER
        return (
            <Container>
                <Typography variant="h4" color="white" sx={{ mt: 1 }} gutterBottom>
                    All Pokemon
                </Typography>
                <Grid container spacing={1}>
                    {renderList()}
                </Grid>
                <div style={{ textAlign: "center" }}>
                    <ButtonGroup variant="contained" sx={{ my: 1 }}>
                        {
                            props.prevPageURL === null
                                ? null
                                : <Button onClick={() => props.fetchPrevPage(props.prevPageURL)}>
                                    Prev
                                </Button>
                        }
                        {
                            props.nextPageURL === null
                                ? null
                                : <Button onClick={() => props.fetchNextPage(props.nextPageURL)}>
                                    Next
                                </Button>
                        }
                    </ButtonGroup>

                </div>
            </Container>
        )
    } else {
        return <Container>
            {
                props.errorMessage !== "No Error"
                    ? <Typography variant="h4" sx={{ mt: 1 }} gutterBottom>{props.errorMessage}</Typography>
                    : <Typography variant="h4" sx={{ mt: 1 }} gutterBottom>All Pokemon</Typography>

            }
            <Grid container spacing={1}>
                {
                    [...Array(placeHolderNumber)].map((item, index) => {
                        return <Grid item xs={12} md={4} lg={3} key={index}>
                            <Card
                                sx={{ minWidth: 275 }}
                                elevation={3}
                            >
                                <CardContent>
                                    <Box >
                                        <Stack spacing={1}>
                                            <Skeleton variant="rectangular" width="100%" height={128} />
                                            <Skeleton variant="text" />
                                        </Stack>
                                    </Box>
                                </CardContent>
                            </Card>

                        </Grid>
                    })
                }

            </Grid>
        </Container>
    }

}

//================================================================================= REDUX-mapStateToProps
function mapStateToProps(state) {
    if (state.pokemonList.data) {
        return {
            list: state.pokemonList.data.results,
            nextPageURL: state.pokemonList.data.next,
            prevPageURL: state.pokemonList.data.previous,
        }
    } else {
        return {
            list: [],
            errorMessage: state.errorMessage
        }

    }
}

//================================================================================= REDUX-EXPORT-CONNECT
export default connect(mapStateToProps, {
    fetchAllPokemon: fetchAllPokemon,
    fetchNextPage: fetchNextPage,
    fetchPrevPage: fetchPrevPage
})(Pokemon);
