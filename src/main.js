new Vue({
    el: '#app',
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        openMenu() {
            this.isShow = true;
        },
        closeMenu(e) {
            if (e.target.classList.contains('menu')) {

                this.isShow = false
            }
        }
    }
})
