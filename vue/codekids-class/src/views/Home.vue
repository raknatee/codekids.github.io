<template>
  <div class="home">
    <header>
   <Header/>
    </header>

    <div class="main_body">
      <PythonCard/>
      <HTMLCard/>
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
    'Footer': ()=>import("../components/home/Footer.vue")
  }
}
</script>
<style lang="scss" scoped>
.home{
  position: relative;
  min-height: 100vh;
}
header{
  @include grid-center();
  margin-top:1rem;
  margin-bottom: 5rem;
}
.main_body{
  display: grid;
  justify-content: center;
  grid-row-gap: 1rem;
}
footer{
  position: absolute;
  bottom: 0;
}
</style>
