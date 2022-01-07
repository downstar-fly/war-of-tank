import { createRouter, createWebHistory } from 'vue-router';
import Ball from '../views/ball.vue';
import TankWar from '../views/tank-war.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Ball,
    children: [
      {
        path: '/ball',
        name: 'Ball',
        component: Ball,
      },
    ]
  },
  {
    path: '/tankWar',
    name: 'TankWar',
    component: TankWar,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
