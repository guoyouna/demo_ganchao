<template>
<div class="shops-home">
    <div class="shops-header flex-row pd-10">
        <div class="back" @click="goreturns">
            <i class="gc-iconback"></i>
        </div>
        <div class="more">
            <i class="gc-iconmore"></i>
        </div>
    </div>
    <div class="shop-content">
        <div class="shop-info">
            <div class="shop-info-img">
                <img :src="[shops.bg]">
            </div>
                <div class="shops-info-inner">
                    <div class="shops-info-inner__top flex-row border_bottom">
                        <div class="flex">
                            <div class="shops-logo">
                                <img :src="[shops.logo]" alt="logo">
                        </div>
                                <div>
                                    <div class="shops-name">
                                        <span>{{shops.name}}</span>
                                        <span class="badge">一年店</span>
                                    </div>
                                    <div class="shops-detail">
                                        <span>查看店铺详情</span>
                                        <i class="gc-iconright"></i>
                                        <i class="gc-iconright"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="shops-follow">
                                <i class="gc-iconlike"></i>
                                <span >收藏</span>
                            </div>
                        </div>
                        <div class="shops-info-inner__count flex-around">
                            <div class="count-item">
                                <p>{{shops.sales}}</p>
                                <p>出货量</p>
                            </div>
                            <div class="count-item">
                                <p>{{shops.factorys}}</p>
                                <p>供应商</p>
                            </div>
                            <div class="count-item">
                                <p>{{shops.views}}</p>
                                <p>客流量</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <van-tabs v-model="active">
                        <van-tab>
                            <div slot="title">
                                <p>{{shops.goods_all}}</p>
                                <p>全部</p>
                            </div>
                             <div class="flex-wrap" >
                              <good-item :goods="goods" v-for="(goods,index) in goods.list" :key="index"></good-item>
                            </div>
                        </van-tab>
                        <van-tab>
                            <div slot="title">
                                <p>{{shops.goods_new}}</p>
                                <p>新品</p>
                            </div>
                            <div class="flex-wrap">
                              <good-item :goods="goods" v-for="(goods,index) in goods.list" :key="index" v-if="goods.is_new===1"></good-item>
                            </div>
                        </van-tab>
                        <van-tab>
                            <div slot="title">
                                <p>{{shops.goods_hot}}</p>
                                <p>爆款</p>
                            </div>
                            <div class="flex-wrap">
                              <good-item :goods="goods" v-for="(goods,index) in goods.list" :key="index" v-if="goods.is_hot===1"></good-item>
                            </div>
                        </van-tab>
                        <van-tab>
                            <div slot="title">
                                <p>{{shops.goods_clean}}</p>
                                <p>尾货街</p>
                            </div>
                            <div class="flex-wrap">
                              <good-item :goods="goods" v-for="(goods,index) in goods.list" :key="index" v-if="goods.is_clean===1"></good-item>
                            </div>
                        </van-tab>
                        <van-tab>
                            <div slot="title">
                                <i class="gc-iconcascades"></i>
                                <p>采购模式</p>
                            </div>
                            采购模式
                        </van-tab>
                    </van-tabs>
                </div>
            </div>
            <div class="shops-footer flex-around border_top">
                <div class="shops-footer-add pink">
                    <i class="gc-iconadd"></i>
                    <span>加为供应商</span>
                </div>
                <div class="shops-footer-intr">
                    <i class="gc-iconsort"></i>
                    <span>店铺详情</span>
                </div>
                <div class="shops-footer-cart">
                    <i class="gc-iconcart"></i>
                    <span>购物车</span>
                </div>
            </div>
        </div>
</template>

<script>
import GoodItem from '@/components/goodsitem'
export default {
    name: "",
    props: {
        sid: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            active: 5,
            shops: {},
            goods:{}
        };
    },

    components: {
      GoodItem
    },

    computed: {},

    beforeMount() {},

    mounted() {
        this.$api.shop
            .getshopDetail({
                sid: this.sid
            })
            .then(res => {
                this.shops = res;
                console.log(res);
            });
            this.$api.goods.getList({
                sid: this.sid
            }).then(res=>{
              this.goods = res;
                console.log(res);

            })
    },

    methods: {
      goreturns(){
        this.$router.go(-1)
      }
    },

    watch: {}
};
</script>

<style lang="scss">
.van-tabs--line .van-tabs__wrap {
    height: 50px;

}

.van-tabs--line {
    padding-top: 50px;
}

.van-tab {
    margin: 2px 6px;
    line-height: 20px;
    padding: 0;
    box-sizing: border-box;
}

.van-tab--active {
    color: #ee5e7b;
}

.van-tabs__line {
    background-color: #ee5e7b;
    width: 20% !important
}

.van-tabs__wrap--scrollable .van-tab {
    flex: 0 0 17%;
}
.shops-home {
    width: 100%;
    height: 100%;

    .shops-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        height: 52px;
        box-sizing: border-box;
        padding: 0 20px;

        i {
            font-size: 25px;
            color: #fff;
            background-color: rgb(124, 119, 119);
            border-radius: 50%;
            padding: 5px;
        }
    }

    .shop-content {
    position: absolute;
    height: 90%;
    width: 100%;
    overflow: scroll;
        .shop-info {
            width: 100%;
            height: 190px;
            position: relative;
            top: 0;

            .shop-info-img {
                height: 190px;
                background-color: #dddddd;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
          

            .shops-info-inner {
                position: absolute;
                width: 100%;
                top: 0;
                left: 0;
                padding: 55px 20px 15px;
                box-sizing: border-box;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.5);
                height: 100%;

                .shops-info-inner__top {
                    padding: 15px 0;

                    .shops-logo {
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;

                        img {
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }

                    .shops-name {
                        span {
                            font-size: 15px;
                        }

                        .badge {
                            font-size: 12px;
                            background: #ee5e7b;
                            color: #fff;
                            font-size: 12px;
                            height: 16px;
                            line-height: 16px;
                            border-radius: 8px;
                            padding: 0 6px;
                        }
                    }

                    .shops-detail {
                        font-size: 12px;
                        margin: 5px 0;
                    }

                    .shops-follow {
                        height: 26px;
                        line-height: 26px;
                        color: #fff;
                        font-size: 12px;
                        text-align: center;
                        background: #ee5e7b;
                        background: -webkit-linear-gradient(left top, #ee5e7b, #f38ca1);
                        border-radius: 15px;
                        padding: 0 8px;
                    }
                }

                .shops-info-inner__count {
                    margin:10px 5px;
                    text-align: center;
                }
            }
        }

    }

    .shops-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        height: 52px;
        background-color: #ffffff;

        i,
        span {
            height: 52px;

            text-align: center;
            line-height: 52px;
        }

        i {
            font-size: 20px;
        }
    }
}
</style>
