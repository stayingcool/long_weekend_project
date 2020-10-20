<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <div>
          <b-jumbotron
            :header="`${destination}`"
            :lead="
              `Great friends and their families are meeting at ${destination}`
            "
            class="card-profile mt--400"
            border-variant="light"
            style="background-color: #ffffff"
          >
            <hr class="my-4" />
            <!-- <b-container fluid>
              <b-row>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/250/250/?image=54"
                    alt="Image 1"
                  ></b-img>
                </b-col>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/250/250/?image=58"
                    alt="Image 2"
                  ></b-img>
                </b-col>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    src="https://picsum.photos/250/250/?image=59"
                    alt="Image 3"
                  ></b-img>
                </b-col>
              </b-row>
            </b-container> -->
            <div v-if="!showInvitationForm">
              <p>Click to invite your family & friends.</p>
              <base-button
                variant="primary"
                v-on:click="showInvitationForm = true"
                >Share</base-button
              >
            </div>

            <b-form
              role="form"
              v-if="showInvitationForm"
              @submit="inviteOthers"
            >
              <b-form-group
                id="input-group-2"
                label="Enter the email address of the person you want to invite:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="email"
                  required
                  v-model="invitationForm.emailAddress"
                  placeholder="Email Address"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Subject:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  required
                  v-model="invitationForm.emailSubject"
                  placeholder="Email Address"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-4"
                label="Body:"
                label-for="input-4"
              >
                <b-form-textarea
                  id="input-4"
                  v-model="invitationForm.emailBody"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <div class="text-center">
                <b-button type="submit" variant="primary">Send</b-button>
              </div>
              <div class="container">
                <div>
                  <small>Share through social media:</small>
                </div>
                <a
                  target="_blank"
                  rel="noopener"
                  class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <i class="fa fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
                  data-toggle="tooltip"
                  data-original-title="Like us"
                >
                  <i class="fa fa-facebook-square"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <i class="fa fa-dribbble"></i>
                </a>
              </div>
            </b-form>
          </b-jumbotron>
        </div>
        <!-- </card> -->
      </div>
    </section>

    <br />

    <section class="section mu--400">
      <div class="container">
        <div>
          <b-jumbotron
            header="Participants"
            :lead="
              `All those who are coming or would be coming to ${destination}`
            "
            class="card-profile mt--400"
            border-variant="light"
            style="background-color: #ffffff"
          >
            <hr class="my-4" />
            <div>
              <tabs fill class="flex-column flex-md-row">
                <card shadow>
                  <tab-pane>
                    <span slot="title">
                      <i class="ni ni-cloud-upload-96"></i>
                      Confirmed
                    </span>
                    <b-list-group flush>
                      <b-list-group-item
                        v-for="p in participant"
                        :key="p.id"
                        v-if="p.confirmed"
                        >{{ p.name }}</b-list-group-item
                      >
                    </b-list-group>
                  </tab-pane>

                  <tab-pane title="Profile">
                    <span slot="title">
                      <i class="ni ni-bell-55 mr-2"></i>
                      Pending Confirmation
                    </span>
                    <b-list-group flush>
                      <b-list-group flush>
                        <b-list-group-item
                          v-for="p in participant"
                          :key="p.id"
                          v-if="!p.confirmed"
                          >{{ p.name }}</b-list-group-item
                        >
                      </b-list-group>
                    </b-list-group>
                  </tab-pane>
                </card>
              </tabs>
            </div>
          </b-jumbotron>
        </div>
        <!-- </card> -->
      </div>
    </section>

    <section class="section mu--400">
      <div class="container">
        <div>
          <b-jumbotron
            header="Food"
            :lead="`Tasty stuff for your taste buds at ${destination}`"
            class="card-profile mt--400"
            border-variant="light"
            style="background-color: #ffffff"
          >
            <hr class="my-4" />
            <div>
              <tabs fill class="flex-column flex-md-row">
                <card shadow>
                  <tab-pane
                    :title="`${item.day}`"
                    v-for="item in vacationDays"
                    :key="item.day"
                    @click="onMealsTabClick(item.day)"
                  >
                    <div>
                      <b-form inline @submit="onAddingMeals">
                        <div class="container ct-example-row">
                          <div class="row justify-content-md-center">
                            <div class="col-md-auto">
                              <b-input
                                id="inline-form-input-name"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="mealsForm.name"
                                placeholder="New Food Item"
                                required
                              ></b-input>
                            </div>
                            <div class="col-md-auto">
                              <b-form-select
                                id="input-3"
                                v-model="mealsForm.mealType"
                                :options="mealOptions"
                                required
                              ></b-form-select>
                            </div>
                            <div class="col-md-auto">
                              <b-form-select
                                id="input-3"
                                v-model="mealsForm.mealDate"
                                :options="daysOptions"
                                required
                              ></b-form-select>
                            </div>

                            <div class="col col-lg-2">
                              <b-button variant="primary" type="submit"
                                >Add</b-button
                              >
                            </div>
                          </div>
                        </div>
                      </b-form>
                      <b-tabs content-class="mt-3" align="center">
                        <b-tab title="Breakfast" active>
                          <b-list-group flush>
                            <b-list-group-item
                              v-for="m in meal"
                              :key="m.id"
                              v-if="
                                m.meal_type === 'Breakfast' &&
                                  m.meal_date === item.day
                              "
                              >{{ m.meal_name }}</b-list-group-item
                            >
                          </b-list-group>
                        </b-tab>
                        <b-tab title="Lunch">
                          <b-list-group flush>
                            <b-list-group-item
                              v-for="m in meal"
                              v-if="
                                m.meal_type === 'Lunch' &&
                                  m.meal_date === item.day
                              "
                              :key="m.id"
                              >{{ m.meal_name }}</b-list-group-item
                            >
                          </b-list-group>
                        </b-tab>
                        <b-tab title="Dinner">
                          <b-list-group flush>
                            <b-list-group-item
                              v-for="m in meal"
                              v-if="
                                m.meal_type === 'Dinner' &&
                                  m.meal_date === item.day
                              "
                              :key="m.id"
                              >{{ m.meal_name }}</b-list-group-item
                            >
                          </b-list-group>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </tab-pane>
                </card>
              </tabs>
            </div>
          </b-jumbotron>
        </div>
        <!-- </card> -->
      </div>
    </section>

    <section class="section mu--400">
      <div class="container">
        <div>
          <b-jumbotron
            header="Activities"
            :lead="`List of activities at ${destination}`"
            class="card-profile mt--400"
            border-variant="light"
            style="background-color: #ffffff"
          >
            <hr class="my-4" />
            <div>
              <b-tabs pills card align="center">
                <b-tab title="All" active @click="onActivityTabClick('all')"
                  ><b-card-text>
                    <b-container fluid>
                      <b-form inline @submit="onAddingActivity">
                        <div class="container ct-example-row">
                          <div class="row justify-content-md-center">
                            <div class="col-md-auto">
                              <b-input
                                id="inline-form-input-name"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                v-model="activityForm.name"
                                placeholder="New Activity"
                                required
                              ></b-input>
                            </div>
                            <div class="col-md-auto">
                              <b-form-select
                                id="input-3"
                                v-model="activityForm.activityDate"
                                :options="daysOptions"
                                required
                              ></b-form-select>
                            </div>
                            <div class="col col-lg-2">
                              <b-button variant="primary" type="submit"
                                >Add</b-button
                              >
                            </div>
                          </div>
                        </div>
                      </b-form>

                      <br />
                      <!-- Main table element 
                           thead-class - Hides the header -->

                      <b-table
                        show-empty
                        small
                        stacked="md"
                        :items="activity"
                        :fields="fields"
                        thead-class="d-none"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        :filter-included-fields="filterOn"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                        @filtered="onFiltered"
                      >
                        <template v-slot:cell(name)="row">
                          {{ row.value.activity_name }}
                        </template>

                        <template v-slot:cell(actions)="row">
                          <!-- <b-button
                            size="sm"
                            @click="info(row.item, row.index, $event.target)"
                            class="mr-1"
                          >
                            Edit
                          </b-button>
                          <b-button
                            size="sm"
                            @click="info(row.item, row.index, $event.target)"
                            class="mr-1"
                            variant="primary"
                          >
                            Delete
                          </b-button> -->

                          <b-dropdown
                            text="Action"
                            variant="outline-primary"
                            size="sm"
                            class="m-2"
                          >
                            <b-dropdown-item
                              href="#"
                              @click="info(row.item, row.index, $event.target)"
                              >Edit</b-dropdown-item
                            >
                            <b-dropdown-item href="#">Remove</b-dropdown-item>
                          </b-dropdown>
                        </template>

                        <template v-slot:row-details="row">
                          <b-card>
                            <ul>
                              <li v-for="(value, key) in row.item" :key="key">
                                {{ key }}: {{ value }}
                              </li>
                            </ul>
                          </b-card>
                        </template>
                      </b-table>

                      <!-- User Interface controls -->
                      <b-row>
                        <b-col sm="5" md="6" class="my-1">
                          <b-form-group
                            label="Per page"
                            label-cols-sm="6"
                            label-cols-md="4"
                            label-cols-lg="3"
                            label-align-sm="right"
                            label-size="sm"
                            label-for="perPageSelect"
                            class="mb-0"
                          >
                            <b-form-select
                              v-model="perPage"
                              id="perPageSelect"
                              size="sm"
                              :options="pageOptions"
                            ></b-form-select>
                          </b-form-group>
                        </b-col>

                        <b-col sm="7" md="6" class="my-1">
                          <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            align="fill"
                            size="sm"
                            class="my-0"
                          ></b-pagination>
                        </b-col>
                      </b-row>

                      <!-- Info modal -->
                      <b-modal
                        :id="infoModal.id"
                        :title="infoModal.title"
                        ok-only
                        @hide="resetInfoModal"
                      >
                        <pre>{{ infoModal.content }}</pre>
                      </b-modal>
                    </b-container>
                  </b-card-text></b-tab
                >
                <b-tab
                  :title="item.day"
                  v-for="item in vacationDays"
                  @click="onActivityTabClick(item.day)"
                  :key="item.day"
                  ><b-card-text>
                    <b-container fluid>
                      <br />
                      <!-- Main table element  -->
                      <b-table
                        show-empty
                        small
                        stacked="md"
                        :items="activity"
                        :fields="fields"
                        thead-class="d-none"
                        :current-page="currentPage"
                        :per-page="perPage"
                        :filter="filter"
                        :filter-included-fields="filterOn"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :sort-direction="sortDirection"
                        @filtered="onFiltered"
                      >
                        <template v-slot:cell(name)="row">
                          {{ row.value.activity_name }}
                        </template>

                        <template v-slot:cell(actions)="row">
                          <!-- <b-button
                            size="sm"
                            @click="info(row.item, row.index, $event.target)"
                            class="mr-1"
                          >
                            Edit
                          </b-button>
                          <b-button
                            size="sm"
                            @click="info(row.item, row.index, $event.target)"
                            class="mr-1"
                            variant="primary"
                          >
                            Delete
                          </b-button> -->

                          <b-dropdown
                            text="Action"
                            variant="outline-primary"
                            size="sm"
                            class="m-2"
                          >
                            <b-dropdown-item
                              href="#"
                              @click="info(row.item, row.index, $event.target)"
                              >Edit</b-dropdown-item
                            >
                            <b-dropdown-item href="#">Remove</b-dropdown-item>
                          </b-dropdown>
                        </template>

                        <template v-slot:row-details="row">
                          <b-card>
                            <ul>
                              <li v-for="(value, key) in row.item" :key="key">
                                {{ key }}: {{ value }}
                              </li>
                            </ul>
                          </b-card>
                        </template>
                      </b-table>

                      <!-- User Interface controls -->
                      <b-row>
                        <b-col sm="5" md="6" class="my-1">
                          <b-form-group
                            label="Per page"
                            label-cols-sm="6"
                            label-cols-md="4"
                            label-cols-lg="3"
                            label-align-sm="right"
                            label-size="sm"
                            label-for="perPageSelect"
                            class="mb-0"
                          >
                            <b-form-select
                              v-model="perPage"
                              id="perPageSelect"
                              size="sm"
                              :options="pageOptions"
                            ></b-form-select>
                          </b-form-group>
                        </b-col>

                        <b-col sm="7" md="6" class="my-1">
                          <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            align="fill"
                            size="sm"
                            class="my-0"
                          ></b-pagination>
                        </b-col>
                      </b-row>

                      <!-- Info modal -->
                      <b-modal
                        :id="infoModal.id"
                        :title="infoModal.title"
                        ok-only
                        @hide="resetInfoModal"
                      >
                        <pre>{{ infoModal.content }}</pre>
                      </b-modal>
                    </b-container>
                  </b-card-text></b-tab
                >
              </b-tabs>
            </div>
          </b-jumbotron>
        </div>
        <!-- </card> -->
      </div>
    </section>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import {
  GET_PARTICIPANTS,
  GET_MEALS,
  ADD_ACTIVITY,
  GET_ACTIVITIES,
  ADD_MEAL,
} from "../graphql/graphql";

