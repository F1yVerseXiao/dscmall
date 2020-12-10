<!--  -->
<template>
  <div class="index-page">
    <div class="index-header" :style="colorObj"></div>
    <div class="index-swiper">
      <Swiper @changeColor="getColor" />
    </div>
    <div>
      <QuickNav />
    </div>
    <div>
      <HomeNews />
    </div>
    <div>
      <List :listdatas="listdatas" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/Swiper";
import QuickNav from "../components/QuickNav";
import HomeNews from "../components/HomeNews";
import List from "@/components/List";
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    QuickNav,
    HomeNews,
    List,
  },
  data() {
    //这里存放数据
    return {
      colorObj: {
        background: "#f34646",
        // 原为#fb7299
      },
      colorArr: [
        {
          background: "#f34646",
        },
        {
          background: "#407dff",
        },
        {
          background: "#028379",
        },
      ],
      listdatas: [],
    };
  },
  methods: {
    getColor(index) {
      this.colorObj = this.colorArr[index];
    },
    getBestDatas() {
      Axios.get("/api/goods/type_list?page=1&size=20&type=is_best").then(
        (res) => {
          console.log(res.data.data);
          this.listdatas = res.data.data;
        }
      );
    },
  },
  mounted() {
    this.getBestDatas();
  },
};
</script>
<style lang="less">
.index-page {
  .index-header {
    background-color: #fb7299;
    height: 14.8rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    transition: all 0.5s;
  }
  .index-swiper {
    position: relative;
    top: -5rem;
  }
}
</style>