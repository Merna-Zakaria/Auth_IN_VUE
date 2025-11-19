// import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   {
//     path: "/",
//     component: () => import("@/components/features/layout/index.vue"),
//     children: [
//       {
//         path: "/",
//         component: () => import("@/views/HomeView.vue"),
//         name: "Home",
//         meta: {
//           title: "Home",
//         },
//       },
//       {
//         path: "about",
//         component: () => import("@/views/AboutView.vue"),
//         name: "About",
//         meta: {
//           title: "About",
//         },
//       },
//     ],
//   },
//   {
//     path: "/login",
//     component: () => import("@/views/LoginView.vue"),
//     name: "Login",
//     meta: {
//       title: "Login",
//     },
//   },
//     {
//     path: "/signup",
//     component: () => import("@/views/SignupView.vue"),
//     name: "Signup",
//     meta: {
//       title: "Signup",
//     },
//   },
//   // {
//   //   path: "/404",
//   //   name: "notFound",
//   //   component: () => import("../pages/Errors/notFound.vue"),
//   // },
//   // { path: "*", redirect: "/404" },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;


import { createRouter, createWebHistory } from "vue-router";
import type { Router } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/features/layout/index.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/HomeView.vue"),
        name: "Home",
        meta: {
          title: "Home",
        },
      },
      {
        path: "about",
        component: () => import("@/views/AboutView.vue"),
        name: "About",
        meta: {
          title: "About",
          requiresAuth: true, // 👈 Protected
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/LoginView.vue"),
    name: "Login",
    meta: {
      title: "Login",
    },
  },
  {
    path: "/signup",
    component: () => import("@/views/SignupView.vue"),
    name: "Signup",
    meta: {
      title: "Signup",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global Route Guard
router.beforeEach((to: { meta: { requiresAuth: any; }; }) => {
  const user = localStorage.getItem("user"); 

  if (to.meta.requiresAuth && !user) {
    return { name: "Login" };
  }
});

export default router;
