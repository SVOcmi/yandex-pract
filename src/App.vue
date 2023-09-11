<template>
  <div id="app">
    <Navbar />
    <div class="body-container"> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/TheNavbar'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Libre+Baskerville&display=swap');

body {
  margin: 0;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
        border-radius : 10px;
        height        : 10px;
        width         : 2px;
    }

body::-webkit-scrollbar-thumb {
    background    : #FF5C00;
    border-radius : 10px;
}

body::-webkit-scrollbar-track {
    border-radius : 10px;
    background    : #1D1C1D;
}


#app {
  background:#1D1C1D;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 600px) {
  #app {
    min-height: -webkit-fill-available;
  }
}
</style>
