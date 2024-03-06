import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: "HomePage",
    data() {
        return {
            postLists: {},
            categoryList: {},
            searchKey: '',
            loginStatus: false,
        };
    },
    computed: {
        ...mapGetters(['storageToken', 'storageUserData']),
    },
    methods: {
        getPost() {
            axios.get('http://localhost:8000/api/user/get/post')
                .then((response) => {

                    // handle success
                    for (let i = 0; i < response.data.posts.length; i++) {
                        if (response.data.posts[i].image != 'null') {
                            response.data.posts[i].image = 'http://localhost:8000/PostImage/' + response.data.posts[i].image;
                        } else {
                            response.data.posts[i].image = 'http://localhost:8000/default/default.webp';
                        }
                    }
                    this.postLists = response.data.posts
                });
        },
        getCategory() {
            axios.get('http://localhost:8000/api/user/get/category').then((response) => {
                this.categoryList = response.data.category;
            });
        },
        searchPost() {
            let search = {
                key: this.searchKey,
            };
            axios.post('http://localhost:8000/api/user/get/post/search', search).then((response) => {
                for (let i = 0; i < response.data.searchData.length; i++) {
                    if (response.data.searchData[i].image != 'null') {
                        response.data.searchData[i].image = 'http://localhost:8000/PostImage/' + response.data.searchData[i].image;
                    } else {
                        response.data.searchData[i].image = 'http://localhost:8000/default/default.webp';
                    }
                }
                this.postLists = response.data.searchData
            });
        },
        searchCategory(searchKey) {
            let search = {
                key: searchKey,
            };
            axios.post('http://localhost:8000/api/searchCategory', search).then((response) => {
                for (let i = 0; i < response.data.result.length; i++) {
                    if (response.data.result[i].image != 'null') {
                        response.data.result[i].image = 'http://localhost:8000/PostImage/' + response.data.result[i].image;
                    } else {
                        response.data.result[i].image = 'http://localhost:8000/default/default.webp';
                    }
                }
                this.postLists = response.data.result
            }).catch((e) => console.log(e));
        },
        postDetail(id) {
            this.$router.push({
                name: 'PostDetail',
                query: {
                    postId: id
                }
            });

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
        this.getPost();
        this.getCategory();
    }

};