<template>
<Navbar/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>



<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>


<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>


