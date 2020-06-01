<template>
  <div class="app-container-dashboard">
    
    <header class="header">
        <span class=header-msg>Olá, <span class="header-nome">Marília</span></span>
        <img class="header-image" src="../assets/format_list_bulleted.svg" />
    </header>

    <span class="meus-remedios">
      Meus Remédios
    </span>

    <div class="lista-remedios">
      <div class="card-remedio">
        <div class="remedio-alerta">
          <img src="../assets/info.svg" alt="alert">
          <span>O remédio acaba em 2 dias.</span>
        </div>
        <button class="btn-base btn-buscar-farmacias" @click="buscarFarmacias">Buscar farmácias</button> 
        <div class="remedio-titulo">
          <span class="remedio-nome">Diane 35</span>
          <img src="../assets/ellipse.svg" alt="alert">
          <span class="remedio-dose">1 dose por dia</span>
        </div>
        <ul  class="remedio-frequencia">
          <li>Todos os dias - 20:00</li>
        </ul>        
      </div>

      <div class="card-remedio">
        <div class="remedio-titulo">
          <span class="remedio-nome">Tylenol</span>
          <img src="../assets/ellipse.svg" alt="alert">
          <span class="remedio-dose">2 doses por dia</span>
        </div>
        <ul  class="remedio-frequencia">
          <li>Terça-feira - 8:00 e 20:00</li>
          <li>Quinta-feira - 8:00 e 20:00</li>
        </ul>        
      </div>

      <div class="card-remedio">
        <div class="remedio-titulo">
          <span class="remedio-nome">Ibuprofeno</span>
          <img src="../assets/ellipse.svg" alt="alert">
          <span class="remedio-dose">1 dose por dia</span>
        </div>
        <ul  class="remedio-frequencia">
          <li>Terça-feira - 8:00 e 20:00</li>
        </ul>       
      </div>
    </div>

    <button class="btn-base btn-cadastrar-remedio" @click="cadastrarRemedio">Cadastrar Remédio</button>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    props: {
      
    },
    methods: {
      buscarFarmacias() {
        this.$router.push("farmacias"); 
      },
      cadastrarRemedio() {
        this.$router.push("remedio"); 
      }
    }
  }
</script>

<style scoped>
  .meus-remedios{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    text-align: left;
    display: block;
    margin-bottom: 27px;
  }

  .card-remedio {
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.38);
    height: fit-content;
    width: 100%;
    margin-bottom: 30px;
    padding-bottom: 10px;
    padding-top: 13px;
  }

 .lista-remedios .card-remedio:first-child {
    background-color: #692689;
  }

 .lista-remedios .card-remedio:nth-child(2n) {
    background-color: #4C2689;
  }

  .lista-remedios .card-remedio:nth-child(3n) {
    background-color: #262A89;
  }

  .remedio-alerta {
    display: flex;
    flex-direction: row;
    align-items:center;
    margin: 0 15px 15px 15px;
  }

  .remedio-alerta img {
    size: 20px;
  }

  .remedio-alerta span {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #FFFEFE; 
    margin-left: 15px;
  }

  .remedio-titulo {
    text-align: left;
    padding-left: 15px;
    padding-bottom: 8px;
  }

  .remedio-titulo img {
    margin-left: 9px;
    margin-right: 7px;
  }

  .remedio-nome {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #FFFEFE;
  }
  
  .remedio-dose {
    font-style: normal;
    font-weight: lighter;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #FFFEFE;
  }

  .remedio-frequencia {
    font-style: normal;
    font-weight: lighter;
    font-size: 12px;
    line-height: 16px;
    text-align: left;
    letter-spacing: 0.03em;
    color: #FFFEFE;
    margin-left: 15px;
  }

  .remedio-frequencia li {
    margin-bottom: 6px;
  }

  .btn-buscar-farmacias {
    background: #E53F63;
    width: 60%; 
    font-size: 14px;
    line-height: 16px;
    height: 31px;
    letter-spacing: 0.055em;
    display: block;
    margin-left: 15px;
    margin-bottom: 25px;
    background-image: url('../assets/pill.svg');
    background-position: 9px 5px;
    background-repeat: no-repeat;
    padding: 0 0 0 20px;
    border-radius: 6.30566px;
  }
  
  .btn-cadastrar-remedio {
    background: #E53F63;
    width: 75%; 
    font-size: 18px;
    line-height: 21px;
    height: 46px;
  }

</style>