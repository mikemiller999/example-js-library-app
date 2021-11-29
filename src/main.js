import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "antd/dist/antd.css";
import { Button, DatePicker } from "antd";

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
  </>
);
Vue.config.productionTip = false;
// I really dont understand how to implement this
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
