

<template>
  <main>
    <NavbarVue />
    <ShortCut/>
    <Search/>
  </main>
</template>

<script setup>
import NavbarVue from '../components/Navbar.vue';
import Search from '../components/Search.vue'
import ShortCut from '../components/ShortCut.vue';
</script>
<style>
/* body{
  position: fixed;
  width: 100%;
  padding-top: 30vh;
} */
</style>