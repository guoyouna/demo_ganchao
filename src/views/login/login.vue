<template>
<div class="login">
    <van-cell-group>
        <van-field v-model="mobile" class="mobile" placeholder="手机号" />
        <van-field v-model="password" type="password"  placeholder="密码" />
    </van-cell-group>
    <van-button type="danger" @click="login">登录</van-button>
    <div class="reg">
        <a href="#">忘记密码</a>
    </div>
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
            mobile: "15005061564",
            password: ""
        };
    },
    methods: {
        ...mapActions(["setToken", "setUser"]),
        login() {
            this.$api.user
                .userLogin({
                    mobile: this.mobile,
                    password: this.password
                })
                .then(res => {
                    this.$router.push({
                        name: "myuser"
                    });
                    this.setUser({
                            mobile: this.mobile,
                            password: this.password
                        }),
                        this.setToken(res.token);
                    saveToLocal('token', res.token);
                    saveToLocal('mobile', this.mobile);
                    saveToLocal('password', this.password);
                    this.$router.push({
                        name: "myuser"
                    });
                });
        }
    },
    computed: {
        ...mapGetters(["getToken"])
    }
};
</script>

<style lang="scss" scoped>
$border: 1px solid #dddddd;
$border-radius: 5px;

.login {
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
.van-cell{
    padding:10px 0;
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

.van-button--danger {
    margin-top: 20px;
    background-color: #ee5e7b;
    border: 1px solid #ee5e7b;
    border-radius: $border-radius;
}

.mobile {
    
}
</style>
