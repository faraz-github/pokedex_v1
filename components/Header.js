//================================================================================= DEPENDENCIES
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import { IconButton, Tooltip } from '@mui/material';

//================================================================================= MAIN FUNCTION - EXPORT
export default function ButtonAppBar() {

    const router = useRouter();

    //================================================================================= RENDER
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/"><a className="HeaderTitle">Pokedex</a></Link>
                    </Typography>
                    {
                        (router.pathname !== "/search")
                            ? <Tooltip title="Search Pokemons">
                                <IconButton color="inherit" onClick={() => router.push("/search")}>
                                    <SearchIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            : null
                    }
                    {
                        (router.pathname !== "/pokemon")
                            ? <Tooltip title="All Pokemons">
                                <IconButton color="inherit" onClick={() => router.push("/pokemon")}>
                                    <PetsIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            : null
                    }
                    {
                        (router.pathname !== "/favorites")
                            ? <Tooltip title="Your Pokemons">
                                <IconButton color="inherit" onClick={() => router.push("/favorites")}>
                                    <CatchingPokemonIcon fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            : null
                    }
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}