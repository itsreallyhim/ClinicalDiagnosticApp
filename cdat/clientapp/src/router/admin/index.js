export default [
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunk "Admin"*/ "@/views/admin/Admin.vue"),
    meta: {
      guest: false,
      admin: true,
    },
    
  },
  {
    path: "/admin/manage-questions",
    name: "Manage Questions",
    component: () => import("@/views/admin/ManageQuestions.vue"),
    meta: {
      guest: false,
      admin: true,
    },
  },
];
