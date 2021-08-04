<template lang="">
    <BaseCard  
        link_mode = 'a'
        link_url = 'http://google.com'
        :base_color = "colors.black_html"
        logo_name = 'htmlcss.png'
        header="HTML CSS"
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