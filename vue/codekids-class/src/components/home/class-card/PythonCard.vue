<template lang="">
    <BaseCard  
        link_mode = 'a'
        link_url = 'https://1drv.ms/u/s!AtDz8RROreSxoNxdQjLpdJbA1xZXfg?e=d2zo4A'
        :base_color = "colors.blue_python"
        text_color = '#ffffff'
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