<template>
<div class="city flex">
    <div class="city-list" ref="wrapper">
        <div class="area">
            <p class="title ">当前定位的城市</p>
            <div class="city-item">
                <i class="gc-iconlocationfill"></i>
                <span>福州</span>
            </div>
        </div>
        <div class="area">
            <p class="title ">热门城市</p>
            <div class="flex-wrap">
                <div class="city-item" v-for="(itemname,index) in city.hot" :key="index">
                    <span>{{itemname.name}}</span>
                </div>
            </div>
        </div>
        <div class="area" v-for="(itemletter,index) in city" :key="index">
            <p class="title">{{index}}</p>
            <div class="flex-wrap">
                <div class="city-item" v-for="(itemname,index) in itemletter" :key="index">
                    <span>{{itemname.name}}</span>
                </div>
            </div>
        </div>
    </div>
    <div class="index-list-nav">
        <div v-for="(itemletter,index) in letter" :key="index">
            <p>{{itemletter}}</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: '',
    props: {
        city: {
            type: Object,
            default: {
                return () {
                    city
                }

            }
        }
    },
    data() {
        return {

        };
    },

    components: {},

    computed: {
        letter() {
            const letter = []
            for (var i = 0; i < 25; i++) {
                letter.push(String.fromCharCode((65 + i)))
                console.log(String.fromCharCode((65 + i)));
            }
            return letter
        },
    },
    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

}
</script>

<style lang="scss" scoped>
.city {
    width: 100%;
    height: 100%;

    .index-list-nav {
        position: fixed;
        right: 0;
        top: 51px;
        width: 7%;
        div{
           p{
            margin: 8px;
        } 
        }
        
    }
}

.city-list {
    position: fixed;
    top: 52px;
    left: 0;
    width: 93%;
    height: 93%;
    background-color: #F3F5F7;
    padding: 10px;
    box-sizing: border-box;
    overflow: auto;

    .area {
        .title {
            color: #999;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
        }
    }

    .city-item {
        height: 40px;
        width: 29%;
        line-height: 40px;
        background-color: #fff;
        color: #666;
        overflow: hidden;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        text-align: center;
        margin: 5px;
        box-sizing: border-box;

        i {
            color: #ee5e7b;
            margin: 0 5px 5px;
        }

        i,
        span {
            font-size: 15px;
        }
    }
}
</style>
