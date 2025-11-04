import { createRouter, createWebHistory } from 'vue-router'
import Candidates from '@/views/Recruit/Candidates.vue'
import Other from '@/views/Recruit/Other.vue'
import PageContent from '@/components/layout/PageContent.vue'

const routes = [
   {
    path: "/",
    redirect: "/recruit/candidates",
  },
  {
    path: "/recruit",
    component: PageContent,
     children: [
      {
        path: "candidates",
        component: Candidates,
      },
      {
        path: "other",
        component: Other,
      },
      {
        path: "",
        redirect: "/recruit/candidates",
      },
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
