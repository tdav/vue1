import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentView  from '../views/ComponentView.vue'
import ArrayView from '../views/ArrayView.vue'
import TableView from '../views/TableView.vue'
import ValuableView from '../views/ValuableView.vue'
import ShartliOperatorView from '../views/ShartliOperatorView.vue'
import ComponentSlotView from '../views/ComponentSlotView.vue'
import DavronV7 from '../views/Davron/DavronV7.vue'
import Jasur from '../views/Jasur.vue'
import Music from '../views/Music.vue'
import OmonTodo from '../views/Omon/todo.vue'
import Aziz from '../views/Azizbek/Aziz.vue'
import Operatorlar from '../views/Omon/operatorlar.vue'
import newOperators from '@/views/Azizbek/newOperators.vue'
import Loop from '@/views/Azizbek/Loop.vue'
import Sikllar from '../views/Omon/sikllar.vue'
import Function from '../views/Omon/Function.vue'
import DavronDom from '../views/Davron/dom.vue'
import Dom from '../views/Omon/dom.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/function',
    name: 'Function',
    component: Function
  },

  {
    path: '/omon_todo',
    name: 'OmonTodo',
    component: OmonTodo
  },

  {
    path: '/sikllar',
    name: 'Sikllar',
    component:Sikllar
  },

  {
    path: '/dom',
    name: 'Dom',
    component:Dom
  },


  {
    path: '/aziz',
    name: 'Aziz',
    component: Aziz
  },

  {
    path: '/newOperators',
    name: 'newOperators',
    component: newOperators
  },

  {
    path: '/Loop',
    name: 'Loop',
    component: Loop
  },
  
  {
    path: '/DavronV7',
    name: 'DavronV7',
    component: DavronV7
  },
  
  {
    path: '/DavronDom',
    name: 'DavronDom',
    component: DavronDom
  },

  {
    path: '/operatorlar',
    name: 'Operatorlar',
    component: Operatorlar
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
