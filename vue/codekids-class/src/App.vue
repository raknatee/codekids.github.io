<template>
  <div id="app" class="html_layout">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './scss/base-styles.scss';
@import './scss/colors.scss';

* {
    box-sizing: border-box;
}

@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(3rem)
    }
    100% {
        opacity: 1;
        transform: translate(0)
    }
}
body{
  animation: moveInBottom 0.5s ease-out;
  background-color: $normal-yellow;

}

html,body,*{
  margin: 0;
  padding: 0;
}
.html_layout{
  @include base-text();
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

</style>
