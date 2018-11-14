<template>
<div class="home">
    <div class="home_header">
        <router-link to="/home/selectcity">
            <button class="address">
                <span>福州</span>
                <i class="gc-iconunfold"></i>
            </button>
        </router-link>
        <div class="header-center">
            <span class="pink">敢潮</span>
            <i class="bg">好货</i>
        </div>
        <div class="search">
            <i class="gc-iconsearch"></i>
            <i class="gc-iconscan"></i>
        </div>
    </div>
    <div class="home_content content">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in systemhome.slider" :key="index">
                <img :src="image.img" />
            </van-swipe-item>
        </van-swipe>
        <div class="notice">
            <i class="gc-iconnotificationfill"></i>

            <van-swipe :autoplay="3000" vertical :width="300">
                <van-swipe-item v-for="(notices,index) in systemhome.notices" :key="index">
                    <span>{{notices.type}}</span>
                    <span>{{notices.title}}</span>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="flex-row">
            <div class="flexbox-item">
                <div class="img img-circle"></div>
                <div class="icon-des">商圈</div>
            </div>
            <div class="flexbox-item">
                <div class="img img-product"></div>
                <div class="icon-des">新品</div>
            </div>
            <div class="flexbox-item">
                <div class="img img-hot"></div>
                <p class="icon-des">爆款</p>
            </div>
            <div class="flexbox-item">
                <div class="img img-wh"></div>
                <p class="icon-des">尾货</p>
            </div>
        </div>
        <div class="circle ">
            <div class="flex-row my_circle">
                <div>
                    <span>我的<span class="pink">商圈</span></span>
                    <span class="fs12 fc-9">你收藏过的商品资源</span>
                </div>
                <div>
                    <span>全部商圈</span>
                    <i class="gc-iconright"></i>
                </div>
            </div>
            <div class="flex-row">
                <div class="box-item" v-for="(area,index) in systemhome.area" :key="index">
                    <img :src="[area.cover]">
                    <p class="box-item-name fs12">
                        {{area.name}}
                    </p>
                </div>
            </div>
        </div>
        <div class="home_banner">
            <div class="banner_img" v-for="(banner,index) in systemhome.banner" :key="index">
                <img :src="[banner.img]"/>
            </div>
                <div class="goods-item flex-row">
                    <div class="goods-item-inner" v-for="(goods,index) in systemhome.goods" :key="index">
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
                </div>
            </div>
            <div class="home_shop">
                <div class="my_shop">
                    <span>旺铺<span class="pink">推荐</span></span>
                    <span class="fs12 fc-9">为您定制专业的货源</span>
                </div>
                <div class="shop_item" v-for="(shop,index) in systemhome.shop" :key="index">
                    <div class="item_top flex-row">
                        <div class="item_logo">
                            <img :src="[shop.logo]"/>
                    </div>
                            <div class="item_name">
                                <div class="item_title">
                                    <span>{{shop.name}}</span>
                                </div>
                                <div class="item_lable fc-9 fs12">
                                    <span><i class="gc-icontimefill"></i>1年</span>
                                    <span><i class="gc-iconsquarecheckfill"></i>身份认证 </span>
                                    <span><i class="gc-iconsquarecheckfill"></i>工商认证</span>
                                </div>
                            </div>
                            <div>
                                <router-link :to="{name:'shopsHome',params: {sid: shop.sid}}">
                                    <van-button plain type="primary">进店</van-button>
                                </router-link>
                            </div>
                        </div>
                        <div class="item_content flex-row">
                            <div class="item-li" v-for="(goods,index) in shop.goods" :key="index">
                                <div class="item-li-img">
                                    <img :src="[goods.thumb]">
                                    </div>
                                    <div class="item-li-info">
                                        <span class="price">¥{{goods.sales_price}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="item-review fc-9 ">
                                <i class="gc-iconlocationfill"></i>
                                <span>{{shop.addr}}</span>
                            </div>
                            <div class="item-review fc-9 ">
                                <i class="gc-iconattention"></i>
                                <span>{{shop.views}}人</span>
                            </div>
                        </div>
                    </div>
                </div>
                <tab-bar></tab-bar>
            </div>
</template>

<script>
import TabBar from "@/components/Tabbar";
// import SelectCity from "./activies/selectcity";

export default {
    name: "",
    props: [""],
    data() {
        return {
            systemhome: {}
        };
    },

    components: {
        TabBar
    },

    computed: {},

    beforeMount() {},

    mounted() {
        this.getHome();
    },

    methods: {
        onChange(index) {
            this.current = index;
        },
        getHome() {
            var vm = this;
            this.$api.system.systemGethome().then(res => {
                vm.systemhome = res;
                console.log(vm.systemhome);
            });
        }
    },
    watch: {}
};
</script>

<style lang="scss">
$border-bottom: 1px solid #e3e3e3;

.van-button--plain.van-button--primary {
    width: 60px;
    height: 30px;
    line-height: 30px;
    background: #fff;
    border-color: #2373cf;
    color: #2373cf;
    outline: none;
}

.van-notice-bar {
    background-color: #ffffff;
}

.home {
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;

    .home_header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 8;
        width: 100%;
        height: 52px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #c0c0c0;

        .address {
            width: 60px;
            height: 26px;
            line-height: 26px;
            padding: 0 8px;
            background: #e6e6e6;
            color: #4d4d4d;
            border-radius: 12px;
            outline: none;
            border: none;
            box-sizing: border-box;
        }

        .header-center {

            span,
            i {
                font-size: 18px;
                padding: 2px 5px;
            }

            .bg {
                background-color: #ee5e7b;
                color: #ffffff;
                border-radius: 10px 0;
            }

            color: red;
        }

        .search {
            i {
                font-size: 20px;
                color: #4d4d4d;
                margin: 5px;
            }
        }
    }

    .home_content {
        .notice {
            background-color: #ffffff;
            border-bottom: $border-bottom;
            height: 30px;
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            line-height: 30px;

            i {
                line-height: 30px;
                font-size: 16px;
                color: #ee5e7b;
            }

            .van-swipe__indicators--vertical {
                display: none !important;
            }

            .van-swipe-item {
                margin-left: 10px;
            }
        }

        .flexbox-item {
            width: 25%;
            padding: 10px 0;
            border-bottom: $border-bottom;
            background-color: #ffffff;

            .img {
                width: 30px;
                height: 30px;
                border-radius: 10px;
                margin: auto;
            }

            .img-circle {
                background-color: #ee5e7b;
            }

            .img-product {
                background-color: #6fc7fa;
            }

            .img-hot {
                background-color: #fecb5f;
            }

            .img-wh {
                background-color: #00d2bf;
            }

            .icon-des {
                text-align: center;
                font-size: 14px;
                color: #666;
            }
        }

        .circle {
            width: 100%;
            box-sizing: border-box;
            background-color: #ffffff;
            margin: 10px auto;
            padding-bottom: 30px;

            .my_circle {
                height: 38px;
                line-height: 38px;
                padding: 0 10px;
                border-bottom: $border-bottom;
            }

            i {
                line-height: 38px;
                display: inline;
            }

            .box-item {
                width: 33.3%;
                padding: 5px;
                margin: 5px;

                .box-item-name {
                    text-align: center;
                    height: 20px;
                    line-height: 20px;
                    color: #666;
                    overflow: hidden;
                }
            }

            img {
                border-radius: 10px;
            }
        }

        .home_banner {
            .banner_img {
                margin-bottom: 10px;
            }

            .goods-item {
                display: flex;
                flex-wrap: wrap;

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
                }
            }
        }

        .home_shop {
            margin: 10px 0;

            .my_shop {
                height: 38px;
                line-height: 38px;
                border-bottom: $border-bottom;
                padding: 0 10px;
                background-color: #ffffff;

            }

            .shop_item {
                padding: 15px;
                margin-top: 10px;
                border: $border-bottom;
                background-color: #ffffff;

                .item_top {
                    .item_name {
                        flex: 1;
                    }

                    .item_title {
                        span {
                            font-size: 16px;
                        }
                    }
                }

                .item_logo {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;

                    img {
                        border-radius: 50%;
                    }
                }

                .item_content {
                    padding: 5px 10px;

                    .item-li {
                        width: 30%;
                        position: relative;
                        box-sizing: border-box;

                        img {
                            border-radius: 5px;
                        }

                        .item-li-info {
                            position: absolute;
                            bottom: 0;
                            width: 89%;
                            padding: 0 5px;
                            font-weight: 300;
                            background: rgba(0, 0, 0, 0.7);
                            height: 25px;
                            line-height: 25px;
                            border-radius: 0 0 5px 5px;
                            color: #fff;
                        }
                    }
                }

                .item-review {
                    margin: 5px;

                    span {
                        font-size: 14px;
                    }

                    i {
                        font-size: 16px;
                    }
                }
            }

            i {
                color: #87c6d4;
            }
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
