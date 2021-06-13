<template>
<section class="section">
  <br>
  <div class="container is-centered">
    <div class="column is-12">
      <h1 class="title has-text-centered section-title">Contato</h1>
    </div>

  <div class="columns">
    <div class="column is-6 has-text-left is-family-code">
      <br>
      <h1 class="has-text-weight-bold is-size-3">
        Email:
      </h1>
      <a class="is-size-4" href="mailto:arthurdomingues76@gmail.com">
        <fa :icon="['fas', 'envelope']"></fa>
        arthurdomingues76@gmail.com
      </a>
      <br>
      <br>

      <h1 class="has-text-weight-bold is-size-3">
        Github:
      </h1>
      <a class="is-size-4" href="https://github.com/arthurdomingues/">
        <fa :icon="['fab', 'github']"></fa>
        arthurdomingues
      </a>
      <br>
      <br>

      <h1 class="has-text-weight-bold is-size-3">
        Twitter:
      </h1>
      <a class="is-size-4" href="https://twitter.com/ASilvaDomingues">
        <fa :icon="['fab', 'twitter']"></fa>
        @ASilvaDomingues
      </a>
      <br>
      <br>
    </div>

    <div class="column is-6 has-text-left">
      <br>
      <div class="field">
        <div class="control has-icons-left">
          <input class="input" type="text" placeholder="Seu Nome">
          <span class="icon is-left">
            <fa :icon="['fas', 'user']"></fa>
          </span>
        </div>
      </div>

      <div class="field">
        <div class="control has-icons-left">
          <input class="input" type="email" placeholder="Seu Email">
          <span class="icon is-left">
            <fa :icon="['fas', 'envelope']"></fa>
          </span>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Sua Mensagem"></textarea>
        </div>
      </div>

      <button class="button is-dark is-outlined is-medium">Enviar</button>
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
::placeholder{
  color:gray;
  opacity: 1; 
}

</style>