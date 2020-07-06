<template>
    <v-app id="inspire">
    <v-app-bar
      app
      color="#222222"
      dark
    >
      <v-toolbar-title>David Souza</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height page"
        fluid
      >
      <Catalog @buy="addPokemonToCart" />
      <Cart :pokemons="pokemon" />

      </v-container>
    </v-main>
    <v-footer
      color="#222222"
      app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Catalog from './components/Catalog.vue';
import Cart from './components/Cart.vue';
import { Pokemon } from './interfaces/Pokemon';

export default Vue.extend({
  name: 'App',

  components: {
    Catalog,
    Cart,
  },
  data: () => ({
    pokemon: [] as Pokemon[],
  }),
  methods: {
    addPokemonToCart(pokemon: Pokemon) {
      console.log(pokemon);
      this.pokemon.push(pokemon);
    },
  },
});
</script>

<style scoped>
  .page {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
</style>
