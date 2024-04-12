import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/Students/View.vue";
import StudentListClass from "../views/Students/ListTopic.vue";
import NavbarLayout from "@/components/layouts/NavbarLayout.vue";
import SidebarLayout from "@/components/layouts/SidebarLayout.vue";
import MarketingManager from "@/views/MarketingManager.vue";
import CharMarketing from "../views/CharMarketing.vue";
import AdminView from "@/views/AdminView.vue";
import SidebarLayoutMaketing from "@/components/layouts/SidebarLayoutMaketing.vue";
import SidebarLayoutStudent from "@/components/layouts/SidebarLayoutStudent.vue";
import SidebarLayoutCoordinator from "@/components/layouts/SidebarLayoutCoordinator.vue";
import SidebarLayoutAdmin from "@/components/layouts/SidebarLayoutAdmin.vue";
import SidebarLayoutGuest from "@/components/layouts/SidebarLayoutGuest.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: NavbarLayout,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: NavbarLayout,
      },
    },
    {
      path: "/students",
      name: "students",
      component: () => import("../views/Students/Homepage.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/listClass",
      name: "listClass",
      component: StudentListClass,
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin/register",
      name: "register",
      component: () => import("../views/Admin/RegisterView.vue"),
    },
    {
      path: "/marketingManager",
      name: "Manager Coordinator ",
      component: () => import("../views/Marketing/Homepage.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    // {
    //   path: "/admin",
    //   name: "Admin",
    //   component: AdminView,
    //   meta: {
    //     layout: SidebarLayoutMaketing,
    //   },
    // },
    {
      path: "/listAccount",
      name: "listaccounts",
      component: () => import("../views/ListAccount.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("../views/Edit.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    {
      path: "/charMarketing",
      name: "charmarketing",
      component: () => import("../views/CharMarketing.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/dowloadFile",
      name: "dowloadFile",
      component: () => import("../views/DowloadFile.vue"),
      meta: {
        layout: SidebarLayout,
      },
    },
    //////////////admin/////////
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/Admin/Homepage.vue"),
      meta: {
        layout: SidebarLayoutAdmin,
      },
    },
    {
      path: "/admin/chart",
      name: "charmarketing",
      component: () => import("../views/CharMarketing.vue"),
      meta: {
        layout: SidebarLayoutAdmin,
      },
    },
    {
      path: "/admin/createfaculties",
      name: "marketingcreatefaculties",
      component: () => import("../views/Admin/CreateFaculties.vue"),
      meta: {
        layout: SidebarLayoutAdmin,
      },
    },
    {
      path: "/admin/user",
      name: "adminuser",
      component: () => import("../views/Admin/User.vue"),
      meta: {
        layout: SidebarLayoutAdmin,
      },
    },
    {
      path: "/admin/user/edit/:id",
      name: "adminuseredit",
      component: () => import("../views/Admin/EditName.vue"),
      meta: {
        layout: SidebarLayoutAdmin,
      },
    },
    {
      path: "/admin/download",
      name: "admindownload",
      component: () => import("../views/Admin/Download.vue"),
      meta: {
        layout: SidebarLayoutAdmin,
      },
    },
    /////////students////////
    {
      path: "/student/homepage",
      name: "studentHomepage",
      component: () => import("../views/Students/Homepage.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/listtopic",
      name: "studentListclass",
      component: () => import("../views/Students/ListTopic.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/myassignment",
      name: "studentmyassignment",
      component: () => import("../views/Students/MyAssignment.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
      
    },
    {
      path: "/student/manage/mypost",
      name: "studentmanagemypost",
      component: () => import("../views/Students/MyPost.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/myassignment/submit/",
      name: "studentmyassignmentsubmit",
      component: () => import("../views/Students/Submit.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    {
      path: "/student/manage/mypost/viewcomment/:id",
      name: "studentmanagemypostviewcomment",
      component: () => import("../views/Students/Comment.vue"),
      meta: {
        layout: SidebarLayoutStudent,
      },
    },
    /////////Marketing////////
    {
      path: "/marketing/Homepage",
      name: "marketinghomepage",
      component: () => import("../views/Marketing/Homepage.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },

    {
      path: "/marketing/createtopic",
      name: "marketingcreatetopic",
      component: () => import("../views/Marketing/CreateTopic.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/createguest",
      name: "marketingcreateguest",
      component: () => import("../views/Marketing/CreateGuests.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/listclass",
      name: "marketinglistclass",
      component: () => import("../views/Marketing/ListClass.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/faculties",
      name: "marketingfaculties",
      component: () => import("../views/Marketing/Faculties.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/listguests",
      name: "marketinglistguests",
      component: () => import("../views/Marketing/ListGuests.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/createguests",
      name: "marketingcreateguests",
      component: () => import("../views/Marketing/CreateGuests.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/chart",
      name: "marketingchart",
      component: () => import("../views/Marketing/Chart.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },
    {
      path: "/marketing/download",
      name: "marketingdownload",
      component: () => import("../views/Marketing/Download.vue"),
      meta: {
        layout: SidebarLayoutMaketing,
      },
    },

    ////////Coordinator////////
    {
      path: "/coordinator",
      name: "coordinator",
      component: () => import("../views/Coordinator/Homepage.vue"),
      meta: {
        layout: SidebarLayoutCoordinator,
      },
    },

    {
      path: "/coordinator/homepage",
      name: "coordinatorhomepage",
      component: () => import("../views/Coordinator/Homepage.vue"),
      meta: {
        layout: SidebarLayoutCoordinator,
      },
    },
    {
      path: "/coordinator/createdeadline",
      name: "coordinatorcreatedeadline",
      component: () => import("../views/Coordinator/CreateDeadline.vue"),
      meta: {
        layout: SidebarLayoutCoordinator,
      },
    },
    {
      path: "/coordinator/listcomment",
      name: "coordinatorlistcomment",
      component: () => import("../views/Coordinator/ListStudent.vue"),
      meta: {
        layout: SidebarLayoutCoordinator,
      },
    },
    {
      path: "/coordinator/listcomment/comment/:id",
      name: "studentmanagemypostcreatecomment",
      component: () => import("../views/Coordinator/CreateComment.vue"),
      meta: {
        layout: SidebarLayoutCoordinator,
      },
    },

    ////////Guest/////////
    {
      path: "/guest/homepage",
      name: "guesthomepage",
      component: () => import("../views/Guest/HomePage.vue"),
      meta: {
        layout: SidebarLayoutGuest,
      },
    },
    {
      path: "/guest/GuestFaculies",
      name: "/guest/GuestFaculies",
      component: () => import("../views/Guest/GuestFaculies.vue"),
      meta: {
        layout: SidebarLayoutGuest,
      },
    },

    ///////////////
    // {
    //   path: "/term",
    //   name: "term",
    //   component: () => import("../views/Students/Term.vue"),

    // },
  ],
});

export default router;
