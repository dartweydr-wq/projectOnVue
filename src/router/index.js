import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Document from '../views/Document'
import DocumentDetail from '../views/DocumentDetail'
import Apparatus from '../views/Apparatus'
import Block from '../views/Block'
import DetailBlock from '../views/DetailBlock'
import DetailInformationSubBlock from '../views/DetailInformationSubBlock'
import Npa from '../views/Npa'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Apparatus',
    name: 'Apparatus',
    component: Apparatus,
  },
  {
    path: '/Block',
    name: 'Block',
    component: Block,
  },
  {
    path: '/Block/:code',
    name: 'DetailBlock',
    component: DetailBlock,
  },
  {
    path: '/Block/:code/subsections/:subCode',
    name: 'DetailInformationSubBlock',
    component: DetailInformationSubBlock,
  },
  {
    path: '/Document',
    name: 'Document',
    component: Document,
  },
  {
    path: '/Document/:id',
    name: 'DocumentDetail',
    component: DocumentDetail,
  },
  {
    path: '/Npa',
    name: 'Npa',
    component: Npa,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
