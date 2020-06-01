<template>
  <div class="app-container-dashboard">
    
   <header class="header">
       <img class="header-image header-voltar" src="../assets/arrow-left.svg" @click="voltar" />
        <span class=header-msg>Pedido</span>
        <img class="header-image" src="../assets/format_list_bulleted.svg" />
    </header>

    <div class="endereco-card">
      <img class="endereco-select" src="../assets/greater.svg" alt="icon">
      <div class="endereco-titulo">
        <img src="../assets/location.svg" alt="icon">
        <p class="endereco-entrega">Endereço de entrega</p>  
        <p class="endereco-rua">R. São Paulo, 625</p>  
      </div>
    </div>

    <h2 class="text-between-lines">
      <span>Drogasil</span>
    </h2>

    <div class="remedio-quantidade">
      <p>Diane 35</p>
      <div>
        <img class="plus_minus" src="../assets/minus.svg" alt="minus" @click="quantidade > 0 ? quantidade-- : quantidade">
        <p class="quantidade">{{quantidade}}</p>
        <img class="plus_minus" src="../assets/plus.svg" alt="plus" @click="quantidade++">
      </div>
    </div>

    <h2 class="text-between-lines"> </h2>

    <div class="subtotal">
      <p>Subtotal</p>
      <p>R$ 23,90</p>
    </div>

    <div class="entrega">
      <p>Entrega</p>
      <p>R$ 8,00</p>
    </div>

    <div class="total">
      <p>Total</p>
      <p>R$ 31,90</p>
    </div>

    <div class="pagamento-card">
      <img class="pagamento-select" src="../assets/greater.svg" alt="icon">
      <div class="pagamento-titulo">
        <p class="pagamento-label">Pagamento</p>  
        <img class="pagamento-img" src="../assets/visa.svg" alt="cartao">
      </div>
    </div>

    <button class="btn-base btn-comprar" @click="comprar">Comprar</button>
  </div>
</template>

<script>
  export default {
    name: 'Farmacias',
    data() {
      return {
        quantidade: 1
      }
    },
    props: {
      
    },
    methods: {
      comprar() {
        this.$router.push("pedido-concluido");
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
  .endereco-card {
    font-style: normal;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 41px;
  }
  .endereco-select{
    float: right;
    margin-top: 10px;
    cursor: pointer;
  }
  .endereco-titulo {
    margin-bottom: 15px;
    cursor: pointer;
  }
  .endereco-titulo img {
    float: left;
  }
  .endereco-entrega {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-left: 30px;
    margin-bottom: 7px;
  }
  .endereco-rua {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 114.18%;
    margin-left: 30px;
  }
  .text-between-lines {
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #E53F63;
    line-height: 0.1em;
    margin: 10px 0 20px; 

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
  }
  .text-between-lines span { 
    background:#1C1F62;
    padding:0 10px; 
  }
  .remedio-quantidade {
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    align-items: center;
    margin: 40px 0 40px 0;
  }
  .plus_minus {
    cursor: pointer;
  }
  .quantidade {
    display: inline-block;
    padding: 0 10px 0 10px;
    vertical-align: text-top;
  }
  .subtotal, .entrega {
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 114.18%;
    color: #FFFFFF;
    margin-bottom: 8px;
  }
  .total {
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 114.18%;
    margin-top: 24px;
    margin-bottom: 35px;
  }

  .pagamento-card {
    font-style: normal;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 70px;
  }
  .pagamento-select{
    float: right;
    margin-top: 10px;
    cursor: pointer;
  }
  .pagamento-titulo {
    margin-bottom: 15px;
    cursor: pointer;
  }
  .pagamento-titulo img {
    float: left;
  }
  .pagamento-label {
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 7px;
  }

  .btn-comprar {
    background: #E53F63;
    width: 50%;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.055em;
  }
</style>