import axios from 'axios';
export default {
    name: "HomePage",
    data() {
        return {
            postLists: {},
            categoryList: {}
        };
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
        }
    },
    mounted() {
        this.getPost();
        this.getCategory();
    }

};