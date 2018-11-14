<template>
<div class="select-city">
    <nav-bar :title="navbar.title" :navicon-name="navbar.naviconName"></nav-bar>

    <city-list :city="city"></city-list>
</div>
</template>

<script>
import NavBar from "@/components/navbar";
import CityList from "@/components/city/citylist";

export default {
    data() {
        return {
            navbar: {
                title: '选择城市',
                naviconName: ''
            },
            city:{}
        };
    },
    components: {
        NavBar,
        CityList
    },

    computed: {},

    beforeMount() {},

    mounted() {
        this.$api.system.getCity().then(res => {
            this.city=res
            console.log(this.city)
        })
    },

    methods: {},

    watch: {}

}
</script>

<style lang="scss" scoped>
.select-city {
    height: 100%;
    width: 100%;
}
</style>
