//================================================================================= DEPENDENCIES
import { connect } from "react-redux";
import Image from "next/image";
import useRouter from "next/router";
import _ from "lodash";
import { Box, Card, CardActions, CardContent, Container, Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { deselectedPokemon } from "../actions";

//================================================================================= MAIN FUNCTION
function Favorites(props) {

    const router = useRouter;

    function renderList() {
        if (props.favoritesList.length !== 0) {
            return props.favoritesList.map((pokemon) => {

                const imageNumber = pokemon.id;
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
                        className="cardWithColorBorder"
                    >
                        <CardContent onClick={() => router.push(`/pokemon/${imageNumber}`)}>
                            <Box>
                                <Image src={imageURl} width="128" height="128" className="imageWithShadow" />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Typography variant="h6">{_.capitalize(pokemon.name)}</Typography>
                            <Tooltip title="Release Pokemon">
                                <IconButton onClick={() => props.deselectedPokemon(pokemon)}>
                                    <CatchingPokemonIcon color="primary" />
                                </IconButton>
                            </Tooltip>
                        </CardActions>
                    </Card>

                </Grid>
            })
        } else {
            return <Paper sx={{ p: 1, textAlign: "center", width: "100%" }} >
                <Typography variant="h6"> Your pokeballs are empty. </Typography>
            </Paper>
        }

    }

    //================================================================================= RENDER
    return (
        <Container>
            <Typography variant="h4" sx={{ mt: 1 }} color="white" gutterBottom>
                Your Pokemons
            </Typography>
            <Grid container spacing={1}>
                {renderList()}
            </Grid>
        </Container>
    )
}

//================================================================================= REDUX-mapStateToProps
function mapStateToProps(state) {
    return {
        favoritesList: state.favoritesList
    }
}
//================================================================================= REDUX-EXPORT-CONNECT
export default connect(mapStateToProps, {
    deselectedPokemon: deselectedPokemon
})(Favorites);