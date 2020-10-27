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
];
