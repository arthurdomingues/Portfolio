<template>
      <section class="section">
        <br>
        <div class="container">
          <div class="column is-12">
            <h1 class="title has-text-centered section-title">Sobre Mim</h1>
          </div>
          <br>
          <div class="columns is-multiline">
              <div class="column is-6 right-image">
                <img id="eu" src="../assets/images/eu.png"/>
              </div>
            <div class="column is-6 has-vertically-aligned-content">
              <h2 class="is-larger is-size-4 has-text-left">
                <strong>
                  Olá, me chamo Arthur Silva Domingues!!
                </strong>
              </h2> <br/>
              <p class="has-text-left texto">
                Nasci em Agosto de 1997 e sou natural de São Bernardo do Campo/SP.<br>
                Meu primeiro contato com a programação foi com a linguagem C, onde tive
                uma breve introdução. Atualmente estou tentando entrar no mercado de
                trabalho onde espero trabalhar com javascript, que pode ser usado a nível
                back-end e front-end, o que é uma mão na roda para desenvolvedores.<br>
                Sou um grande entusiasta e apreciador de tecnologias software livre,
                como Linux, Projeto GNOME, Projeto KDE, Vim, etc. Fora do universo da
                tecnologia, sou um grande apreciador de música, sem restrições de estilo,
                e até fui músico por alguns anos, mas no momento me concentro na programação.
                Seja Bem Vindo(a) ao meu site, aqui você poderá ter uma amostra de alguns
                projetos simples. Todo o código fonte deste site você encontra no meu GitHub.
              </p>
              <br/>



            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#eu{
    border-radius: 100%;
    height: 399px;
}
.texto{
  font-size: 17px;
}

strong {
  color: #F4F9E9;
}

@media (max-width: 500px){
  #eu {
    height: 70%;
  }
}
</style>
