<template>
<div class="card">
    <nav-bar :title="navbar.title" :navicon-name="navbar.naviconName"></nav-bar>
    <div class="card-list content">
        <div class="shop-info border_bottom">
            <span>当前供应商</span>
            <span class="pink">{{goods.title}}搜索服饰</span>
        </div>
        <div class="shop-item">
            <div v-for="(shops,index) in goods.shops" :key="index">
                <!-- <shop-cart @shop-check="shopCheck"></shop-cart> -->
                <div v-for="(goodshop,indexs) in shops.goods" :key="indexs">
                    <div class="cart-item flex">
                        <label :for="'check' +index+'-'+indexs" class="check-label">
                            <input type="checkbox" :id="'check'+index+'-'+indexs" value="产品" name="checkboxs" v-model="goodshop.isChecked" @change="changeItem(goodshop,index,indexs)"/>
                            <span class="icon-check"></span>
                        </label>
                        <div class="goods-img">
                            <img :src="[goodshop.thumb]">
                        </div>
                            <div class="goods-content">
                                <div class="item-name">{{goodshop.name}}</div>
                                <div class="item-code">货号: {{goodshop.code}}</div>
                                <div class="item-price">￥{{goodshop.sales_price}}</div>
                            </div>
                        </div>

                        <div class="cart-item-spec flex-around">
                            <div class="item-spec-price">￥{{goodshop.list[0].num*goodshop.sales_price}}</div>
                            <div>
                                <p>库存：{{goodshop.specn}}</p>
                                <van-stepper v-model="goodshop.list[0].num" integer :min="0" :max="parseInt ([goodshop.specn])" @minus="shopsReduces(index)" @plus="shopsAdd(index)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div v-for="(shops,index) in goods.shops" :key="index">
            <cart-item :goods="goodshop" v-for="(goodshop,index) in shops.goods" :key="index"></cart-item>
        </div> -->
        </div>
        <!-- 结算栏 -->
        <div class="footer-check border_top">
            <div class="flex-row check">
                <div>
                    <label class="checkall-label">
                        <input type="checkbox" value="全选" @click="checkAll()" v-model="checkAllFlag">全选
                         <span class="icon-check"></span>
                    </label>
                </div>
                <div>
                    <p>总计：<span class="fc-pink">￥<span >{{sum}}</span></span></p>
                    <p class="fc-9">共<span>{{checkNum}}</span>种商品</p>
                </div>
                <div class="bgpink" @click="submit">下单</div>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import NavBar from "@/components/navbar";
import TabBar from "@/components/Tabbar";
import CartItem from "@/components/cartitem";

