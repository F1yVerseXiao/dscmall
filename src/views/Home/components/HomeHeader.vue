<!--  -->
<template>
  <div class="home-header">
    <header>
      <form action="">
        <input type="text" placeholder="搜索商品名称" />
        <i class="iconfont icon-sousuo2"></i>
      </form>
      <a href="javascript:;" class="iconfont icon-xiaoxi"></a>
    </header>
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
    return {};
  },
};
</script>
<style lang="less">
.home-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  // background-color: #fb7299;
  background-color: transparent;
  z-index: 99;
  header {
    display: flex;
    form {
      width: 90%;
      position: relative;
      input {
        width: calc(100% - 0.7rem);
        height: 3rem;
        margin: 0.7rem 0 0 0.7rem;
        border-radius: 1.5rem;
        text-indent: 1rem;
        background-color: rgba(255, 255, 255, 0.5);
      }
      i {
        position: absolute;
        top: 0rem;
        right: 0rem;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        color: #757575;
      }
    }
    a {
      width: 10%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      font-size: 2rem;
      color: #fff;
    }
  }
}
</style>