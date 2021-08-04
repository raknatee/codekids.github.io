<template lang="">
    <div :style="css_color_vars">
       <div class="a_mode card" v-if="is_a_link_mode">
           <a :href="link_url" target="_blank" 
           >
               <h1 class="text_header">{{header}}</h1>
               <img class="img" :src="load_image" >
           </a>
       </div>
       <div class="vue_mode" v-if="is_vue_router_mode">
           <h1>hasnt been Implemented yet</h1>
       </div>
    </div>
</template>
<script>
export default {
  props: ["link_mode", "link_url", "base_color", "header", "logo_name"],
  computed: {
    is_a_link_mode() {
      return this.link_mode === "a";
    },
    is_vue_router_mode() {
      return this.link_mode === "vue";
    },
    load_image() {
      return require("@/assets/" + this.logo_name);
    },
    css_color_vars(){
        return {
            '--bg-color': this.base_color,
        }
    }
  },
};
</script>
<style lang="scss" scoped>
.img {
  height: 10rem;
}
.card {
  border-radius: 1rem;
  padding: 1rem 0;
  width: 50vw;
  @include base-shadow();
  transition: all;
  background-color: var(--bg-color);
  position: relative;
    &:before {
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        content: " ";
        border-radius: 1rem;
        z-index:0

    }

  &:hover {
    transform: translateY(-0.5rem) scale(1.05);

    &:before{
        background-color: rgba(0,0,0,.25);
    }
    & .img{
        animation: rotate 1s;
        z-index: 1;
    }
    & .text_header{
        z-index:1;
    }

  }
  &:active {
    transform: translateY(0.5rem) scale(1.05);
    box-shadow: 5px 5px 20px -2px rgba(0, 0, 0, 0.46);
  }
  a {
    display: grid;
    justify-items: center;
  }
}
.text_header {
  color: rgb(255, 255, 255);
  margin-bottom: 1rem;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg)
    }
    50% {
        transform: rotate(180deg)
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>