<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <!-- left-side -->
        <div
          class="collapse navbar-collapse order-lg-1 order-3 navigation-menu"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">INTERIORS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">DESIGN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LIFESTYLE</a>
            </li>
          </ul>
        </div>
        <!-- left-side -->
        <!-- brand -->
        <a class="navbar-brand order-2 me-lg-0" href="#"
          ><img src="../assets/brand.png" alt="brand" width="250px"
        /></a>
        <button
          class="navbar-toggler custom-toggler order-1"
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
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">CONTACT</a></li>
                <li><a class="dropdown-item" href="#">ABOUT</a></li>
                <li>
                  <a class="dropdown-item" href="#">PRESS & AWARD</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">WORK WITH DESIGN HUNTER</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">SOURCE BOOK</a>
            </li>
          </ul>
          <button class="search-btn">
            <b-icon icon="search"></b-icon>
          </button>
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
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-collapse {
    width: 100%;
    height: 5rem;
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

.dropdown-menu a {
  font-size: 11px !important;
  line-height: 10px;
}

.search-btn {
  border: none;
  background-color: white;
  margin-left: 3rem;
  justify-content: center;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: rgb(0, 0, 0);
}

ul.navbar-nav li.dropdown:hover ul.dropdown-menu {
  display: block;
  border: none;
}
</style>
