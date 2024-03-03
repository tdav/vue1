import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentView  from '../views/ComponentView.vue'
import ArrayView from '../views/ArrayView.vue'
import TableView from '../views/TableView.vue'
import ValuableView from '../views/ValuableView.vue'
import ShartliOperatorView from '../views/ShartliOperatorView.vue'
import ComponentSlotView from '../views/ComponentSlotView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/valuable',
    name: 'valuableView',
    component: ValuableView
  },

  {
    path: '/shartli',
    name: 'shartliOperatorView',
    component: ShartliOperatorView
  },

  {
    path: '/array',
    name: 'arrayView',
    component: ArrayView
  },

  {
    path: '/table',
    name: 'tableView',
    component: TableView
  },

  {
    path: '/component',
    name: 'сomponentView',
    component: ComponentView
  },
  
  {
    path: '/slot',
    name: 'ComponentSlotView',
    component: ComponentSlotView
  },
  
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
