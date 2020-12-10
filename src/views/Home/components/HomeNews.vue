<!--  -->
<template>
  <div>
    <div class="home-news">
      <div class="title-img">
        <img :src="titleImg" alt="" />
      </div>
      <ul ref="news" :class="{ trans: flag }" style="top: 0rem">
        <li v-for="(news, index) in newsData" :key="index">
          {{ news.title }}
        </li>
      </ul>
      <div class="more">
        <i class="iconfont icon-jiantou2"></i>
      </div>
    </div>
    <div class="ad">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/original_img/CPvH5WHHbF0EoG9XjRQbbT3knMVCeEt9DlYGQhJM.png?imageView2/2/format/webp"
        alt=""
      />
    </div>
    <div class="kill">
      <p>限时秒杀</p>
      {{ hours }}:{{ mins }}:{{ sec }}
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      titleImg: require("@/assets/img/title.png"),
      newsData: [
        {
          id: 1,
          title: "惊雷，这通天修为天塌地陷紫金锤",
        },
        {
          id: 2,
          title: "紫殿，这玄真火焰九天悬剑惊天变",
        },
        {
          id: 2,
          title: "乌云，我驰骋沙场呼啸烟雨顿",
        },
        {
          id: 3,
          title: "多情自古空余恨我手持了弯月刃",
        },
      ],
      flag: false,
      timer: null,
      hours: 0,
      mins: 0,
      sec: 0,
      tiemr2: null,
    };
  },
  methods: {
    scrollNewsFn() {
      let oUl = this.$refs.news;
      oUl.style.top = "-5rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.newsData.push(this.newsData.shift());
        oUl.style.top = "0rem";
        this.flag = !this.flag;
      }, 500);
    },
    miaoshaFn() {
      let nowDate = new Date();
      let tagDate = new Date("2021-1-1 0:0:0");
      // 获取相差多少秒
      var cha = (tagDate - nowDate) / 1000;
      // 算出小时
      this.hours = parseInt((cha % (60 * 60 * 24)) / 3600);
      // 算出分钟
      this.mins = parseInt(((cha % (60 * 60 * 24)) % 3600) / 60);
      // 算出秒
      this.sec = parseInt(((cha % (60 * 60 * 24)) % 3600) % 60);
      // console.log(this.hours);
      // console.log(this.mins);
      // console.log(this.sec);
    },
  },
  mounted() {
    this.timer = setInterval(this.scrollNewsFn, 2000);
    this.timer2 = setInterval(this.miaoshaFn, 100);
  },
  destroyed() {
    // 销毁组建
    clearInterval(this.timer);
    clearInterval(this.timer2);
  },
};
</script>
<style lang="less">
.home-news {
  width: (100% - 5%);
  height: 5rem;
  margin: 1rem 2.5%;
  overflow: hidden;
  line-height: 5.4rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  position: relative;
  img {
    height: 3rem;
    margin: 0.9rem 1rem 0 1rem;
  }
  .trans {
    transition: all 0.25s;
  }
  ul {
    height: 5rem;
    width: (70% - 2rem);
    position: absolute;
    left: 25%;
    li {
      font-size: 1.4rem;
    }
  }
  .more {
    width: 10%;
    text-align: center;
  }
}
.ad {
  width: 95%;
  margin-left: 2.5%;
  img {
    width: 100%;
  }
  margin-bottom: 0.5rem;
}
.kill {
  width: 95%;
  margin-left: 2.5%;
  height: 7rem;
  border-radius: 1rem;
  line-height: 3.5rem;
  text-align: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  font-size: 2rem;
  color: #fb7299;
  font-weight: 900;
}
</style>