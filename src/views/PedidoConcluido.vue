<template>
  <div class="app-container-dashboard">
    
    <img class="farmapill-header" src="../assets/circle_ok.svg" />

    <h1 class="pedido-concluido">Pedido concluido</h1>

    <button class="btn-base btn-voltar" @click="voltar">Voltar ao início</button>
  </div>
</template>

<script>
  export default {
    name: 'Splash',
    props: {
      
    },
    methods: {
      voltar() {
        this.$router.push("dashboard"); 
      }
    }
  }
</script>

<style scoped>
  .farmapill-header {
    margin-top: 130px;
    margin-bottom: 40px;
  }

  .btn-voltar {
    background: #E53F63;
    width: 70%;
  }

  .pedido-concluido {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.055em;
    color: #FFFFFF;
    margin-bottom: 61px;
  }

</style>