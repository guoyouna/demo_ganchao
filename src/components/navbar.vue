<template>
<div class="navbar">
    <div class="icon_return" @click="get_return">
        <i class="gc-iconback"></i>
    </div>
    <h4 class="nav_title">{{title}}</h4>
    <div class="icon_right" @click="get_right">
        <i :class="[naviconName]"></i> 
        <!-- <div class="van-info">5</div> -->
    </div >
</div>
</template>

<script>
export default {
    name: '',
    props: {
        title: {
            type: String,
            default: "商品详情"
        },
        naviconName: {
            type: String,
            default: "gc-iconcart"
        },
    },

    data() {
        return {

        };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {

    },

    methods: {
        get_return() {
            this.$router.go(-1)
        },
        get_right(){

        }
    },

    watch: {}

}
</script>

<style lang='scss' scoped>
.navbar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    width: 100%;
    max-width: 640px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c0c0c0;
    padding:0 10px;
    box-sizing: border-box;
        background-color: #ffff;
    h4{
        font-size: 16px;
    }
    
    i{
        font-size: 22px;
    }
    .icon_right{
        position: relative;
    }
}
</style>
