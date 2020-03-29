<template>
  <v-container>
    <v-row v-if="stream">
      <v-col cols="9">
        <video controls style="max-width: 100%">
          <source :src="require('@/assets/Ihaveastream-small.mp4')">
        </video>
        <h1>Sample Streaming video</h1>

        <p class="title">Live right now</p>
        <p class="title">Next Stream: 12.04.2020 - 09:20</p>
      </v-col>
      <v-col cols="3">
        <p class="subheading">Upcomming streams</p>
        <v-card>
          <video controls style="max-width: 100%">
            <source :src="require('@/assets/Ihaveastream-small.mp4')">
          </video>
          <v-card-text>
            <v-btn small>Add to calender</v-btn>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>

    <!-- Loader -->
    <v-row class="fill-height ma-0" align="center" justify="center" v-else>
      <v-progress-circular indeterminate color="primary" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    stream: null
  },
  name: "Stream",
  data: () => ({}),
  created () {
    this.stream = true 
  }
};
</script>