export default {
  components: {
    Tabs,
    TabPane,
  },
  apollo: {
    participant: {
      query: GET_PARTICIPANTS,
      variables() {
        return {
          vacation_id: this.vacationID,
        };
      },
    },
    meal: {
      query: GET_MEALS,
      variables() {
        return {
          vacation_id: this.vacationID,
        };
      },
    },
    activity: {
      query: GET_ACTIVITIES,
      variables() {
        return {
          vacation_id: this.vacationID,
        };
      },
    },
  },
  data() {
    return {
      showInvitationForm: false,
      invitationForm: {
        emailAddress: "",
        emailBody: "",
        emailSubject: "",
      },
      emailHref: "",
      participant: [],
      daysOptions: [{ text: "Select One", value: null }],
      mealOptions: [
        { text: "Select One", value: null },
        { text: "Breakfast", value: "Breakfast" },
        { text: "Lunch", value: "Lunch" },
        { text: "Dinner", value: "Dinner" },
      ],
      meal: [],
      currentVacationDate: "",
      activity: [],
      vacationID: this.$route.params.id,
      vacationDays: [],
      destination: "",
      startDate: "",
      endDate: "",
      activityName: "",
      activityForm: {
        name: "",
        activityDate: null,
      },
      mealsForm: {
        name: "",
        mealType: null,
        mealDate: null,
      },
      fields: [
        {
          key: "activity_name",
          label: "Activity Name",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "activity_date",
          label: "Date",
          sortable: true,
          sortDirection: "desc",
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      tabIndex: "",
      currentPage: 1,
      perPage: 15,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: ["activity_date"],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of activity
    this.totalRows = this.activity.length;
    this.destination = this.$route.params.destination;
    this.startDate = this.$route.params.startDate;
    this.endDate = this.$route.params.endDate;

    let allDays = this.getDatesBetweenDates(this.startDate, this.endDate);
    this.vacationDays = allDays.map((d) => ({
      day: d.toISOString().slice(0, 10),
    }));

    this.daysOptions = allDays.map((d) => d.toISOString().slice(0, 10));

    this.invitationForm.emailSubject = `Vacation Invititation: ${this.destination}`;
    this.invitationForm.emailBody = `Hello, Join me at ${this.destination} for a great outing. Look at vacation id: ${this.$route.params.id}`;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    onActivityTabClick: function(value) {
      this.activityDate = value;
      if (value === "all") {
        this.filter = "";
      } else {
        this.filter = value;
      }
    },
    onMealsTabClick: function(value) {
      console.log("onMealsTabClick. " + value);
      this.currentVacationDate = value;
    },
    inviteOthers: function(evt) {
      evt.preventDefault();

      this.emailHref = `mailto: ${this.invitationForm.emailAddress.trim()}
      ?subject=${this.invitationForm.emailSubject.trim()}&body=${
        this.invitationForm.emailBody
      }`;

      console.log(this.emailHref);

      const windowRef = window.open(this.emailHref, "_blank");

      windowRef.focus();

      setTimeout(function() {
        if (!windowRef.document.hasFocus()) {
          windowRef.close();
        }
      }, 500);
    },
    onAddingActivity: function(evt) {
      evt.preventDefault();
      this.$apollo.mutate({
        mutation: ADD_ACTIVITY,
        variables: {
          activity_name: this.activityForm.name,
          activity_date: this.activityForm.activityDate,
          vacation_id: this.vacationID,
        },
        update: (cache, { data: { insert_activity_one } }) => {
          // Read the data from our cache for this query.
          // eslint-disable-next-line
          console.log(insert_activity_one);
          try {
            const data = cache.readQuery({
              query: GET_ACTIVITIES,
              variables: { vacation_id: this.vacationID },
            });
            data.activity.splice(0, 0, insert_activity_one);
            cache.writeQuery({
              query: GET_ACTIVITIES,
              data,
            });
          } catch (e) {
            console.error(e);
          }
        },
      });
    },
    onAddingMeals: function(evt) {
      evt.preventDefault();

      // console.log(JSON.stringify(this.mealsForm));
      this.$apollo.mutate({
        mutation: ADD_MEAL,
        variables: {
          meal_date: this.mealsForm.mealDate,
          meal_name: this.mealsForm.name,
          meal_type: this.mealsForm.mealType,
          vacation_id: this.vacationID,
        },
        update: (cache, { data: { insert_meal_one } }) => {
          // Read the data from our cache for this query.
          // eslint-disable-next-line
          console.log(insert_meal_one);
          try {
            const data = cache.readQuery({
              query: GET_MEALS,
              variables: { vacation_id: this.vacationID },
            });
            data.meal.splice(0, 0, insert_meal_one);
            cache.writeQuery({
              query: GET_MEALS,
              data,
            });
          } catch (e) {
            console.error(e);
          }
        },
      });
    },

    getDatesBetweenDates: function(startDate, endDate) {
      let dates = [];
      //to avoid modifying the original date
      const theDate = new Date(startDate);
      while (theDate < new Date(endDate)) {
        dates = [...dates, new Date(theDate)];
        theDate.setDate(theDate.getDate() + 1);
      }
      dates = [...dates, new Date(endDate)];
      return dates;
    },
  },
};
</script>
<style></style>
