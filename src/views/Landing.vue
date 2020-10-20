<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-12">
                <section class="section section-lg pt-lg-0 mt--200">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-12">
                        <div class="row justify-content-center">
                          <base-button
                            v-on:click="getStartLocation = true"
                            type="info"
                            v-if="source !== '' && !getStartLocation"
                          >
                            <span>From: {{ source }}</span>
                          </base-button>

                          <base-button
                            v-on:click="getDestinationLocation = true"
                            type="info"
                            v-if="destination !== '' && !getDestinationLocation"
                          >
                            <span>To: {{ destination }}</span>
                          </base-button>

                          <base-button
                            v-on:click="getStartDate = true"
                            type="info"
                            v-if="dates.start !== '' && !getStartDate"
                          >
                            <span>Start Date: {{ dates.start }}</span>
                          </base-button>

                          <base-button
                            v-on:click="getStartDate = true"
                            type="info"
                            v-if="dates.end !== '' && !getEndDate"
                          >
                            <span>End Date: {{ dates.end }}</span>
                          </base-button>
                        </div>
                        <div class="row row-grid">
                          <div class="col-lg-12">
                            <div class="row" id="iwt1">
                              <div class="cell" id="i91a">
                                <div id="ijsk">
                                  <div id="example-1">
                                    <transition name="slide-fade">
                                      <input
                                        autocomplete="off"
                                        v-on:keyup.enter="
                                          onGettingDestinationLocation
                                        "
                                        v-if="getDestinationLocation"
                                        placeholder="Where are you going to?"
                                        class="input"
                                        id="ihse"
                                        v-model="destination"
                                      />
                                    </transition>
                                  </div>
                                  <div id="example-1">
                                    <transition name="slide-fade">
                                      <input
                                        autocomplete="off"
                                        v-on:keyup.enter="
                                          onGettingSourceLocation
                                        "
                                        v-if="getStartLocation"
                                        placeholder="Where are you starting from?"
                                        class="input"
                                        id="ihse"
                                        v-model="source"
                                      />
                                    </transition>
                                  </div>

                                  <div id="example-1">
                                    <transition name="slide-fade">
                                      <div v-if="getStartDate">
                                        <h3 class="text-center">
                                          When are you starting?
                                          <small class="text-muted"
                                            >Time to enjoy!
                                          </small>
                                        </h3>
                                        <base-input
                                          addon-left-icon="ni ni-calendar-grid-58"
                                        >
                                          <flat-picker
                                            slot-scope="{ focus, blur }"
                                            @on-open="focus"
                                            @on-close="blur"
                                            @on-change="onGettingStartDate"
                                            :config="{
                                              allowInput: false,
                                            }"
                                            class="form-control datepicker"
                                            v-model="dates.start"
                                          >
                                          </flat-picker>
                                        </base-input>
                                      </div>
                                    </transition>
                                  </div>

                                  <div id="example-1">
                                    <transition name="slide-fade">
                                      <div v-if="getEndDate">
                                        <h3 class="text-center">
                                          When are you coming back?
                                          <small class="text-muted"
                                            >Home sweet home!
                                          </small>
                                        </h3>
                                        <base-input
                                          addon-left-icon="ni ni-calendar-grid-58"
                                        >
                                          <flat-picker
                                            slot-scope="{ focus, blur }"
                                            @on-open="focus"
                                            @on-close="blur"
                                            @on-change="onGettingEndDate"
                                            :config="{
                                              allowInput: false,
                                            }"
                                            class="form-control datepicker"
                                            v-model="dates.end"
                                          >
                                          </flat-picker>
                                        </base-input>
                                      </div>
                                    </transition>
                                  </div>

                                  <div id="example-1">
                                    <transition name="slide-fade">
                                      <div v-if="getTravelMode">
                                        <h3 class="text-center">
                                          What's your means of reaching the
                                          destination?
                                          <small class="text-muted"
                                            >Happy Travelling!
                                          </small>
                                        </h3>

                                        <div class="row justify-content-center">
                                          <b-form-radio-group
                                            id="btn-radios-2"
                                            v-model="travelMode"
                                            :options="options"
                                            @change="onGettingTravelMode"
                                            buttons
                                            size="lg"
                                            name="radio-btn-outline"
                                          ></b-form-radio-group>
                                        </div>

                                        <div class="row justify-content-center">
                                          <base-button
                                            type="default"
                                            v-if="showSubmit"
                                            icon="ni ni-user-run"
                                            v-on:click="onSubmit"
                                            >I'm all good, Create
                                            Vacation!</base-button
                                          >
                                        </div>
                                      </div>
                                    </transition>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section class="section section-lg pt-lg-0 mt--200">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="row row-grid">
                <div
                  class="col-lg-4 list-item"
                  v-for="v in vacation"
                  :key="v.id"
                >
                  <div class="mt-3">
                    <b-card-group deck>
                      <b-card
                        border-variant="primary"
                        header-bg-variant="primary"
                        header-text-variant="white"
                        align="center"
                        :header="v.dest_loc"
                      >
                        <b-list-group flush>
                        <b-list-group-item
                            >ID: {{ v.id }}</b-list-group-item
                          >
                          <b-list-group-item
                            >From: {{ v.start_loc }}</b-list-group-item
                          >
                          <b-list-group-item
                            >Start: {{ v.start_date }}</b-list-group-item
                          >
                          <b-list-group-item
                            >End : {{ v.end_date }}</b-list-group-item
                          >
                        </b-list-group>

                        <b-card-footer>
                          <b-button
                            @click="
                              $router.push({
                                name: 'vacation',
                                params: {
                                  id: v.id,
                                  destination: v.dest_loc,
                                  startDate: v.start_date,
                                  endDate: v.end_date,
                                },
                              })
                            "
                            variant="primary"
                            >Go</b-button
                          >
                        </b-card-footer>
                      </b-card>
                    </b-card-group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <modal
      :show.sync="showModal"
      gradient="primary"
      modal-classes="modal-primary modal-dialog-centered"
    >
      <h6 slot="header" class="modal-title" id="modal-title-notification">
        Your vacation is ready!
      </h6>

      <div class="py-3 text-center">
        <i class="ni ni-bell-55 ni-3x"></i>
        <h4 class="heading mt-4">Congratulations!</h4>
        <p>
          You can go and add more details or share this with your friends to
          update this vacation colaboratively!
        </p>
      </div>

      <template slot="footer">
        <base-button type="white">Add Details</base-button>
        <!-- 
        <base-button type="link" text-color="white">Share</base-button>
        -->
        <base-button
          type="link"
          text-color="white"
          class="ml-auto"
          @click="showModal = false"
        >
          Close
        </base-button>
      </template>
    </modal>
  </div>
