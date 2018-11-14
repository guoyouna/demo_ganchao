<template>
<div class="tocart">
    <i class="gc-iconclose" @click="closePop"></i>
    <div class="add_shop">
        <div class="goods-wrapper border_bottom">
            <div class="goods-img">
                <img :src="[goods.thumb]">
            </div>
                <div class="goods-info-box">
                    <div class="goods-name">{{goods.cate_name}}</div>
                    <div class="goods-code">货号: {{goods.code}}</div>
                    <div class="goods-price">
                        ￥{{goods.sales_price}}
                    </div>
                </div>
            </div>
            <div class="goods-lable flex-row border_bottom">
                <span>颜色</span>
                <span>尺码</span>
                <span>数量</span>
            </div>
            <div class="goods-selector flex-row">
                <p>
                    白色
                </p>
                <p>暂无尺码</p>
                <div>
                    <van-stepper v-model="num" integer :min="0" :max="nummax" />
                    <span>库存：{{goods.specn}}</span>
                </div>
            </div>
            <van-goods-action>
                <van-goods-action-mini-btn icon="chat" text="客服" />
                <van-goods-action-mini-btn icon="cart" text="购物车" @click="goCart" />
                <van-goods-action-big-btn text="加入购物车" @click="addTocard" />
                <van-goods-action-big-btn text="立即购买" @click="buyShop" primary />
            </van-goods-action>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        nummax: {
            type: Number,
            default: 5
        },
        goods: {
            type: Object,
            default () {
                return {
                    thumb: ''
                }
            }
        },
        id: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            num: 1
        };
    },
    computed: {

    },
    mounted() {
        console.log(this.goods)
    },

    methods: {
        closePop() {
            this.$emit('close', false)
        },
        goCart() {

        },
        addTocard() {
            this.$api.goods.addtoCart({
                    goods_id: this.$route.params.id,
                    sid: this.goods.shop_id,
                    num: this.num,
                }).then(res => {
                    console.log(res)
                }),
                this.$emit('close', false);
                this.$toast.success("加入购物车成功!");

        },
        buyShop() {

        }
    },
    watch: {}

}
</script>

<style lang="scss" scoped>
.van-button--bottom-action {
    background-color: #f7a2b3;
}

.van-button--bottom-action.van-button--primary {
    background-color: #ee5e7b;
}

.tocart {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);

    i.gc-iconclose {
        font-size: 25px;
        margin: 10px;
        color: #fff;
        background-color: #737373;
    }

    .add_shop {
        position: absolute;
        bottom: 0;
        height: 70%;
        width: 100%;
        border-top: 2px solid #ee5e7b;
        background: #f2f2f2;

        .goods-wrapper {

            background-color: #ffffff;
            padding: 10px;
            height: 122px;
            display: flex;
            align-items: center;

            .goods-img {
                width: 100px;
                height: 100px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .goods-info-box {

                margin-left: 15px;

                .goods-name {
                    color: #232326;
                    font-size: 14px;
                    line-height: 20px;
                    height: 40px;
                }

                .goods-code {
                    line-height: 16px;
                    padding-top: 10px;
                    color: #999;
                    font-size: 13px;
                }

                .goods-price {
                    padding-top: 5px;
                    color: #ee5e7b;
                    font-size: 18px;

                }
            }
        }

        .goods-lable {

            background-color: #ffffff;
            height: 40px;
            line-height: 40px;
            text-align: center;

            span {
                width: 100%;
                font-size: 14px;
            }
        }

        .goods-selector {
            padding: 10px;
            text-align: center;

            p {
                width: 30%;
                text-align: center;

            }

            div {
                text-align: right;
            }
        }
    }
}
</style>
