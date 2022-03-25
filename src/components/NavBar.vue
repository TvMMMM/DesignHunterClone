<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- left-side -->
        <div
          class="collapse navbar-collapse order-lg-1 order-3 navigation-menu"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/interiors" class="nav-link"
                >INTERIORS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/design" class="nav-link">DESIGN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/lifestyle" class="nav-link"
                >LIFESTYLE</router-link
              >
            </li>
          </ul>
        </div>
        <!-- left-side -->
        <!-- brand -->
        <router-link class="navbar-brand order-1 me-lg-0" to="/"
          ><img src="../assets/brand.png" alt="brand" width="250px"
        /></router-link>
        <button
          class="navbar-toggler custom-toggler order-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navigation-menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- right-side -->
        <div
          class="collapse navbar-collapse order-lg-3 order-4 navigation-menu"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <router-link
                to="/about"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT
              </router-link>
              <ul
                class="dropdown-menu mx-auto"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link to="/contact" class="dropdown-item"
                    >CONTACT</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/about"
                    >ABOUT</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/press-and-award"
                    >PRESS & AWARD</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    to="/work-with-design-hunter"
                    >WORK WITH DESIGN HUNTER</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/source-book"
                >SOURCE BOOK</router-link
              >
            </li>
          </ul>
          <form class="d-flex justify-content-center">
            <input class="form-control" type="search" aria-label="search" />
            <button class="search-btn">
              <b-icon icon="search"></b-icon>
            </button>
          </form>
        </div>
        <!-- right-side -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
@media (min-width: 1200px) {
  ul.navbar-nav li.dropdown:hover ul.dropdown-menu {
    display: block;
    border: none;
    margin-top: -10px;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    width: 100%;
    height: 5rem;
  }
  .dropdown-menu a {
    font-size: 11px !important;
    line-height: 10px;
    text-align: left !important;
  }
  .dropdown-menu {
    width: auto !important;
  }
}

@media (min-width: 320px) {
  .dropdown-menu a {
    font-size: 11px !important;
    line-height: 10px;
    text-align: center;
  }
  .dropdown-menu {
    width: 400px;
  }
}

.navbar ul a {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: black;
  font-weight: 400;
}

.nav-link:hover {
  font-weight: bolder;
}

.form-control {
  width: 8rem;
  margin-left: 2rem;
  height: 30px;
  margin-right: 0.1rem;
}

.search-btn {
  border: none;
  background-color: white;
  justify-content: center;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: rgb(0, 0, 0);
}
</style>
