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

        <p>
          <a
            href="https://docs.google.com/forms/d/1-LOLNv0sPoTH8010voWzZX4vXDcwvDjoGd61p7KcTrM/viewform?edit_requested=true"
            target="blank"
          >Form to create your stream</a>
        </p>

        <v-btn @click="createStream">create</v-btn>

        <v-dialog v-model="dialog" width="1000">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="ml-4">
              I need some help
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline" primary-title>
              Privacy Policy
            </v-card-title>

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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Create",
  data: () => ({
    dialog: false,
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
    ]
  }),
  methods: {
    createStream() {
      const formData = new FormData();
      formData.append("name", "name");
      formData.append("description", "description");
      formData.append("price", 0);
      formData.append("interaction", "view");
      formData.append("duration", "30");
      formData.append("category", "sport");
      formData.append("zip", 9000);
      formData.append("country", "CH");
      formData.append("language", "de");

      this.$http.post("api/v1/streams/", formData).then(response => {
        const stream = response.data;

        const formData = new FormData();
        formData.append("title", "title");
        formData.append("description", "description");
        formData.append("tech", "youtube");
        formData.append("url", "https://google.ch");
        formData.append("start", new Date().toISOString());

        this.$http.post(`api/v1/streams/${stream.id}/add_session/`, formData);
      });
    }
  }
};
</script>
