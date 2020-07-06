<template>
    <div class="cart">
      <h1>Carrninho</h1>
      <div class="cart-items card" v-for="pokemon in pokemons" :key="pokemon.id">
        <img :src="pokemon.sprites.front_default" alt="icon">
        <h5>{{ pokemon.name }}</h5>
        <h5>R$</h5>
      </div>
      <div class="total">
        <h3>TOTAL</h3>
        <h3>R$</h3>
      </div>
      <button @click="handleFinish" class="btn btn-warning">FINALIZAR</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Pokemon } from '../interfaces/Pokemon';

export default Vue.extend({
  name: 'Cart',

  props: {
    pokemons: {
      type: Array as () => Pokemon[],
    },
  },

  data: () => ({
  }),
  methods: {
    handleFinish() {
      alert('Parabéns compra realizada!');
      localStorage.clear();
    },
  },
});
</script>

<style scoped>
  .cart-items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    padding: 15px;
  }

  .cart {
    text-align: center;
    max-width: 400px;
    width: 98%;
  }

  .total {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }

  button {
    width: 100%;
  }

</style>
