import Vue from "vue";
import Element from "element-ui";
import Router from "vue-router";

Vue.use(Router);
Vue.use(Element, { size: "small", zIndex: 3000 });

export default new Router({
  routes: [
    {
      path: "/",
      name: "home"
    }
  ]
});
