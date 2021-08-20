<template>
  <div class="home">
    <header>
   <Header/>
    </header>

    <div class="main_body">
      <PythonCard/>
      <HTMLCard/>
      <TTCard/>
    </div>
   <footer>
   <Footer/>
   </footer>
  </div>
</template>

<script>
export default{
  components:
  {
    'Header': ()=>import("../components/home/Header.vue"),
    'PythonCard': ()=>import("../components/home/class-card/PythonCard.vue"),
    'HTMLCard': ()=>import("../components/home/class-card/HTMLCard.vue"),
    'TTCard': ()=>import("../components/home/class-card/TTCard.vue"),
    'Footer': ()=>import("../components/home/Footer.vue")
  }
}
</script>
<style lang="scss">
.home{
  position: relative;
  min-height: 100vh;
}
header{
  @include grid-center();
  margin-top:1rem;
}
.main_body{
  display: grid;
  justify-content: center;
  grid-row-gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 5rem;
  
}
footer{
  position: absolute;
  bottom: 0;
}
</style>
