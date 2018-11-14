<template>
<div class="logins">
    <div class="header">
        <div class="logo">敢潮</div>
        <div class="login-tab flex-row ">
            <router-link :to="{name: 'login'}">
                <div class="login">登录</div>
            </router-link>
            <router-link :to="{name: 'register'}">
                <div class="register">注册</div>
            </router-link>
        </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: '',
    props: [''],
    data() {
        return {

        };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

}
</script>

<style lang="scss" scoped>
.logins {
    width: 100%;
    height: 100%;

    .header {
        height: 130px;
        background-color: #ee5e7b;

        .logo {
            width: 100%;
            height: 90px;
            text-align: center;
            line-height: 90px;
            font-size: 28px;
            color: #fff;
        }

        .login-tab {
            width: 100%;
            height: 40px;
            text-align: center;
            line-height: 40px;

            a {
                width: 50%;
                color: #fff;
            }

            div {

                font-size: 20px;
            }

            .router-link-exact-active {
                border-bottom: 7px solid hsla(0, 0%, 100%, .5);
            }
        }
    }
}
</style>
