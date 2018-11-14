<template>
<div class="item">
    <div class="item_title flex-box">
        <span >{{item.order_sn}}</span>
        <span class="red_color">{{item.status_name}}</span>
    </div>
    <div class="item_name">
        <div class="flex-box height">
            <span>客户名称:</span>
            <div class="flex-one">{{item.order_title}}</div>
        </div>
        <div class="flex-box">
            <span>下单时间:</span>
            <div class="flex-one">{{item.pay_date}}</div>
        </div>
    </div>
    <h4 class="item_sum">共{{item.goods_count}}件产品,订单金额{{item.fee_order}}</h4>
</div>
</template>

<script>
import model from "./model";
export default {
  data() {
    return {};
  },
  props: {
    item: {
      type: Object,
      default() {
        return model;
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.flex-box {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 5px 0;
}
.flex-one {
  display: flex;
  flex-grow: 1;
}

.red_color {
  color: #ee5e7b;
}

.item {
  width: 100%;
  height: 162px;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 5px;

  .item_title {
    height: 52px;
    border-bottom: 1px solid #b9b9b9;
    line-height: 52px;
    box-sizing: border-box;

    span {
      font-size: 16px;
    }
  }

  .item_name {
    color: #575757;

    p {
      margin: 10px 0;
      font-size: 14px;
    }
  }

  .item_sum {
    margin: 10px 0 5px;
    font-size: 14px;
  }
}
</style>
