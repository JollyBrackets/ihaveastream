<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Create Your Stream</h1>

        <p>
          <a
            href="https://www.boxcast.com/blog/how-to-start-live-streaming"
            target="blank"
          >Here is a really helpful article to get started</a>
        </p>

        <v-dialog v-model="dialog" width="1000">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="ml-4">I need some help</v-btn>
          </template>

          <v-card>
            <v-card-title class="headline" primary-title>Privacy Policy</v-card-title>

            <v-card-text>
              <p class="subheading mt-12">Here is an easy flow chart to get you started</p>
              <v-img src="@/assets/flowchart.png">
                <template v-slot:placeholder>
                  <loader />
                </template>
              </v-img>

              <p class="subheading mt-12">And an overview of the most important features</p>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Free</th>
                      <th class="text-left">Restrictions for free plan</th>
                      <th class="text-left">Interaction</th>
                      <th class="text-left">Focus Topic</th>
                      <th class="text-left">Ads</th>
                      <th class="text-left">Needs</th>
                      <th class="text-left">Privacy Lock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="provider in providers" :key="provider.name">
                      <td>{{ provider.name }}</td>
                      <td>{{ provider.free }}</td>
                      <td>{{ provider.restrictions }}</td>
                      <td>{{ provider.interactions }}</td>
                      <td>{{ provider.topic }}</td>
                      <td>{{ provider.ads }}</td>
                      <td>{{ provider.needs }}</td>
                      <td>{{ provider.privacy }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="6">
              <p class="title primary--text mb-0">Tell us about your stream</p>
              <p class="caption">This </p>

              <v-text-field
                v-model="name"
                label="Name"
                required
                :rules="[v => !!v || 'Name is required']"
              />

              <v-text-field
                v-model="description"
                label="Description"
                required
                :rules="[v => !!v || 'Description is required']"
              />

              <v-text-field
                v-model="price"
                label="Price"
              />

              <v-select
                v-model="interaction"
                :items="interactionOptions"
                :rules="[v => !!v || 'Item is required']"
                label="Interaction"
                required
              ></v-select>

              <v-select
                v-model="duration"
                :items="durationOptions"
                :rules="[v => !!v || 'Item is required']"
                label="Duration"
                required
              ></v-select>

              <v-select
                v-model="category"
                :items="categoryOptions"
                :rules="[v => !!v || 'Item is required']"
                label="Category"
                required
              ></v-select>

              <v-select
                v-model="language"
                :items="languageOptions"
                :rules="[v => !!v || 'Item is required']"
                label="Language"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <p class="title primary--text mb-0">Tell us about your first session</p>
              <p class="caption">You'll be able to add more sessions later!</p>

              <v-select
                v-model="tech"
                :items="techOptions"
                :rules="[v => !!v || 'Item is required']"
                label="Streaming Platform"
                required
              ></v-select>

              <v-text-field
                v-model="url"
                label="Stream URL"
                required
                :rules="[v => !!v || 'URL is required']"
              />

              <v-menu
                ref="dateMenu"
                v-model="dateMenu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-on="on"
                    required
                    :rules="[v => !!v || 'Date is required']"
                  />
                </template>
                <v-date-picker v-model="date" no-title @input="dateMenu = false"></v-date-picker>
              </v-menu>

              <v-menu
                ref="timeMenu"
                v-model="timeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="time"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    label="Picker in menu"
                    prepend-icon="mdi-clock-outline"
                    readonly
                    v-on="on"
                    required
                    :rules="[v => !!v || 'Time is required']"
                  />
                </template>
                <v-time-picker
                  v-if="timeMenu"
                  v-model="time"
                  full-width
                  @click:minute="$refs.timeMenu.save(time)"
                  format="24hr"
                ></v-time-picker>
              </v-menu>

            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                @click="createStream"
                class="float-right"
                color="primary"
                :loading="loading"
              >
              Create My Stream
            </v-btn>

            </v-col>
          </v-row>
        </v-form>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
export default {
  name: "Create",
  data: () => ({
    loading: false,
    dialog: false,
    dateMenu: false,
    timeMenu: false,
    valid: false,
    name: null,
    description: null,
    price: 0,
    interaction: "view",
    duration: "30",
    category: null,
    language: "en",
    tech: null,
    url: null,
    date: null,
    time: null,
    providers: [
      {
        name: "Zoom",
        free: "Freemium",
        restrictions: "100 video participants or 10k viewers Max 40min",
        interactions: "Both",
        topic: "-",
        ads: "No",
        needs: "-",
        privacy: "Yes"
      },
      {
        name: "GH",
        free: "Free",
        restrictions: "100video participants",
        interactions: "Both",
        topic: "-",
        ads: "No",
        needs: "-",
        privacy: "Yes"
      },
      {
        name: "Twitch",
        free: "Free",
        restrictions: "-",
        interactions: "Chat",
        topic: "Gaming",
        ads: "No",
        needs: "Broadcasting Software",
        privacy: "No"
      },
      {
        name: "YT",
        free: "Free",
        restrictions: "Need >100 subscribers",
        interactions: "Chat",
        topic: "-",
        ads: "Yes",
        needs: "-",
        privacy: "Yes"
      },
      {
        name: "FB",
        free: "Free",
        restrictions: "Max 4h",
        interactions: "Chat",
        topic: "-",
        ads: "No",
        needs: "-",
        privacy: "Yes"
      },
      {
        name: "Insta",
        free: "Free",
        restrictions: "Max 1h",
        interactions: "Chat",
        topic: "Personal Life",
        ads: "No",
        needs: "-",
        privacy: "No (Followers)"
      },
      {
        name: "Skype",
        free: "Free",
        restrictions: "50 video participants or 10k viewers",
        interactions: "Both",
        topic: "Business & Screensharing ",
        ads: "No",
        needs: "Office365 or Skype Business",
        privacy: "Yes"
      },
      {
        name: "Vimeo",
        free: "No",
        restrictions: "-",
        interactions: "Chat",
        topic: " Multistream",
        ads: "No",
        needs: "PC & Encoding Software",
        privacy: "Yes"
      },
      {
        name: "dacast",
        free: "No",
        restrictions: "-",
        interactions: "Both",
        topic: "Professional streaming",
        ads: "No / custom",
        needs: "-",
        privacy: "Yes + paywall"
      }
    ],
    techOptions: [
      { value: "vimeo", text: "Vimeo" },
      { value: "youtube", text: "Youtube" },
      { value: "zoom", text: "Zoom" }
    ],
    durationOptions: [
      { value: "15", text: "15" },
      { value: "30", text: "30" },
      { value: "60", text: "60" },
      { value: "120", text: "120" },
      { value: "open", text: "open" }
    ],
    interactionOptions: [
      { value: "view", text: "view only" },
      { value: "chat", text: "with text chat" },
      { value: "class", text: "with video chat" }
    ],
    categoryOptions: [
      { value: "sport", text: "Sport" },
      { value: "dancing", text: "Dancing" },
      { value: "cooking", text: "Cooking" },
      { value: "chat", text: "Drinks & Chat" },
      { value: "meditation", text: "Meditation & Spirituality" },
      { value: "arts", text: "Arts & Crafts & Music" },
      { value: "education", text: "Educational & Languages" },
      { value: "entertainment", text: "Gaming & Media" },
      { value: "kids", text: "Kids Entertainment" },
      { value: "other", text: "Other" }
    ],
    languageOptions: [
      { value: "ch", text: "Swiss German" },
      { value: "de", text: "German" },
      { value: "en", text: "English" },
      { value: "fr", text: "French" },
      { value: "es", text: "Spanish" },
      { value: "it", text: "Italian" }
    ]
  }),
  methods: {
    createStream() {
      this.$refs.form.validate()
      
      if (this.valid) {
        this.loading = true
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("description", this.description);
        formData.append("price", this.price);
        formData.append("interaction", this.interaction);
        formData.append("duration", this.duration);
        formData.append("category", this.category);
        formData.append("zip", 9000);
        formData.append("country", "CH");
        formData.append("language", this.language);

        this.$http.post("api/v1/streams/", formData).then(response => {
          const stream = response.data;

          const formData = new FormData();
          formData.append("title", "title");
          formData.append("description", "description");
          formData.append("tech", this.tech);
          formData.append("url", this.url);
          formData.append("start", moment(this.date  + ' ' + this.time).toISOString());

          this.$http.post(`api/v1/streams/${stream.id}/add_session/`, formData).then(() => {
            this.resetForm()
            this.loading = false
            this.$router.push('/profile')
          })
        });
      }
    },
    resetForm() {
      this.dialog = false;
      this.valid = false;
      this.name = null;
      this.description = null;
      this.price = 0;
      this.interaction = "view";
      this.duration = "30";
      this.category = null;
      this.language = "en";
      this.tech = null
      this.url = null
      this.date = null
      this.time = null
    }
  }
};
</script>
