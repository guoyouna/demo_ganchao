<template>
<div class="goods-item-inner">
    <router-link :to="{name: 'detail', params: {id: goods.goods_id}}">
        <div class="goods-item-img">
            <img :src="[goods.thumb]"/>
    </div>
            <div class="goods-item-info">
                <p class="goods-item-info__nam">{{goods.title}}</p>
                <p class="goods-item-info__price">￥{{goods.sales_price}}</p>
            </div>
    </router-link>
</div>
</template>

<script>
export default {
    name: '',
    props: {
        goods: {
            type: Object,
            return: {
                thumb: 'http://res.xiahe.me/public/uploads/user/20180608/Fk3I7Z7g_ktCHwj1P9auKThkq_ur.jpg-goods.thumb',
                title: '标题',
                sales_price: '48'
            }
        }
    },
    data() {
        return {};
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
.goods-item-inner {
    width: 48%;
    margin: 2px;
    box-sizing: border-box;
    background-color: #ffffff;

    .goods-item-info {
        padding: 10px;
        font-size: 14px;
        color: #333;
    }

    .goods-item-info__price {
        color: #ee5e7b;
        font-size: 18px;
    }

    img {
        height: 100%;
        width: 100%;
    }
}
</style>
