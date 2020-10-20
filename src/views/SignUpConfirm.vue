<template>
  <div class="confirm">
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
          <b-jumbotron
            header="Confirm Account" 
            lead="Enter the passcode sent to your email"
          >
            <b-form role="form" @submit="onCodeConfirmation">
              <b-form-group
                id="input-group-2"
                label="Your Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="email"
                  required
                  v-model="email"
                  placeholder="Email Address"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Code:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  required
                  v-model="code"
                  placeholder="Enter Code"
                ></b-form-input>
              </b-form-group>

              <div class="text-center">
                <b-button type="submit" variant="primary"
                  >Confirm account</b-button
                >
                <b-button @click="onResendCode" variant="secondary"
                  >Resend Code</b-button
                >
              </div>
            </b-form>
          </b-jumbotron>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { confirmSignUp, resendSignUp } from "@/utils/auth.js";
export default {
  name: "signupconfirm",
  data() {
    return {
      valid: false,
      email: "",
      code: "",
    };
  },
  computed: {
    emailRules() {
      return [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ];
    },
    codeRules() {
      return [
        (v) => !!v || "Code is required",
        (v) => (v && v.length === 6) || "Code must be 6 digits",
      ];
    },
  },
  methods: {
    onCodeConfirmation() {
        console.log(`CONFIRM email: ${this.email}, code: ${this.code}`);
        confirmSignUp(this.email, this.code);

    },
    onResendCode() {
      console.log(`RESEND email: ${this.email}`);
      resendSignUp(this.email);
    },
  },
};
</script>
