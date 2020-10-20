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
                <small>SIGN UP</small>
              </div>
              <b-form role="form" @submit="onSubmit">
                <b-form-group
                  id="input-group-2"
                  label="Your Name:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    required
                    v-model="form.name"
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-1" label="Email address:">
                  <b-form-input
                    id="input-1"
                    type="email"
                    v-model="form.email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Password:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    required
                    v-model="form.password"
                    type="password"
                    placeholder="Enter Password"
                  ></b-form-input>
                </b-form-group>

                <div class="text-center">
                  <b-button type="submit" variant="primary"
                    >Create account</b-button
                  >
                </div>
              </b-form>
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
                  name: 'login',
                })
              "
            >
              <a href="#" class="text-light">
                <small>Back to Login</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { signUp } from "@/utils/auth.js";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      signUp(this.form.email, this.form.password, this.form.name);
    },
  },
};
</script>
<style></style>
