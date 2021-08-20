<template>
  <div class="home">
    <header>
   <Header/>
    </header>

    <div class="main_body">
        <MarioCard/>
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
    'Header': ()=>import("@/components/tt/Header.vue"),
    'MarioCard': ()=>import("@/components/tt/tt-class-card/MarioCard.vue"),
    'Footer': ()=>import("@/components/home/Footer.vue")
  }
}
</script>

