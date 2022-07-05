<template>
  <div class="shortCut">
    <div class="icon">
      <font-awesome-icon class="icon" icon="fa-solid fa-umbrella-beach" />
      <span class="icon-text">Plajlar</span>
    </div>
    <div class="icon">
      <font-awesome-icon class="icon" icon="fa-solid fa-hotel" />
      <span class="icon-text">Oteller</span>
    </div>

    <div class="icon">
      <font-awesome-icon class="icon" icon="fa-solid fa-landmark" />
      <span class="icon-text"> Tarihi Alanlar</span>
    </div>
    <div class="icon">
      <font-awesome-icon class="icon" icon="fa-solid fa-utensils" />
      <span class="icon-text"> Yemek</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shortCut {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 15%;
  padding-top: 35vh;
}

.icon {
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.icon-text {
  margin-top: 1em;
}
@media screen and (max-width: 600px) {
  .icon {
    height: 4vh;
  }
}
</style>