</template>

<script>
import styles from "../assets/css/Landing.css";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Modal from "@/components/Modal.vue";
import {
  ALL_VACATIONS,
  ADD_VACATION,
  ADD_PARTICIPANT,
} from "../graphql/graphql";

export default {
  components: { flatPicker, Modal },
  data() {
    return {
      getDestinationLocation: true,
      getStartLocation: false,
      getStartDate: false,
      getEndDate: false,
      getTravelMode: false,
      showSubmit: false,
      travelMode: "",
      source: "",
      destination: "",
      showModal: false,
      value: ["apple", "orange", "banana"],
      dates: {
        start: "",
        end: "",
      },
      options: [
        { text: "Flight", value: "flight" },
        { text: "Car", value: "car" },
        { text: "Train", value: "train" },
        { text: "Bus", value: "bus" },
      ],
      // vacations: [],
      vacation: [],
    };
  },
  apollo: {
    // fetch all users
    vacation: {
      query: ALL_VACATIONS,
      variables() {
        return {
          user_id: localStorage.getItem("loggedInUserID"),
        };
      },
    },
  },
  methods: {
    onGettingDestinationLocation: function() {
      this.getDestinationLocation = false;
      this.getStartLocation = true;
    },
    onGettingSourceLocation: function() {
      this.getStartLocation = false;
      this.getStartDate = true;
    },
    onGettingStartDate: function() {
      this.getStartDate = false;
      this.getEndDate = true;
    },
    onGettingEndDate: function() {
      this.getEndDate = false;
      this.getTravelMode = true;
    },
    onGettingTravelMode: function() {
      this.getTravelMode = true;
      this.showSubmit = true;
    },
    onSubmit: function() {
      // add new vacation
      this.$apollo
        .mutate({
          mutation: ADD_VACATION,
          variables: {
            dest_loc: this.destination && this.destination.trim(),
            end_date: this.dates.end,
            start_date: this.dates.start,
            start_loc: this.source && this.source.trim(),
            travel_mode: this.travelMode && this.travelMode.trim(),
            // TBD get this from auth service
            user_id: localStorage.getItem("loggedInUserID"),
          },
          update: (cache, { data: { insert_vacation_one } }) => {
            // Read the data from our cache for this query.
            try {
              const data = cache.readQuery({
                query: ALL_VACATIONS,
                variables: { user_id: localStorage.getItem("loggedInUserID") },
              });
              data.vacation.splice(0, 0, insert_vacation_one);
              cache.writeQuery({
                query: ALL_VACATIONS,
                data,
              });
            } catch (e) {
              console.error(e);
            }
          },
        })
        .then(({ data: { insert_vacation_one } }) => {
          let userIDD = insert_vacation_one.user_id;
          let idddd = insert_vacation_one.id;

          debugger;

          this.$apollo.mutate({
            mutation: ADD_PARTICIPANT,
            variables: {
              confirmed: true,
              name: localStorage.getItem("loggedInUserName"),
              user_id: insert_vacation_one.user_id,
              vacation_id: insert_vacation_one.id,
            },
          });
        })
        .catch((error) => {
          // Error
          console.error(error);
        });

      this.getTravelMode = false;
      this.getDestinationLocation = true;

      this.showModal = true;
      this.travelMode = "";
      this.source = "";
      this.destination = "";
      this.dates.start = "";
      this.dates.end = "";
    },
  },
};
</script>
