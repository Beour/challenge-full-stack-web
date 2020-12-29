import Vue       from 'vue'
import App       from './App.vue'
import VueRouter from 'vue-router'
import vuetify from "./plugins/vuetify";
import Home from './components/Home.vue'
import Student from './components/Student.vue'
import Edit from './components/Edit.vue'
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueRouter);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false

const routes = [
  {
    name: 'Student',
    path: '/student',
    component: Student
  },
  {
    name: 'Home',
    path: '/home',
    component: Home
  },
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
]

const router = new VueRouter({mode: 'history', routes: routes});


new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
