<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control"
    ></tab-control>
    <ul>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
      <li>456</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then((res) => {
      //console.log(res);
      //this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });

    //2.请求商品数据
    getHomeGoods("pop", 1).then((res) => {
      console.log(res);
    });
  },
  methods: {},
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    getHomeGoods,
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>