import './App.css';
import { Searcher } from './components/Searcher';
import { Col, Spin } from 'antd';
import { PokemonList } from './components/PokemonList';
import logo from './statics/logo.svg'
import { useEffect } from 'react';
import { getPokemon, getPokemonDetails } from './api';
import { getPokemonsWithDetails, setLoading, setPokemons } from './actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';


function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const loading = useSelector(state => state.ui.loading, shallowEqual);
    
  // console.log('app: ',pokemons, loading);

  const dispacth = useDispatch();

  useEffect(() => {
    //antes: sin usar redux toolkit
    const fetchPokemons = async () => {
      dispacth(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispacth(getPokemonsWithDetails(pokemonsRes));
      dispacth(setLoading(false));
    };
    
    fetchPokemons();

    //usando redux toolkit:
    // dispacth(fetchPokemonsWithDetails());

  }, [])

  return (
    <div className="App">
      <Col
        span={4}
        offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {/* {<PokemonList pokemons={pokemons} />} */}
      {loading ? <Col offset={12}>
        <Spin spinning size='large' />
      </Col> : <PokemonList pokemons={pokemons} />}
      
    </div>
  );
}



export default App;
