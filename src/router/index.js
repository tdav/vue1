import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ComponentView from '../views/ComponentView.vue'
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
import js_dom from '@/views/Azizbek/js_dom.vue'
import Loop from '@/views/Azizbek/Loop.vue'
import js_dom_2 from '@/views/Azizbek/js_dom_2.vue'
import age from '../views/Azizbek/age.vue'
import vue_3 from '@/views/Azizbek/vue_3.vue'
import formControl from '@/views/Azizbek/ForrmControl/index.vue'
import DataTable from '@/views/Azizbek/Data/index.vue'
import Sikllar from '../views/Omon/sikllar.vue'
import Function from '../views/Omon/Function.vue'
import DavronDom from '../views/Davron/dom.vue'
import Dom from '../views/Omon/dom.vue'
import dom2 from '@/views/Omon/dom2.vue'
import vazifa1 from '@/views/Omon/vazifa1.vue'
import vazifa2 from '@/views/Omon/vazifa2.vue'
import formControlOmon from '../views/Omon/ForrmControl/index.vue'
import about from '../views/AboutView.vue'
import tablesAndTodo from '../views/Omon/tablesAndTodo/index.vue'
import storeDavron from '../views/Davron/myStore/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formControlOmon',
    name: 'formControlOmon',
    component: formControlOmon
  },
  
  {
    path: '/storeDavron',
    name: 'storeDavron',
    component: storeDavron
  },

  {
    path: '/tablesAndTodo',
    name: 'tablesAndTodo',
    component: tablesAndTodo
  },

  {
    path: '/vazifa2',
    name: 'vazifa2',
    component: vazifa2
  },
  {
    path: '/vazifa1',
    name: 'vazifa1',
    component: vazifa1
  },
  {
    path: '/dom2',
    name: 'dom2',
    component: dom2
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
    component: Sikllar
  },
  {
    path: '/dom',
    name: 'Dom',
    component: Dom
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
    path: '/js_dom',
    name: 'js_dom',
    component: js_dom
  },
  {
    path: '/js_dom_2',
    name: 'js_dom_2',
    component: js_dom_2
  },
  {
    path: '/age',
    name: 'age',
    component: age
  },
  {
    path: '/vue_3',
    name: 'vue_3',
    component: vue_3
  },
  {
    path: '/formControl',
    name: 'formControl',
    component: formControl
  },

  {
    path: '/DataTable',
    name: 'DataTable',
    component: DataTable
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
    name: 'componentView',
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
    component: about
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
