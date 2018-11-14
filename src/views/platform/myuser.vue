<template>
<div class="user">
    <van-popup v-model="show" position="right" :overlay="false">
        <update-user @close="close" :userInfo="userInfo" @reload="updateInfo"></update-user>
    </van-popup>
    <van-popup v-model="show1" position="right" :overlay="false">
        <order-list></order-list>
    </van-popup>
    <div class="main">
        <div class="header border_bottom flex-row">
          <i class="gc-iconsearch"></i>
          <span>用户中心</span>
          <i class="gc-iconsettings"></i>
          </div>
        <div class="user_connent border_bottom">
            <div class="user_logo" @click="update">
                <img :src="[userInfo.avatar]" alt="头像">
            </div>
            <div class="user_name">
                <p>用户昵称</p>
                <p>{{userInfo.nickname}}</p>
            </div>
        </div>
        <div class="goods">
            <div class="my_goods border_bottom flex-row" @click="getorderlist">
                <div><span>我的订单</span></div>
                <div class="fc-9"><span >查看全部</span><i class="gc-iconright"></i></div>

            </div>
            <div class=" goods_main flex-row border_bottom">
                <icon-name :icon-name="item.iconName" :text="item.text" v-for="(item,index) in iconList" :key="index"></icon-name>
            </div>
        </div>
        <div class="goods_main goods-list flex-row border_bottom">
            <icon-name :icon-name="item.iconName" :text="item.text" v-for="(item,index) in allList" :key="index"></icon-name>

        </div>
        <div class="center">
            <van-button type="danger" @click="Logout">退出</van-button>
        </div>
        <tab-bar></tab-bar>
    </div>
</div>
</template>

<script>
import TabBar from "@/components/Tabbar";
import IconName from "@/components/navicon";
import UpdateUser from "@/views/platform/updateuser";
import OrderList from "@/views/activies/orderlist";
import {
    saveToLocal,
    loadFromLocal,
    removeFromLocal
} from "@/utlis/localStorage";

export default {
    data() {
        return {
            show: false,
            show1: false,
            token: "",
            iconList: [{
                    iconName: "gc-iconpay",
                    text: "待结算",
                    routesnames: "login"
                },
                {
                    iconName: "gc-icondeliver",
                    text: "待收货"
                },
                {
                    iconName: "gc-iconticket",
                    text: "已完成"
                },
                {
                    iconName: "gc-iconsponsor",
                    text: "换退货"
                }
            ],
            allList: [{
                    iconName: "gc-iconlikefill",
                    text: "店铺"
                },
                {
                    iconName: "gc-iconradiobox",
                    text: "关注"
                },
                {
                    iconName: "gc-iconroundaddfill",
                    text: "商友"
                },
                {
                    iconName: "gc-iconfavorfill",
                    text: "收藏"
                },
                {
                    iconName: "gc-iconsponsorfill",
                    text: "账目"
                },
                {
                    iconName: "gc-iconlocationfill",
                    text: "收获地址"
                },
                {
                    iconName: "gc-iconfriendaddfill",
                    text: "认证"
                },
                {
                    iconName: "gc-iconservice",
                    text: "意见反馈"
                }
            ],
            userInfo: {}
        };
    },
    mounted() {
        this.getinfoList();
    },
    methods: {
        close(show) {
            this.show = show;
        },
        updateInfo() {
            var vm = this;
            this.$api.user.userInfo().then(res => {
                vm.userInfo = res;
                console.log(vm.userInfo);
            });
        },
        getinfoList() {
            var vm = this;
            this.$api.user.userInfo().then(res => {
                vm.userInfo = res;
                console.log(vm.userInfo);
            });
        },
        Logout() {
            this.$api.user.userLogout().then(res => {
                console.log(res);
                this.$router.push({
                    name: "logins"
                });
            });
        },
        update() {
            this.show = true;
        },
        getorderlist() {
            this.show1 = true;
        }
    },
    components: {
        TabBar,
        IconName,
        UpdateUser,
        OrderList
    },
    created() {},

    props: [],
    computed: {}
};
</script>

<style lang="scss" scoped>
.van-popup {
    height: 100%;
    width: 100%;
}

.main {
    height: 90%;
    overflow: auto;
    z-index: 1;
}

$font-size: 0.24rem;

.user {
    height: 100%;
    background-color: #f3f5f7;

    .header {
        height: 48px;
        font-size: 0.36rem;
        text-align: center;
        line-height: 48px;
        background-color: #ffffff;
        padding:0 10px;
        box-sizing: border-box;
        i{
          font-size: 20px;
        }
        span{
          font-size: 18px;

        }

    }

    .user_connent {
        background-color: #ffffff;
        padding: 10px;

        .user_logo {
            height: 1.5rem;
            width: 1.5rem;
            background-color: #949494;
            border-radius: 50%;
            margin: auto;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .user_name {
            font-size: $font-size;
            text-align: center;

            p {
                -webkit-margin-before: 0.5em;
                -webkit-margin-after: 0.5em;
            }
        }
    }

    .goods {
        background-color: #ffffff;
        margin-top: 5px;

        .my_goods {
            padding: 0 15px;

            height: 38px;
            line-height: 38px;
            box-sizing: border-box;

            span {
                font-size: 14px;
            }
        }

        .allgoods {
            float: right;
        }
    }

    .goods_main {
        width: 100%;
        flex-wrap: wrap;
        background-color: #ffffff;

        a {
            color: #8a7e79;
        }

        :hover {
            color: #ec7745;
        }
    }

    .goods-list {
        margin-top: 10px;
        padding: 5px 0;
    }

    .center {
        margin: 0.3rem;

        button {
            width: 100%;
        }
    }
}
</style>
