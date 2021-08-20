<template>
    <BaseCard  
        link_mode = 'a'
        link_url = 'https://1drv.ms/u/s!AtDz8RROreSxoN4WwgGfCOOdMhKSDw?e=JBtXvJ'
        :base_color = "colors.normal_white"
        text_color = '#000000'
        logo_name = 'logo_mario.png'
        header="Mario"
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
        'BaseCard': () => import("@/components/home/class-card/BaseCard.vue")
    },
}
</script>