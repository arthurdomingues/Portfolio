<template>
  <section class="section">
    <br>
    <div class="container">
      <div class="column has-text-centered">
        <h1 class="title">Projetos</h1>
      </div>
      <div v-for="project in projects" :key="project.id" class="columns">
        <div class="column is-6">
          <a :href="project.link">
            <div class="image">
              <img class="img" :src="require('@/assets/images/Projects/'+project.image)">
              <div class="overlay overlay--primary">
                <fa class="fa-4x" :icon="['fab', 'github']"></fa>
                <p>Ver no Github</p>
              </div>
            </div>
          </a>
        </div>
        <div id="center" class="column is-6">
          <h1 class="is-size-4
            has-text-centered
            has-text-weight-bold">{{project.name}}</h1>
          <h3 class="is-size-5
          has-text-justified
          has-text-weight-medium">{{project.description}}</h3>
          <br>
          <ul id="list">
            <li v-for="technology in project.technologies" :key="technology.name">
              {{technology.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      projects:[
        {
          id: 1,
          name: 'Meu Site',
          link: 'https://github.com/arthurdomingues/Portfolio',
          description: ` Este site é uma simples apresentação minha e
          mostro as tecnologias que venho usando. Possui uma área de contato
          que pode ser gerenciada pela área administrativa(não mostrada),
          onde é possível arquivar e deletar as mensagens.`,
          image: 'site.jpg',
          technologies: [
            {name: 'Nodejs'},
            {name: 'VueJS'},
            {name: 'Bulma CSS'},
            {name: 'PostgreSQL'},
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 2%;
}
a{
  color: white;
}
p{
  font-size: 1.25em;
}
ul#list  li{
  display: inline;
  padding-left: 3%;
  font-weight: bold;
  list-style-type: circle;
}
#center{
  margin: 1%;
}
.image {
    position: relative;
}
.img {
    display: block;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.25s;
}
.overlay--primary {
    background: rgba(0, 0, 0, 0.7);
}
.overlay > * {
    transform: translateY(20px);
    transition: transform 0.25s;
}
.overlay:hover {
    opacity: 1;
}
.overlay:hover > * {
    transform: translateY(0);
}

</style>
