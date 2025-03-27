new Vue({
    el: '#app',
    data: {
        windowWidth: window.innerWidth
    },
    computed: {
        headerClass() {
            return this.windowWidth < 780 ? 'header-mobile' : 'header-desktop';
        },
        animationStyle() {
            return this.windowWidth < 780 ? { width: '100%' } : { width: '130px' };
        },
        mainStyle() {
            return this.windowWidth < 780 ? { padding: '10px' } : { padding: '30px' };
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
});
