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

    <div class="navbar-end">
        <router-link class="navbar-item is-family-code has-text-weight-bold" 
        to="/">Home</router-link>

        <router-link class="navbar-item is-family-code has-text-weight-bold" 
        to="/about">Sobre Mim</router-link>

        <router-link class="navbar-item is-family-code has-text-weight-bold" 
        to="/skills">Skills</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link is-family-code has-text-weight-bold" href="https://bulma.io/documentation/overview/start/">
          Projetos
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
        <a class="navbar-item is-family-code has-text-weight-bold" href="">
            Contato
        </a>
        <a class="navbar-item" href="https://github.com/arthurdomingues/">
            <img src="../assets/logo/github2.png">
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
a{
  color: inherit;
  text-decoration: inherit;
}
</style>