<template>
<div class="list">
    <nav-bar :title="navbar.title" :navicon-name="navbar.naviconName"></nav-bar>
    <van-tabs v-model="active">
        <van-tab title="全部" class="over_flow">
            <div class="over_flow">
                <goods-list :item="item" v-for="(item,index) in orderlist" :key="index"></goods-list>
            </div>全部 1
        </van-tab>
        <van-tab title="待受理">
            <goods-list :item="item" v-for="(item,index) in orderlist" :key="index" v-if="item.status===0"></goods-list>
            <!-- v-if="goods.status_name===1"/ -->
        </van-tab>
        <van-tab title="已受理">
            <goods-list :item="item" v-for="(item,index) in orderlist" :key="index" v-if="item.status===3"></goods-list>
        </van-tab>
        <van-tab title="已确认">
            <goods-list :item="item" v-for="(item,index) in orderlist" :key="index" v-if="item.status===5"></goods-list>
        </van-tab>
    </van-tabs>

</div>
</template>

<script>
import GoodsList from "@/components/goodslist";
import NavBar from "@/components/navbar";

export default {
    data() {
        return {
            active: 4,
            orderlist: {},
            navbar: {
                title: '我的订单',
                naviconName: 'gc-iconsearch'
            },
        };
    },
    mounted() {
        this.getorderList();
    },
    methods: {
        getorderList() {
            var vm = this;
            this.$api.order.orderGetList().then(res => {
                vm.orderlist = res.list;
                // console.log(JSON.stringify(res.list));
                console.log(res.list);
            });
        }
    },
    components: {
        GoodsList,
        NavBar
    }
};
</script>

<style lang="scss" scoped>
.over_flow {
    width: 100%;
    height: 600px;
    overflow: auto;
}

.van-tabs.van-tabs--line {
    margin-top: 51px;
}

.van-tabs__content {
    overflow: auto;
}

.list {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f3f5f7;

    .list_header {

        width: 100%;
        height: 48px;
        background-color: #949494;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ffffff;
        padding: 0 10px;
        box-sizing: border-box;

        span,
        i {
            font-size: 16px;
        }

    }
}
</style>
