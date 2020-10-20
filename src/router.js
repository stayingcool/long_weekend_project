import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import SignUpConfirm from "./views/SignUpConfirm.vue";
import VacationDetail from "./views/VacationDetail.vue";
import { AmplifyEventBus } from "aws-amplify-vue";
import { getUser } from "@/utils/auth.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        // default: Components,
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter,
      },
      meta: { requiresAuth: true },
    },
    {
      path: "/vacation/:id",
      name: "vacation",
      components: {
        header: AppHeader,
        default: VacationDetail,
        footer: AppFooter,
      },
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter,
      },
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter,
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter,
      },
    },
    {
      path: "/signupconfirm",
      name: "signupconfirm",
      components: {
        header: AppHeader,
        default: SignUpConfirm,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

getUser().then((user) => {
  if (user) {
    router.push({ path: "/landing" });
  }
});

AmplifyEventBus.$on("authState", async (state) => {
  const pushPathes = {
    signedOut: () => {
      router.push({ path: "/login" });
    },
    signUp: () => {
      router.push({ path: "/signUp" });
    },
    confirmSignUp: () => {
      router.push({ path: "/signupconfirm" });
    },
    signIn: () => {
      router.push({ path: "/login" });
    },
    signedIn: () => {
      router.push({ path: "/landing" });
    },
  };
  if (typeof pushPathes[state] === "function") {
    pushPathes[state]();
  }
});

router.beforeResolve(async (to, from, next) => {
  const user = await getUser();
  if (!user) {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      return next({
        path: "/login",
      });
    }
  } else {
    if (
      to.matched.some(
        (record) =>
          typeof record.meta.requiresAuth === "boolean" &&
          !record.meta.requiresAuth
      )
    ) {
      return next({
        path: "/",
      });
    }
  }
  return next();
});

export default router;
