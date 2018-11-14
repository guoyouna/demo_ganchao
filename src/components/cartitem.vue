<template>
<div class="shop-item">
    <div class="cart-item flex">
        <label>
            <input type="checkbox" value="产品" @click="checked" v-model="checked">
          </label>

        <div class="goods-img">
            <img :src="[goods.thumb]">
          </div>
            <div class="goods-content">
                <div class="item-name">{{goods.name}}</div>
                <div class="item-code">货号: {{goods.code}}</div>
                <div class="item-price">￥{{goods.sales_price}}</div>
            </div>
        </div>
        <div class="cart-item-spec flex-around">
            <div class="item-spec-price">￥{{goods.sales_price}}</div>
            <div>
                <p>库存：{{goods.specn}}</p>
                <van-stepper v-model="num" integer :min="0" :max="parseInt ([goods.specn])" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        goods :{
            type:Object,
            default:{
                img:'http://res.xiahe.me/public/uploads/user/20180526/FkKOBHdPLw7IDHmdvtjjsg2of67N.jpg-goods.thumb',
                name:'酷妞族',
                price:48,
                code:2046,
                spec:10
            }
        },
       
    },
    data() {
        return {
            num:'1',
            checked:false
        };
    },

    components: {},

    computed: {},

    mounted() {
      
    },

    methods: {  
        checked(){
            this.checked = true;
        }},

}
</script>

<style lang="scss" scoped>
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
            margin: 5px;
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
</style>
