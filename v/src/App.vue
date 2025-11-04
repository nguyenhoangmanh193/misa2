<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from './layout/Header.vue';
import { userData } from './services/candidate.js';
localStorage.setItem('candidates', JSON.stringify(userData));
</script>
    

<style>

</style>