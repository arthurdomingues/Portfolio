<template>
<nav class="navbar is-dark is-fixed-top">
  <div class="navbar-brand">
      <a class="navbar-item is-family-code has-text-weight-bold is-size-3">
        Arthur Domingues
      </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
    </div>

    <div class="navbar-end is-family-code has-text-weight-bold">
        <router-link class="navbar-item" to="/">Home</router-link>

        <router-link class="navbar-item" to="/about">Sobre Mim</router-link>

        <router-link class="navbar-item" to="/skills">Skills</router-link>

        <a class="navbar-item" href=""> Projetos </a>

        <router-link class="navbar-item" to="/contact">Contato</router-link>

        <a class="navbar-item" href="https://github.com/arthurdomingues/">
          <fa class="fa-2x" :icon="['fab', 'github']"></fa>
        </a>
        <a class="navbar-item" href="https://twitter.com/ASilvaDomingues">
          <fa class="fa-2x" :icon="['fab', 'twitter']"></fa>
        </a>
    </div>
  </div>
</nav>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>
<style scoped>
</style>