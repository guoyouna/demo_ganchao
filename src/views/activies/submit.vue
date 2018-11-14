<template>
<div>
    <nav-bar :title="navbar.title" :navicon-name="navbar.naviconName"></nav-bar>

</div>
</template>

<script>
import NavBar from "@/components/navbar";

export default {
    name: 'sub',
    data() {
        return {
            navbar: {
                title: '填写订单',
                naviconName: ''
            },
            goods:{}
        };
    },

    components: {
        NavBar
    },

    computed: {},

    beforeMount() {},

    mounted() {
        this.getParams();
        this.$api.order.ordersubmit(this.goods).then(res=>{
            console.log(res)
        })
    },

    methods: {
        getParams () {
        // 取到路由带过来的参数 
        let routerParams = this.$route.params.goods
        // 将数据放在当前组件的数据内
        this.goods = routerParams;
        console.log(this.goods);
      }

    },

    watch: {
        '$route': 'getParams'

    }

}
</script>

<style lang='scss' scoped>

</style>
