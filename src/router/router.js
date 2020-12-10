// 导入
import Vue from "vue";
import VueRouter from "vue-router";

// 使用
Vue.use(VueRouter);

// 解决刷新报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 创建组件
import Cart from "../views/Cart/Cart";
import Category from "../views/Category/Category";
import Find from "../views/Find/Find";
import Home from "../views/Home/Home";
import Mine from "../views/Mine/Mine";

// 配置路由
let routes = [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "index",
        component: () => import("../views/Home/children/Index"),
      },
      {
        path: "household",
        component: () => import("../views/Home/children/Household"),
      },
      {
        path: "clothing",
        component: () => import("../views/Home/children/Clothing"),
      },
      {
        path: "shoebag",
        component: () => import("../views/Home/children/ShoeBag"),
      },
      {
        path: "mobilephones",
        component: () => import("../views/Home/children/MobilePhones"),
      },
      {
        path: "computer",
        component: () => import("../views/Home/children/Computer"),
      },
      {
        path: "hometextiles",
        component: () => import("../views/Home/children/HomeTextiles"),
      },
      {
        path: "personalmakeup",
        component: () => import("../views/Home/children/PersonalMakeup"),
      },
      {
        path: "/home",
        redirect: "/home/index",
      },
    ],
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/find",
    component: Find,
  },

  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/",
    redirect: "/home",
  },
];

// 创建路由对象
let router = new VueRouter({
  // mode: "history",
  routes,
});

// 暴露
export default router;
