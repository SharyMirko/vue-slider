const app =  new Vue({
    el: '#root',
    data: {
        hover: true,
        activeIndex: 0,
        arrSlides: [
            {
                title: 'Svezia',
                media: '01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Svizzera',
                media: '02.jpg',
                text: 'Lorem ipsum.',
            },
            {
                title: 'Gran Bretagna',
                media: '03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Germania',
                media: '04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                title: 'Paradise',
                media: '05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            },
        ]
    },
    methods: {
        next(){
            if(this.activeIndex == this.arrSlides.length -1) {
                this.activeIndex = 0
            } else {
                this.activeIndex++
            }
        },
        prev(){
            if(this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length -1;
            } else {
                this.activeIndex--
            }
        },
        time(){
                intervall = setInterval(this.next, 3000)
        },
        clear(){
            clearInterval(intervall)
        }
    },
    created(){
        this.time()
    }
});
