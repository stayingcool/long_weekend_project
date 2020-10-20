<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <div class="text-center text-muted mb-4">
                <h5>Sign in</h5>
              </div>
              <div>
                <b-form @submit="onSubmit">
                  <base-input
                    alternative
                    required
                    type="email"
                    class="mb-3"
                    id="username"
                    placeholder="Your email..."
                    v-model="login.username"
                    addon-left-icon="ni ni-email-83"
                  ></base-input>

                  <base-input
                    alternative
                    required
                    v-model="login.pw"
                    id="pw"
                    type="password"
                    placeholder="Password"
                    addon-left-icon="ni ni-lock-circle-open"
                  ></base-input>

                  <div class="text-center">
                    <b-button type="submit" variant="primary">Sign In</b-button>
                  </div>
                  <br />

                  <base-alert type="default" v-if="this.login.errorMsg !== ''">
                    <strong>Failed!</strong>
                    {{ this.login.errorMsg }}
                  </base-alert>
                </b-form>
              </div>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
              <!-- 
                <small>Forgot password?</small>
                -->
              </a>
            </div>
            <div
              class="col-6 text-right"
              @click="
                $router.push({
                  name: 'register',
                })
              "
            >
              <a href="#" class="text-light">
                <small>Create new account</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Auth } from "aws-amplify";
import Router from "vue-router";
import { Cache } from "aws-amplify";
import { signIn } from "@/utils/auth.js";

export default {
  data() {
    return {
      name: "SignIn",
      login: {
        username: "",
        pw: "",
        errorMsg: "",
      },
    };
  },
  methods: {
    getTokens(session) {
      return {
        accessToken: session.getAccessToken().getJwtToken(),
        idToken: session.getIdToken().getJwtToken(),
        refreshToken: session.getRefreshToken().getToken(),
      };
    },
    async onSubmit(evt) {
      evt.preventDefault();
      signIn(this.login.username, this.login.pw);
    },
  },
};
</script>
<style></style>
