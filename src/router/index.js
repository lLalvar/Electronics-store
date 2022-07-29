import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Item from '../views/Item.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
    },
    {
      path: '/item',
      name: 'Item',
      component: Item,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
})

export default router
