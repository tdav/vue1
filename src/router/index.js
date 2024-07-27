import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentView  from '../views/ComponentView.vue'
import ArrayView from '../views/ArrayView.vue'
import TableView from '../views/TableView.vue'
import ValuableView from '../views/ValuableView.vue'
import ShartliOperatorView from '../views/ShartliOperatorView.vue'
import ComponentSlotView from '../views/ComponentSlotView.vue'
import DavronV7 from '../views/DavronV7.vue'
import Jasur from '../views/Jasur.vue'
import Music from '../views/Music.vue'
import OmonTodo from '../views/Omon/todo.vue'
import Primer from '../views/Omon/operatorlar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/omon_todo',
    name: 'omon_todo',
    component: OmonTodo
  },
  
  {
    path: '/DavronV7',
    name: 'DavronV7',
    component: DavronV7
  },

  {
    path: '/primer',
    name: 'Primer',
    component: Primer
  },
  
  {
    path: '/Music',
    name: 'Music',
    component: Music
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
    path: '/Jasur',
    name: 'Jasur',
    component: Jasur
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
