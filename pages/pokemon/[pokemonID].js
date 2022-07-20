//================================================================================= DEPENDENCIES
import { useEffect } from "react";
import { connect } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import _ from "lodash";
import { Box, Card, CardActions, CardContent, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Skeleton, Stack, Tooltip, Typography } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { searchPokemon, selectedPokemon, deselectedPokemon } from "../../actions";

//================================================================================= MAIN FUNCTION
function Details(props) {

    const router = useRouter();
    const { pokemonID } = router.query;
    let inFavoritesAlready = false;
    let temp = false;

    useEffect(() => {
        if (pokemonID) {
            props.searchPokemon(pokemonID.toLowerCase());
        }
    }, [pokemonID])


    if (props.pokemonDetail !== null) {

        props.favoritesList.map((item, index) => {
            if (item.name !== props.pokemonDetail.name) {
                return inFavoritesAlready = false;
            } else {
                return temp = true
            }
        })

        if (temp) {
            inFavoritesAlready = true;
        }

        //================================================================================= RENDER
        return (
            <Container>
                {
                    (props.errorMessage !== "No Error" && props.errorMessage == "Request failed with status code 404")
                        ? <Typography variant="h4" sx={{ mt: 1 }} color="white" gutterBottom>Pokemon with name: <b>{pokemonID}</b> not found.</Typography>
                        : null

                }
                <Grid container spacing={1} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275 }} elevation={3}>
                            <CardContent sx={{ textAlign: "center" }}>
                                <Box>
                                    {
                                        props.pokemonDetail.sprites.other.dream_world.front_default !== null
                                            ? <Image src={props.pokemonDetail.sprites.other.dream_world.front_default} width="256" height="256" />
                                            : <Image src="https://via.placeholder.com/256" width="256" height="256" />
                                    }

                                </Box>
                                <Divider />
                                <Typography variant="h4" gutterBottom>{_.capitalize(props.pokemonDetail.name)}</Typography>
                                <Typography variant="subtitle1"><b>Height:</b> {props.pokemonDetail.height}</Typography>
                                <Typography variant="subtitle1"><b>Weight:</b> {props.pokemonDetail.weight}</Typography>
                                <Typography variant="subtitle1"><b>EXP:</b> {props.pokemonDetail.base_experience}</Typography>
                                <Typography variant="subtitle1"><b>Total Moves:</b> {props.pokemonDetail.moves.length}</Typography>
                                {
                                    (inFavoritesAlready)
                                        ? <Tooltip title="Release Pokemon">
                                            <IconButton onClick={() => props.deselectedPokemon(props.pokemonDetail)}>
                                                <CatchingPokemonIcon color="primary" fontSize="large" />
                                            </IconButton>
                                        </Tooltip>
                                        : <Tooltip title="Catch Pokemon">
                                            <IconButton onClick={() => props.selectedPokemon(props.pokemonDetail)}>
                                                <CatchingPokemonIcon fontSize="large" />
                                            </IconButton>
                                        </Tooltip>
                                }

                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275 }} elevation={3}>
                            <CardContent>
                                <Typography variant="h6" >Abilities</Typography>
                                <Divider />
                                <List>
                                    {
                                        props.pokemonDetail.abilities.map((item, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <ListItemIcon>
                                                        <CatchingPokemonIcon color="primary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={_.capitalize(item.ability.name)} />
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                                <Typography variant="h6" >Items</Typography>
                                <Divider />
                                <List>
                                    {
                                        props.pokemonDetail.held_items.length !== 0
                                            ? props.pokemonDetail.held_items.map((item, index) => {
                                                return (
                                                    <ListItem key={index}>
                                                        <ListItemIcon>
                                                            <CatchingPokemonIcon color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText primary={_.capitalize(item.item.name)} />
                                                    </ListItem>
                                                )
                                            })
                                            : <ListItem>
                                                <ListItemText primary="No item" sx={{ color: "red" }} />
                                            </ListItem>
                                    }
                                </List>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275 }} elevation={3}>
                            <CardContent>
                                <Typography variant="h6" >Stats</Typography>
                                <Divider />
                                <List>
                                    {
                                        props.pokemonDetail.stats.map((item, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <ListItemIcon>
                                                        <CatchingPokemonIcon color="primary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${_.capitalize(item.stat.name)}: ${item.base_stat}`} />
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return <Container>
            {
                props.errorMessage !== "No Error"
                    ? <Typography variant="h4" sx={{ mt: 1 }} color="white" gutterBottom>{props.errorMessage}</Typography>
                    : null

            }
            <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{ minWidth: 275 }}
                        elevation={3}
                    >
                        <CardContent>
                            <Box >
                                <Stack spacing={1}>
                                    <Skeleton variant="rectangular" width="100%" height={128} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{ minWidth: 275 }}
                        elevation={3}
                    >
                        <CardContent>
                            <Box >
                                <Stack spacing={1}>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangular" width="100%" height={128} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card
                        sx={{ minWidth: 275 }}
                        elevation={3}
                    >
                        <CardContent>
                            <Box >
                                <Stack spacing={1}>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangular" width="100%" height={128} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </Stack>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    }

}
//================================================================================= REDUX-mapStateToProps
function mapStateToProps(state) {
    return {
        pokemonDetail: state.pokemonDetail,
        favoritesList: state.favoritesList,
        errorMessage: state.errorMessage
    }

}
//================================================================================= REDUX-EXPORT-CONNECT
export default connect(mapStateToProps, {
    searchPokemon: searchPokemon,
    selectedPokemon: selectedPokemon,
    deselectedPokemon: deselectedPokemon
})(Details);