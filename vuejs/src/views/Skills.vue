<template>
<section class="section">
  <br>
  <div class="container">
     <div class="column has-text-centered">
       <h1 class="title">Skills</h1>
     </div>

    <div class="row columns is-multiline is-centered">
      <div v-for="card in dataCard" :key="card.id" class="column is-one-quarter">
        <div class="card large">
          <div id="animation" class="card-image">
            <a id="nocolor" :href="card.href">
              <img :src="require('@/assets/logo/Skills/'+card.image)" height="150" width="150">
            </a>
          </div>
          <div class="card-content">
            <div class="media-content">
              <h2 class="title is-4">{{card.title}}</h2>
            </div>
          <div class="content removeBlue">{{card.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
      <span>
        Créditos pelos ícones:
        <a href="https://icon-icons.com/">https://icon-icons.com/</a>
      </span>
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
p {
  overflow:hidden;
  padding: 3.5px;
}

h2 {
  overflow: hidden;
  padding: 3.5px;
}

hr {
  background-color: #363636;
  height: 5px;
}

.columns {
  margin-top: 2%;
}

.card-image{
  height: 150px;
}

.card{
  border-radius: 10px;
  background: transparent;
  box-shadow: none;
}

.card-content {
  padding-top: 3%;
}

#nocolor{
  color:inherit;
  text-decoration: inherit;
}
#animation{position:relative;top:0}
#animation:hover{
  top:-10px;
  box-shadow: 0 2px 2px #1b242f;
  transition: all .2s ease-in-out;
  }
</style>
