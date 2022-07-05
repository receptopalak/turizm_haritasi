<template>
  <header>
    <nav  :class="{ fixedTop }"
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
     
    >
      <div class="container-fluid">
        <div class="logo-div ml-1">
          <img class="logo" src="../assets/bcekmece-logo.png" alt="" />
          <p class="logo-text">Turizm<br />Rehberi</p>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!--Anasayfa-->
              <RouterLink class="nav-link" aria-current="page" to="/"
                ><font-awesome-icon icon="fa-solid fa-house" /> &nbsp;
                Anasayfa</RouterLink
              >
            </li>
            <li class="nav-item">
              <!--Büyükçekmece Hakkında-->
              <RouterLink class="nav-link" to="/about"
                ><font-awesome-icon icon="fa-solid fa-heart" /> &nbsp;
                Hakkında</RouterLink
              >
            </li>
            <li class="nav-item">
              <!--Büyükçekmece Keşfet-->
              <RouterLink class="nav-link" to="/explore"
                ><font-awesome-icon icon="fa-solid fa-map-location" />
                &nbsp;Keşfet</RouterLink
              >
            </li>
            <li class="nav-item dropdown">
              <!--Seyahat-->
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <font-awesome-icon icon="fa-solid fa-compass" /> &nbsp; Seyahat
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" to="/city"
                    >Şehir Merkezi</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/entertainmentPlace"
                    >Eğlence Yeri</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/">Plajlar</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/cultural"
                    >Tarihi Alanlar</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/activites"
                    >Aktiviteler</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <!--Konaklama-->
              <RouterLink class="nav-link" to="/otels">
                <font-awesome-icon icon="fa-solid fa-bed" />
                &nbsp;Konaklama</RouterLink
              >
            </li>
            <li class="nav-item">
              <!--Yemek-->
              <RouterLink class="nav-link" to="/food">
                <font-awesome-icon icon="fa-solid fa-utensils" />
                Yemek</RouterLink
              >
            </li>
            <li class="nav-item">
              <!--Sağlık-->
              <RouterLink class="nav-link" to="/hospital"
                ><font-awesome-icon icon="fa-solid fa-truck-medical" /> &nbsp;
                Sağlık</RouterLink
              >
            </li>
            <li class="nav-item">
              <!--Turistik-->
              <RouterLink class="nav-link" to="/cultural">
                <font-awesome-icon icon="fa-solid fa-landmark" /> &nbsp;
                Turistik</RouterLink
              >
            </li>
            <li class="nav-item">
              <!--Plajlar-->
              <RouterLink class="nav-link" to="/beach"
                ><font-awesome-icon icon="fa-solid fa-umbrella-beach" /> &nbsp;
                Plajlar</RouterLink
              >
            </li>
          </ul>
          <ul class="navbar-nav ms-auto shortButton">
            <li class="nav-item">
              <a class="nav-link btn-bus" href="#">
                <font-awesome-icon icon="fa-solid fa-bus-simple" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon icon="fa-solid fa-truck-medical"
              /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon icon="fa-solid fa-phone" />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <font-awesome-icon icon="fa-brands fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
        <!-- navbar-collapse.// -->
      </div>
      <!-- container-fluid.// -->
    </nav>
  </header>
</template>

<script>
import { computed, onMounted,ref } from "@vue/runtime-core";
import { RouterLink, RouterView, useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    let fixedTop = ref();
    onMounted(() => {
      console.log(route.name);
        fixedTop= (route.name == 'explore') ? 'fixed-top' : false
        console.log(fixedTop)
    });
    computed(()=>{
        
    })
    return{
        fixedTop
    }
  },
};
</script>

<style>
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
body {
  /* background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-x: center; */
}
/* #background-image{
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
} */
/* .navbar {
  background: #00000057;
} */


.logo {
  width: 35%;
  display: flex;
  height: 35%;
}

.nav-item {
  font-size: 1.3em;
}

.logo-div {
  display: flex;
  flex-direction: row;
}
.logo-text {
  display: flex;
  color: white;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 0.5em;
  font-weight: 100;
}
.navbar {
    z-index: 1;
}
@media screen and (max-width: 600px){ 
    .shortButton {
        flex-direction: row !important;
        justify-content: space-between;
    }
}
</style>