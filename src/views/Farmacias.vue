<template>
  <div class="app-container-dashboard">
    
   <header class="header">
       <img class="header-image header-voltar" src="../assets/arrow-left.svg" @click="voltar" />
        <span class=header-msg>Diane 35</span>
        <img class="header-image" src="../assets/format_list_bulleted.svg" />
    </header>

    <div class="farmacia-card">
      <div class="farmacia-titulo">
        <img src="../assets/pill.svg" alt="icon">
        <p class="farmacia-nome">Drogasil</p>
        <p class="farmacia-distancia">(5 km)</p>
      </div>
      <p class="farmacia-preco">R$ 23,90</p>
      <button class="btn-base btn-fazer-pedido" @click="fazerPedido">Fazer pedido</button>
    </div>

    <div class="farmacia-card">
      <div class="farmacia-titulo">
        <img src="../assets/pill.svg" alt="icon">
        <p class="farmacia-nome">Pague Menos</p>
        <p class="farmacia-distancia">(8 km)</p>
      </div>
      <p class="farmacia-preco">R$ 18,70</p>
      <button class="btn-base btn-fazer-pedido" @click="fazerPedido">Fazer pedido</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Farmacias',
    props: {
      
    },
    methods: {
      fazerPedido() {
        this.$router.push("pedido");
      },
      voltar() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .header-voltar {
    cursor: pointer;
  }
  .farmacia-card {
    font-style: normal;
    text-align: left;
    color: #FFFFFF;
  }
  .farmacia-titulo {
    display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
  }
  .farmacia-nome {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-left: 15px;
  }
  .farmacia-distancia {
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.06em;
    margin-left: 15px;
  }
  .farmacia-preco {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.045em;
    margin-left: 30px;
    margin-bottom: 20px;
  }
  .btn-fazer-pedido {
    background: #E53F63;
    width: 50%;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.055em;
    margin-left: 30px;
    margin-bottom: 44px;
  }
</style>