<template>
  <div class="app-container-login">
    
    <img class="farmapill-header" src="../assets/farmapill.png" />

    <input class="input-icon icon-user" type="text" name="usuario" placeholder="usuário" />
    <input class="input-icon icon-password" type="password" name="password" placeholder="senha" />

    
    <input id="checkid" type="checkbox" class="boxestilizado" />
    <label for="checkid" class="chk-label">Mantenha-me conectado</label>
    

    <button class="btn-base btn-entrar" @click="entrar">Entrar</button>
    <a class="esqueceu-senha" href="#">Esqueceu sua senha?</a>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    props: {
      
    },
    methods: {
      entrar() {
        this.$router.push("dashboard"); 
      }
    }
  }
</script>

<style>
.input-icon{
  border-radius: 9px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.03em;
  width: 96%;
  height: 44px;

  margin-top: 10px;
  margin-bottom: 7px;
  padding-left: 15px;

  background-position: 95%;
  background-size: 20px;
  background-repeat: no-repeat;
}

.icon-user{
  background-size: 16px;
  background-image: url('../assets/user.svg');
  background-position-x: calc(100% - 14px);
}

.icon-password{
  background-size: 24px;
  background-image: url('../assets/lock_outline.svg');
  background-position-x: calc(100% - 10px);
}

::placeholder {
  color: rgb(197, 197, 197);
}

.btn-entrar {
  background: #E53F63;
}

.farmapill-header {
  margin-top: 100px;
  margin-bottom: 40px;
}

.chk-label {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #F2F2F2;

  text-align: left;
}

.boxestilizado + label {
display: block;
margin: 0em;
cursor: pointer;
padding: 0.1em;
}

.boxestilizado {
display: none;
}

.boxestilizado + label:before {
  content: "\2714";
  border: 1px solid #ffffff;
  display: inline-block;
  width: 1em;
  height: 1em;
  margin: 15px 10px 20px 3px;
  vertical-align: middle;
  color: transparent;
}

.boxestilizado:checked + label:before {
  color: #ffffff
}

.esqueceu-senha {
  color: #ffffff;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
}
</style>