<template>
  <div id="app">
    
    <router-view/>
     <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer'
  export default{
    components: { 
      Footer
    },

  }
</script>

<style>
@import url("./assets/css/base.css"); 
@import url("./assets/SourceHanSansCN-Regular/SourceHanSansCN-Regular.css");
#app{
  min-width: 1024px;
}

.container{
  width:9.126rem;
  min-width: 1024px;
  height:100%;
  margin:0 auto;
  padding:0 10px;
}
</style>
