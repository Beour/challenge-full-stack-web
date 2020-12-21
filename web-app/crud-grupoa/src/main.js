import Vue       from 'vue'
import App       from './App.vue'
import VueRouter from 'vue-router'
import vuetify from "./plugins/vuetify";
import Home from './components/Home.vue'
import Student from './components/Student.vue'

Vue.use(VueRouter);

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
]

const router = new VueRouter({mode: 'history', routes: routes});


new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
