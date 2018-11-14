<template>
<div class="update">
  <div class="border_bottom">
<van-nav-bar title="修改资料" left-text="返回" right-text="保存" left-arrow @click-left="closePop" @click-right="onSave">
    </van-nav-bar>
  </div>
    
    <div class="user_main">
        <van-cell-group>
            <van-field v-model="userInfo.nickname" label="联系人:" icon="question" placeholder="联系人" />
            <van-field v-model="userInfo.mobile" type="text" label="联系电话:" icon="question" placeholder="联系电话" />
            <van-field v-model="value" label="地址:" placeholder="请输入用户名" />
        </van-cell-group>
    </div>
    <div class="user_second">
        <van-cell-group>
            <van-field v-model="value" label="QQ:" placeholder="QQ号" />
            <van-field v-model="value" label="微信:" placeholder="请输入用户名" />
            <van-field v-model="value" label="简介" type="textarea" placeholder="请输入留言" rows="1" autosize />
            <van-field v-model="value" label="图片" type="file" placeholder="请输入留言" />
        </van-cell-group>
    </div>
</div>
</template>

<script>
import NavBar from "@/components/navbar";

name: "updateuser";
export default {
    data() {
        return {
            value: ""
        };
    },
    props: {
        userInfo: {
            type: Object,
            deefault() {
                return {
                    nickname: '',
                    mobile: ''
                };
            }
        }
    },
    components: {
        NavBar
    },
    methods: {
        closePop() {
            this.$emit("close", false);
        },
        onSave() {
            // this.$api.update.userUpdate().then(res => {
            this.$api.user.userUpdate(this.userInfo).then(res => {
                this.$toast.success("修改成功!");
                this.$emit("reload");
                this.closePop();
            });
        }
    },
    created() {}
};
</script>

<style lang="scss">
.update {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 999;
    background-color: #f3f5f7;
}

.van-nav-bar {
    color: #000;
}

.van-nav-bar .van-icon {
    color: #4d4d4d;

}

.van-nav-bar__text {
    color: #4d4d4d;
}

.van-cell__title {
    max-width: 70px !important;
}

.user_main {
    margin: 10px auto;
    box-sizing: border-box;

}
</style>
