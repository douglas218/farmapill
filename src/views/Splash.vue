<template>
  <div class="app-container-login">
    
    <img class="farmapill-header" src="../assets/logo_texto.png" />

    <button class="btn-base btn-entrar" @click="entrar">Entrar</button>
    <button class="btn-base btn-criar">Criar nova conta</button>
  </div>
</template>

<script>
  export default {
    name: 'Splash',
    props: {
      
    },
    methods: {
      entrar() {
        this.$router.push("login"); 
      }
    }
  }
</script>

<style scoped>
  .farmapill-header {
    margin-top: 100px;
    margin-bottom: 40px;
  }

  .btn-entrar {
    background: #E53F63;
  }

  .btn-criar {
    background: transparent;
    border: 1px solid #E55D69;
  }

</style>