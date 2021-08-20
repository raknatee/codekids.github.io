<template lang="">
    <BaseCard  
        link_mode = 'vue'
        link_url = '/tt'
        :base_color = "colors.red_tt"
        text_color = '#ffffff'
        logo_name = 'logo_tt.png'
        header="Teacher Training"
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