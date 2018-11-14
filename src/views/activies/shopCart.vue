<template>
<div>
    <div v-for="(goodshop,indexs) in shop.goods" :key="indexs">
        <div class="cart-item flex">
            <label :for="'check' +index+'-'+indexs" class="check-label">
                <input type="checkbox" :id="'check'+index+'-'+indexs" value="产品" name="checkboxs" v-model="goodshop.isChecked" @change="changeItem(goodshop,indexs)"/>
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
</template>

<script>
export default {
    name: '',
    props: {
        shop:{
            type:Object,
            default(){
                return {
                    goods:[]
                }
            }
        }
    },
    data() {
        return {

        };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        changeItem(goods,index){
            // if(){
                
            // }else{

            // }
            let checkedGoods =[]
            let checkNums,checkTotals
            this.shop.goods.forEach(item => {
                if(item.isChecked){
                    let num,total
                    item.list.forEach(citem=>{
                        num+=citem.num
                    })
                    total =num*item.sale_price
                    checkedGoods.push(Object.assign({...item},{checkNum:num,totals:total}))
                    checkTotals+=total
                    checkNums +=num
                }
            })
            this.$emit('shop-check',{checkNums,checkTotals})

        }
    },

    watch: {}

}
</script>
<style lang='scss' scoped>

</style>
