<template>
<section class="section">
  <div class="container">
    <div class="columns">
     <div class="column has-text-centered">
       <br>
       <h1 class="title">Skills</h1>
     </div> 
    </div>
    
    <div class="row columns is-multiline is-centered">
      <div v-for="card in dataCard" :key="card.id" class="column is-one-quarter">
        <div id="animation" class="card large">
          <div class="card-image">
            <a :href="card.href">
            <img :src="require('@/assets/logo/Skills/'+card.image)" height="150" width="150">
            </a>
          </div>
          <div class="card-content">
            <div class="media-content">
              <p class="title is-4 is-padding">{{card.title}}</p>
            </div>
          <div class="content removeBlue">{{card.content}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script>
import dataCards from './dataCards'
export default {
  data(){
    return{
      dataCard: dataCards,
    }
  }
}
</script>

<style>
.card-image{
  height: 150px;
}
a{
  color:inherit;
  text-decoration: inherit;
}
#animation{position:relative;top:0}
#animation:hover{
  top:-5px;
  box-shadow: 0 2px 2px #666;
  transition: all .2s ease-in-out;
  }
</style>