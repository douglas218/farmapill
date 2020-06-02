<template>
  <div class="app-container-dashboard">
    <div class="al-left">

      <header class="header">
        <img class="header-image header-voltar" src="../assets/arrow-left.svg" @click="voltar" />
        <h1 class=header-msg>Cadastrar remédio</h1>
        <img class="header-image hidden" src="../assets/format_list_bulleted.svg" />
      </header>

      <label for="nomeRemedio" class="remedio-label">Nome do remédio</label> <br/>
      <input type="text" class="nome-remedio" id="nomeRemedio" name="nomeRemedio" value="Tylenol">

      <label for="qtdTotal" class="remedio-label">Quantidade total de comprimidos</label> <br/>
      <input type="number" name="qtdTotal" class="numeric-input" value="30">
      <br/>

      <label for="qtdDia" class="remedio-label">Quantidade de comprimidos por dia</label> <br/>
      <input type="number" name="qtdDia" class="numeric-input" value="2">
      <br/>

      <label for="" class="remedio-label">Frequência durante a semana</label> <br/>
      <div class="dias-semana">
        <div>
          <input id="segunda_feira" type="checkbox" class="boxestilizado box-red" />
          <label for="segunda_feira" class="chk-label">Segunda-feira</label>

          <input id="quarte_feira" type="checkbox" class="boxestilizado box-red" />
          <label for="quarte_feira" class="chk-label">Quarta-feira</label>

          <input id="sexta_feira" type="checkbox" class="boxestilizado box-red" />
          <label for="sexta_feira" class="chk-label">Sexta-feira</label>

          <input id="domingo" type="checkbox" class="boxestilizado box-red" />
          <label for="domingo" class="chk-label">Domingo</label>
        </div>
        <div>
          <input id="terca_feira" type="checkbox" class="boxestilizado box-red" checked />
          <label for="terca_feira" class="chk-label">Terça-feira</label>

          <input id="quinta_feira" type="checkbox" class="boxestilizado box-red" checked />
          <label for="quinta_feira" class="chk-label">Quinta-feira</label>

          <input id="sabado" type="checkbox" class="boxestilizado box-red" />
          <label for="sabado" class="chk-label">Sábado</label>
        </div>
      </div>

      <div class="data-e-lembrete">
        <div>
          <label for="data_inicio" class="remedio-label">Data de início</label> <br/>
          <input id="data_inicio" type="text" value="30/05/2020">
        </div>
        <div>
          <label for="" class="remedio-label">Hora do lembrete</label> <br/>
          <input id="hora_lembete" type="text" value="08:00">
        </div>
      </div>

      <div class="div-lembrete-comprar" >
        <label for="lembrete-comprar" class="remedio-label">Lembrete para comprar</label> <br/>
        <input id="lembrete-comprar" type="text" value="2 dias antes - 09:00">
      </div>
    </div>    

    <button class="btn-base btn-salvar" @click="cadastrar">Cadastrar</button>
  </div>
</template>

<script>
  export default {
    name: 'Splash',
    props: ["evtNovoRemedio"],
    methods: {
      voltar() {
        this.$router.back();
      },
      cadastrar() {
        this.voltar();
        this.$emit("update:evtNovoRemedio", this.evtNovoRemedio+1);
      }
    }
  }
</script>

<style scoped>
  .al-left{
    text-align: left;
  }

  .btn-salvar {
    background: #E53F63;
    width: 40%;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.03em;
    margin-top: 30px;
  }

  .remedio-label {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #FFFFFF;
    margin-bottom: 34px;
  }

  .nome-remedio, .numeric-input {
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #E53F63;
    outline: none;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    padding-left: 10px;
    margin-top: 15px;
  }

  .nome-remedio {
    width: 100%;
  }
  .numeric-input {
    width: 10%;
  }

  .dias-semana {
    display: flex;
    justify-content: space-between;
    margin-top: 10px
  }

  .box-red + label:before {
    border: 1px solid #E53F63;
    margin: 5px 9px 9px 0px;
  }

  .data-e-lembrete{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  #data_inicio, #hora_lembete, #lembrete-comprar {
    max-width: 90px;
    margin-bottom: 20px;
  
    background-color: transparent;
    border: none;
    /* border-bottom: 1px solid #E53F63; */
    outline: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

    padding-left: 25px;
    margin-top: 15px; 
  }
  #data_inicio {
    background: url('../assets/calendar.svg') no-repeat;
  }
  #hora_lembete {
    background: url('../assets/clock.svg') no-repeat;
  }

  #lembrete-comprar {
    background: url('../assets/bell.svg') no-repeat;
    max-width: 100%;
  }

  .div-lembrete-comprar {
    margin-top: 30px;
  }
</style>