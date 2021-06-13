<template>
<div class="icons">
  <a class="button is-twitter">
    <span class="icon">
      <fa class="fa-2x" :icon="['fab', 'twitter']"></fa>
    </span>
  </a>
  <br>
  <a class="button is-github">
    <span class="icon">
      <fa class="fa-2x" :icon="['fab', 'github']"></fa>
    </span>
  </a>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icons{
  left: 0%;
  transform: translateY(-50%);
  position: fixed;
  z-index: 100;
  bottom: 0px;
}
.icons ul{
  padding: initial;
}
.icons ul li{
  height: 40px;
  width: 40px;
  list-style-type: none;
  padding-left: 12px;
  padding-top: 6px;
  margin-top: 5px;
  color: #fff;
  background: #000;
}
</style>