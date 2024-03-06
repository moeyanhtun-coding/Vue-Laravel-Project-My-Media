import axios from 'axios';

export default {
    name: "PostDetail",
    data() {
        return {
            postId: this.$route.query.postId,
            post: {}
        }
    },
    methods: {
        postDetail() {
            let postId = {
                key: this.postId,
            };

            axios.post('http://localhost:8000/api/user/get/post/detail', postId).then((response) => {
                if (response.data.result.image != "null") {
                    response.data.result.image = 'http://localhost:8000/PostImage/' + response.data.result.image;
                } else if (response.data.result.image == "null") {
                    response.data.result.image = 'http://localhost:8000/default/default.webp';

                }
                this.post = response.data.result;
            });
        },
        back() {
            history.back()
        },
        homePage() {
            this.$router.push({
                name: 'home',
            })
        },
        loginPage() {
            this.$router.push({
                name: 'LoginPage'
            })
        }

    },
    mounted() {
        this.postDetail()
    }
}