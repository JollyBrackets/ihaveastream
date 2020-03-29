<template>
  <v-container>
    <v-row v-if="user">
      <v-col cols="12" sm="3" class="pa-2 text-center">
        <v-avatar size="120" class="elevation-2 mt-12">
          <v-img :src="user.picture">
            <template v-slot:placeholder>
              <loader />
            </template>
          </v-img>
        </v-avatar>
        <p class="title mt-5 mb-0">{{ user.firstName }} {{ user.lastName }}</p>
        <p class=".body-1">{{ user.country }} - {{ user.city }}</p>
      </v-col>

      <v-col cols="12" sm="9" class="pa-2">
        <p class="title">Subscription details</p>
        <v-list two-line v-for="subscription in subscriptions" :key="subscription.name">
          <v-list-item class="elevation-2">
            <v-list-item-avatar>
              <v-img :src="user.picture"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-row>
                <v-col>
                  <v-list-item-title>
                    <span>{{ subscription.name }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ subscription.streamer }}</v-list-item-subtitle>
                </v-col>
                <v-col class="text-right">
                  <v-chip x-small color="primary" class="text-right mx-2">Music</v-chip>
                  <v-chip x-small color="primary" class="text-right mx-2">Music</v-chip>
                  <v-chip x-small color="primary" class="text-right mx-2">Music</v-chip>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <!-- <pre>
                {{ user }}
        </pre>-->
      </v-col>
    </v-row>

    <v-row class="fill-height ma-0" align="center" justify="center" v-else>
      <v-progress-circular indeterminate color="red lighten-3" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    user: null,
    subscriptions: [
      { name: "My Stream", streamer: "Marco Polo" },
      { name: "Music Live", streamer: "Bosse" }
    ]
  }),
  async created() {
    this.$http.get("api/v1/users/me").then(response => {
      this.user = response.data
    })

  }
};
</script>
