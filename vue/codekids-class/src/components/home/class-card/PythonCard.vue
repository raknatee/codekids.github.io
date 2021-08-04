<template lang="">
    <BaseCard  
        link_mode = 'a'
        link_url = 'http://google.com'
        :base_color = "colors.blue_python"
        logo_name = 'logo_python.png'
        header="Python Level 1"
         />
</template>
<script>
import colors from '@/scss/colors.scss'


export default {
    data(){
        return{
            colors
        }
    },
    components:{
        'BaseCard': () => import("./BaseCard.vue")
    },
}
</script>
<style lang="">
    
</style>