export default {
    name: 'card',
    data() {
        return {
            navbar: {
                title: '购物车',
                naviconName: ''
            },
            num: 1,
            goods: {},
            checkAllFlag: false,
            shops: [],
            goodsitem:{},
            checkShops:[]
        };
    },
    computed: {
        sum() {
            let sum = 0;
            for (var i = 0; i < this.shops.length; i++) {
                for (var j = 0; j < this.shops[i].goods.length; j++) {
                    if (this.shops[i].goods[j].isChecked) {
                        sum += parseInt(this.shops[i].goods[j].sales_price) * parseInt(this.shops[i].goods[j].list[0].num);
                    }

                }

            }
            return sum;
        },
        checkNum() {
            let num = 0;
            for (var i = 0; i < this.shops.length; i++) {
                for (var j = 0; j < this.shops[i].goods.length; j++) {
                    if (this.shops[i].goods[j].isChecked) {
                        num++;
                    }
                }
            }
            return num;
        },
        shopCheck(data){
        //    let isIndex=this.checkShops.findIndex((item)=>{
        //        return data.shopId === item.shopId
        //     })
        //     if(isIndex>-1){
        //         //tihuan
        //         this.checkShops.splice(isIndex,1,data)
        //     }else{
        //         this.checkShops.push(data)
        //     }
        //     this.checkNum=0
        //     this.sum = 0
        //     this.checkShops.forEach(item=>{
        //         this.checkNum += item.checkNums
        //         this.sum += item.checkTotals
        //     })
        }
    },
    components: {
        NavBar,
        TabBar,
        CartItem
    },
    watch: {
        goods: { // 这监听对象值的改变 和上面的不一样。
            handler(curVal, oldVal) {
                console.log(curVal);
            },
            deep: true,
        },
    },
    mounted() {
        this.$api.goods.getCart().then(res => {
            this.goods = res;
            this.shops = res.shops;
            console.log(this.shops)
        })
    },

    methods: {
        //
        changeItem(item, n, m) {
            if (item.isChecked) {
                //Vue.set( target, key, value )
                // target：要更改的数据源(可以是对象或者数组)
                // key：要更改的具体数据
                // value ：重新赋的值
                this.$set(this.goods.shops[n].goods, m, Object.assign({
                    isChecked: true,
                    ...item
                }))
            } else {
                this.$set(this.goods.shops[n].goods, m, Object.assign({
                    isChecked: false,
                    ...item
                }))
            }
        },
        shopsReduces(index) {
            this.goods.shops[index].goods[index].list[0].num--;

        },
        shopsAdd(index) {
            this.goods.shops[index].goods[index].list[0].num++;
        },
        // 全选
        checkAll() { //这里的event就是全选checkbox对象
            this.checkAllFlag = !this.checkAllFlag;
            var _this = this;
            for (var i = 0; i < this.shops.length; i++) {
                for (var j = 0; j < this.shops[i].goods.length; j++) {
                    if (this.shops[i].goods[j].isChecked) {
                        _this.$set(this.shops[i].goods[j], "isChecked", _this.checkAllFlag);
                    } else {
                        _this.$set(this.shops[i].goods[j], "isChecked", _this.checkAllFlag);
                    }
                }
            }
        },
        submit() {
            for (var i = 0; i < this.shops.length; i++) {
                for (var j = 0; j < this.shops[i].goods.length; j++) {
                    if (this.shops[i].goods[j].isChecked) {
                        this.goodsitem = this.shops[i].goods[j];
                        console.log(this.goodsitem);
                        this.$router.push({
                            name: 'submit',
                            params: {
                                goods: this.goodsitem
                            }
                        })
                    }
                }
            }
            // this.$router.push({
            //     name: 'submit',
            //     params: {
            //         goods: this.goods
            //     }
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-check {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #999999;
    margin: 10px;
    display: flex;
}

.check-label input:checked+.icon-check {
    background: #ee5e7b;
}

.checkall-label input:checked+.icon-check {
    background: #ee5e7b;
}

.card {
    height: 100%;
    width: 100%;
    background-color: #f3f5f7;

    .card-list {
        .shop-info {
            font-size: 14px;
            padding: 0 15px;
            height: 44px;
            line-height: 44px;
            background-color: #ffffff;
            margin-bottom: 15px;
        }

        .shop-item {
            width: 100%;
            padding: 2px 0;
            box-sizing: border-box;

            .cart-item {
                background-color: #ffffff;
                padding: 10px;

                .goods-img {
                    height: 90px;
                    width: 90px;
                    background-color: #e5e5e5;

                    img {
                        height: 100%;
                    }

                }

                input[type="checkbox"] {
                    -webkit-appearance: none;

                }

                .goods-content {
                    padding: 5px 10px;

                    .item-name {
                        font-size: 13px;
                        color: #666;
                        padding-right: 30px;
                    }

                    .item-code {
                        color: #999;
                        font-size: 12px;
                        padding-top: 4px;
                    }

                    .item-price {
                        font-size: 18px;
                        color: #ee5e7b;
                        padding-top: 6px;
                    }
                }

            }

            .cart-item-spec {
                margin: 10px;

                .item-spec-price {
                    font-size: 16px;
                    color: #ee5e7b;
                }
            }

        }

        .pink {
            color: #ee5e7b;
        }
    }

    .footer-check {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40px;
        margin-bottom: 58px;
        background-color: #fff;

        .check {
            width: 100%;
            height: 100%;

            div {
                text-align: center;
            }

            .bgpink {
                width: 40%;
                height: 100%;
                line-height: 40px;
                background-color: #ee5e7b;
                color: #fff;
            }

            label {
                padding-left: 10px;
            }

            input[type="checkbox"] {
                -webkit-appearance: none;
            }

            .fc-pink {
                color: #ee5e7b;

            }
        }

    }
}
</style>
