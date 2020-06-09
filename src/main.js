new Vue({
    el: '#app',
    template: '#template',
    data() {
        const now = new Date();
        const target = new Date(2020, 5, 15);
        const released = now >= target
        return {
            isShow: false,
            released,
            prodLink: released ? 'https://youtube.com/' : 'https://www.youtube.com/user/TheRhymastic'
        };
    },
    methods: {
        openMenu() {
            this.isShow = true;
        },
        closeMenu(e) {
            if (e.target.classList.contains('menu')) {
                this.isShow = false;
            }
        }
    }
})
