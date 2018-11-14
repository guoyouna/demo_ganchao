<template>
      <div class="icon_name">
            <i :class="[iconName]"></i>
            <p>{{text}}</p>
      </div>
</template>
<script>
export default {
  data() {
    return {
      nameicon: ""
    };
  },
  props: {
    iconName: {
      type: String,
      default: "gc-iconpay"
    },
    text: {
      type: String,
      default: "文本"
    }
  }
};
</script>
<style lang="scss" scoped>
.icon_name {
  color: #8a7e79;
  width: 25%;
  margin: 10px auto;
  text-align: center;
  i {
    font-size: 24px;
    display: block;
  }
}
</style>
