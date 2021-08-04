module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
          @import "@/scss/base-styles.scss";
          @import "@/scss/colors.scss";
        `
            }
        }
    },
}