<template>
   <div class="catalog">
       <div v-for="pokemon in pokemons" :key="pokemon.id" class="card" style="width: 18rem;">
            <img class="card-img-top" :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`" alt="Imagem de capa do card">
            <div class="card-body">
                <h5 class="card-title">{{pokemon.name}}</h5>
                <p class="card-text">R$</p>
                <button @click="handleBuy(pokemon)" class="btn btn-warning">Comprar</button>
            </div>
        </div>
   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { Pokemon } from '../interfaces/Pokemon';

interface PokeApiResponse {
    count: number;
    next: string;
    previous: string;
    results: {
        name: string;
        url: string;
    } [];
}

export default Vue.extend({
  data: () => ({
    drawer: null,
    pokemons: [] as Pokemon[],
  }),

  methods: {
    getOldCart() {
      return localStorage.getItem('cart');
    },

    sanitizePokemonBeforeAddToCart(pokemon: Pokemon) {
      const poke = {
        img: pokemon.stripes.front_default,
        name: pokemon.name,
        price: Math.floor(Math.random() * 50) + 1,
      };
      return poke;
    },

    handleBuy(pokemon: Pokemon) {
      this.$emit('buy', pokemon);
    },
  },

  async created() {
    await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=8&offset=1')
      .then((res) => (
        res.data.results.map(async (result) => (
          axios.get<Pokemon>(result.url)
            .then((pokemonRes) => (
              this.pokemons.push(pokemonRes.data)
            ))
            .catch((error) => (console.log(error)))
        ))))
      .catch((error) => (console.log(error)));
  },
});
</script>

<style scoped>
    .catalog {
        max-width: 900px;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
    }

    .card {
        margin: 20px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    img {
        width: 98%;
        padding: 10px;
    }
</style>
