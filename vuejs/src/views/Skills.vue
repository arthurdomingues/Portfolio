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
            <a id="nocolor" :href="card.href">
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
  <hr>
      <h1>
        Créditos pelos ícones:
        <a href="https://icon-icons.com/">https://icon-icons.com/</a>
      </h1>
</section>
</template>

<script>
export default {
  data: () => {
    return{
      dataCard: [
        {
          id:1,
          image: 'node.png',
          title: 'NodeJS',
          content: 'Runtime Javascript',
          href: 'https://www.nodejs.org/pt-br/'
        },
        {
          id:2,
          image: 'vue.png',
          title: 'VueJS',
          content: 'FrontEnd',
          href: 'https://www.vuejs.org/'
        },
        {
          id:3,
          image: 'js.png',
          title: 'Javascript',
          content: 'Linguagem de Programação',
          href: 'https://www.javascript.com/'
        },
        {
          id: 4,
          image: 'linux.png',
          title: 'Linux',
          content: 'Sistema operacional',
          href: 'https://www.kernel.org/'
        },
        {
          id: 5,
          image: 'git.png',
          title: 'Git',
          content: 'Controle de Versionamento',
          href: 'https://www.git-scm.com/'
        },
        {
          id: 6,
          image: 'postgresql.png',
          title: 'PostgreSQL',
          content: 'Database',
          href: 'https://www.postgresql.org'
        }
      ]
    }// end return
  }//end data
}
</script>

<style scoped>
.card-image{
  height: 150px;
}
.card{
  border-radius: 10px;
}
#nocolor{
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
