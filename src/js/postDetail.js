import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: "PostDetail",
    data() {
        return {
            postId: this.$route.query.postId,
            post: {},
            loginStatus: false,
            viewCount: '',
        }
    },
    computed: {
        ...mapGetters(['storageToken', 'storageUserData']),
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
        },
        checkOut() {
            if (this.storageToken != null &&
                this.storageToken != undefined &&
                this.storageToken != ''
            ) {
                this.loginStatus = false;
            } else {
                this.loginStatus = true;
            }
        },
        logOut() {
            this.$store.dispatch('setToken', null);
            this.loginPage();
        }
    },
    mounted() {
        this.checkOut();
        let data = {
            user_id: this.storageUserData.id,
            post_id: this.postId,
        };
        axios.post('http://localhost:8000/api/actionLog', data).then((response) => {
            this.viewCount = response.data.viewCount.length;
            console.log(this.viewCount);
        });
        this.postDetail()
    }
}