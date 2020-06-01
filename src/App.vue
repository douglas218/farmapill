<template>
  <div id="app">
    <div id="mobile">
      <transition mode="out-in">
        <router-view :evtNovoRemedio.sync="evtNovoRemedio"></router-view> 
      </transition>
    </div>
  </div>
</template>

<script>

import './App.css';

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      evtNovoRemedio: 0,
    }
  },
  watch: {
    evtNovoRemedio() {
      this.$alert("Remédio cadastrado com sucesso!", '', 'success');
    }
  }
}
</script>

<style>

#app {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-top: 60px;
  display: block;
  width: 100%;
}

#mobile {
  max-width: 450px;
  margin: 0 auto;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
</style>
