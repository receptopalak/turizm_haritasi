<template>
  <div class="search-div">
    <div class="search">
      <i class="fa fa-search"></i>
      <input
        type="text"
        class="form-control"
        placeholder="Nereye Gitmek İstersiniz?"
      />
    </div>
    <button class="btn btn-light" id="search-button">
      <font-awesome-icon icon="fa-solid fa-location-arrow" />Ara
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");

body {
  background-color: #eee;
  font-family: "Poppins", sans-serif;
  font-weight: 300;

}

.search-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 0 30%;*/
  margin-top: 4vh;
  align-items: center;
}

#search-button {
  margin: 2em;
  min-width: 15%;
  height: 3em;
  border-radius: 1.5em;
  border-color: white;
  border-width: 2px;
}

.height {
  height: 100vh;
}

.search {
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
  min-width: 60%;
}

.search input {
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: blue;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid black;
}

.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #545454 !important;
}
</style>