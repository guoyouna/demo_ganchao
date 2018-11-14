<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    components: {},
}
</script>

<style lang="scss">
$height:100%;

.red {
    background-color: red;
}

* {
    margin: 0;
    font-size: 0.24rem;
}

html,
body {
    height: 100%;
}

#app {
    height: $height;
}

.content {
    position: relative;
    top: 52px;
    overflow: auto;
    height: 85%;
    width: 100%;
}

.flex {
    display: flex;
}
.flex-wrap{
    display: flex;
    flex-wrap: wrap;
}
.flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-around {
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.flexbox-item {
    align-items: center;
}

.fc-9 {
    color: #999;
}

.fs12 {
    font-size: 12px;
}

.pink {
    color: #ee5e7b;
}

.border_bottom {
    border-bottom: 1px solid #e3e3e3;
}

.border_top {
    border-top: 1px solid #e3e3e3;
}

.pd-10 {
    padding: 10px
}

.van-info {
    color: #fff;
    left: 100%;
    top: -.5em;
    font-size: .5em;
    padding: 0 .3em;
    text-align: center;
    min-width: 1.2em;
    line-height: 1.2;
    position: absolute;
    border-radius: .6em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #f44;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
</style>
