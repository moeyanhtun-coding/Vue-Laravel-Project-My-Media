import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: "LoginPage",
    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            validation: false
        }
    },
    computed: {
        ...mapGetters(['storageToken', 'storageUserData']),
    },
    methods: {
        homePage() {
            this.$router.push({
                name: "home",
            });
        },
        login() {
            axios.post('http://localhost:8000/api/user/login', this.userData).then((response) => {
                if (response.data.token == null) {
                    this.validation = true
                } else if (response.data.token != null) {

                    this.$store.dispatch('setToken', response.data.token);
                    this.$store.dispatch('setUserData', response.data.user);
                    this.homePage()
                }
            }).catch((e) => console.log(e));


        },

    },
};