<template>
<div class="detail">
    <van-popup v-model="show" position="bottom" :overlay="false">
        <to-cart @close="close" :goods="goods" :nummax="nummax"></to-cart>
    </van-popup>
    <nav-bar :title="navbar.title" :navicon-name="navbar.naviconName"></nav-bar>
    <div class="goods_contents">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in goods.imgs" :key="index">
                <img :src="[image.url]" />
            </van-swipe-item>
        </van-swipe>
        <div class="goods_info">
            <div class="flex-row pd-10">
                <span class="goods-name">{{goods.title}}</span>
                <div class="goods-collect">
                    <i class="gc-iconlike"></i>
                    <span>收藏</span>
                </div>
            </div>
            <div class="flex-row goods-code fc-9 pd-10 border_bottom">
                <span>编号{{goods.code}}</span>
                <span>库存 ：{{goods.specn}}</span>
            </div>
            <div class="goods-price flex-row border_bottom pd-10">
                <span class="buy-price">￥{{goods.sales_price}}</span>
                <i class="gc-iconforward"></i>
            </div>
        </div>
        <div class="goods-specn flex-row pd-10 border_top border_bottom">
            <div class="fc-9 specn-num">
                <div>共<span>{{goods.specn}}</span>种规格</div>
                <div>已选<span>{{goods.specn}}</span>种</div>
            </div>
            <div class="btn-specn " @click="choose_spencn" :id="this.id">
                <i class="gc-iconcart"></i>
                <span>选规格</span>
            </div>
        </div>
        <router-link :to="{name:'shopsHome',params: {sid: goods.shop_id}}">
            <div class="enter-shop">进店逛逛</div>
        </router-link>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/navbar";
import ToCart from "@/views/activies/tocart"
export default {
    name: 'detail',
    props: {
        id: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            navbar: {
                title: '商品详情',
                naviconName: 'gc-iconcart'

            },
            show: false,
            goods: {},
            nummax:5
        };
    },

    components: {
        NavBar,
        ToCart
    },

    computed: {},

    beforeMount() {},

    mounted() {
        this.$api.goods.getDetail({
            goods_id: this.id
        }).then(res => {
            this.goods = res
            this.nummax = res.specn
            this.goods_id = this.id
            console.log(this.goods);
        })
console.log(this.id);
    },

    methods: {
       
        choose_spencn() {
            params: {
                goods_id:this.goods_id
            }
            this.show = true;
        },
        close(show) {
            this.show = show;
        }
    }
}
</script>

<style lang="scss" scoped>
.van-popup {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.detail {
    height: 100%;
    width: 100%;
    background-color: #f3f5f7;

    .goods_contents {
        position: relative;
        margin-top: 52px;
        overflow: auto;
        width: 100%;

        .goods_info {
            background-color: #fff;
            box-sizing: border-box;

            .goods-name {
                font-size: 16px;
                color: #333;
                line-height: 20px;
            }

            .goods-collect {
                top: 5px;
                height: 26px;
                line-height: 26px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                background: #ee5e7b;
                border-radius: 15px;
                padding: 0 8px;
            }

            .goods-price {

                span,
                i {
                    font-size: 20px;
                    line-height: 20px;
                }

                .buy-price {
                    color: #ee5e7b;
                }
            }

        }

        .goods-specn {
            background-color: #fff;
            margin-top: 10px;

            .specn-num {
                div {
                    padding: 2px;
                }

                span {
                    padding: 0 10px;
                    color: #ee5e7b;
                }
            }

            .btn-specn {
                width: 50%;
                padding: 15 0;
                text-align: center;
                height: 38px;
                line-height: 38px;
                background-color: #ee5e7b;
                font-size: 18px;
                color: #fff;
                border-radius: 50px;
                ;

                span,
                i {
                    font-size: 18px;
                }
            }
        }

        .enter-shop {
            margin: 15px auto;
            border-radius: 5px;
            font-size: 18px;
            width: 80%;
            height: 48px;
            line-height: 48px;
            border: 1px solid #ee5e7b;
            border-color: #ee5e7b;
            color: #ee5e7b;
            text-align: center;
        }
    }

    img {
        height: 100%;
        width: 100%;
    }
}
</style>
