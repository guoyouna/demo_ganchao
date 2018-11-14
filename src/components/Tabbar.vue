<template>
<div id="navigator">
    <router-link to="/home">
        <i class="gc-iconhome"></i>
        <p>首页</p>
    </router-link>
    <router-link to="/cart">
        <i class="gc-iconcart"></i>
        <p>购物车</p>
    </router-link>
    <router-link to="/">
        <i class="gc-iconroundadd"></i>
        <p>入住</p>
    </router-link>
    <router-link to="/">
        <i class="gc-iconcomment"></i>
        <p>消息</p>
    </router-link>
    <router-link to="/myuser">
        <i class="gc-iconfriend"></i>
        <p>我的</p>
    </router-link>
</div>
</template>

<script>
export default {
    name: "Tabbar",
    data() {
        return {

        };
    }
};
</script>

<style lang="scss" scoped>
.nav {
    height: 100%;
    width: 100%;
}

#navigator {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;height: 58px;
    color: #6d6d6d;
    font-size: 0.27rem;
    display: flex;
    border-top: 1px solid #c8caca;
    background-color: #ffffff;

    a {
        text-align: center;
        height: 100%;
        width: 20%;
        text-decoration: none;
        color: #25282a;
        margin: 5px auto;

        i {
            font-size: 24px;
            display: block;
        }
    }
}

#navigator .router-link-exact-active {
    color: #ee5e7b !important;
}

#navigator .router-link-exact-active .icon {
    background-color: #ee5e7b !important;
}
</style>
