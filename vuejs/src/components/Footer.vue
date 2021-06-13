<template>
<div class="social">
  <a class="button is-large is-twitter is-inverted">
    <span class="icon is-medium">
      <fa :icon="['fab', 'twitter']"></fa>
    </span>
  </a>
  <a class="button is-large is-github is-inverted">
    <span class="icon is-medium">
      <fa :icon="['fab', 'github']"></fa>
    </span>
  </a>
</div>
</template>

<script>
export default {

}
</script>

<style>
/*
.social {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 50px;
  &__item {
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: 0.2s background ease-in-out;
    @include flex-and-center;
    &:hover {
      background-color: #0000001a;
    }
  }
  @include mq($until: tablet) {
    position: static;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 20px 0 0px;
  }
}
*/

</style>