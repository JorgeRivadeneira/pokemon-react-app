import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsWithDetails } from "../actions";
import { getPokemon, getPokemonDetails } from "../api";

const initialState = {
    pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        //dispatch loader
        //fetch
        //dispatch loader
        const pokemonRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
        )
        dispatch(setPokemons(pokemonsDetailed))
    }
)


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });
            
                if(currentPokemonIndex >= 0){
                    const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                    state.pokemons[currentPokemonIndex].favorite = !isFavorite;
                }
        }
    }
})


export const {setFavorite, setPokemons} = dataSlice.actions;

export default dataSlice.reducer;