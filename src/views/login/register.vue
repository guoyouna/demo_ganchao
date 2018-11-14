<template>
<div class="register">
    <van-cell-group>
        <van-field v-model="mobile" class="mobile" placeholder="手机号" />
        <van-field v-model="vcode" class="mobile" placeholder="验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-field v-model="password" type="password" placeholder="密码" />
        <div class="reg flex-row">
            <div>
                <input type="checkbox">同意敢潮BRP用户协议
      </div>
                <div>
                    <a href="#">查看</a>
                </div>

            </div>
    </van-cell-group>

    <van-button type="danger" @click="regist">注册</van-button>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import {
    saveToLocal,
    loadFromLocal,
    removeFromLocal
} from '@/utlis/localStorage'
export default {
    data() {
        return {
            mobile: "",
            password: "",
            vcode: ""
        };
    },
    methods: {
        regist() {
            this.$api.user.userRegist({
                mobile: this.mobile,
                password: this.password,
                vcode: this.vcode
            }).then(res => {
                console.log(res)
            })
        }
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
$border: 1px solid #dddddd;
$border-radius: 5px;

.register {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.reg {
    font-size: 0.24rem;
    text-align: center;
    margin-top: 0.2rem;

    a {
        color: #ee5e7b;
    }
}

.van-cell {
    padding: 10px 0;
    border-bottom: 1px solid #f8bac7;
    color: #ee5e7b;

    margin: 15px 0;
}

.van-cell-group {
    width: 90%;
    border-radius: $border-radius;
}

.van-button--normal {
    width: 90%;
}

.van-button--primary {
    color: #fff;
    background-color: #ee5e7b;
    border: 1px solid #ee5e7b;
    border-radius: 20px;
}

.van-button--danger {
    margin-top: 20px;
    background-color: #ee5e7b;
    border: 1px solid #ee5e7b;
    border-radius: $border-radius;
}

.mobile {}
</style>
