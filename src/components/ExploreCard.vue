<template>
  <v-card elevation="1">
    <v-img
      :src="img"
      :height="150"
      gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.9)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="red lighten-3" />
          </v-row>
        </template>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-icon :size="40" color="white">mdi-play-circle-outline</v-icon>
        </v-row>
    </v-img>
    <v-card-text>
      <p class="mb-0 primary--text">{{ day }}</p>
      <p class="title mb-0">{{ title }}</p>
    </v-card-text>
    <v-divider />
    <v-card-text class="py-2">
      <p class="mb-0">
        <v-icon small color="grey" class="mr-2">fa-map-marker</v-icon>
        <span>{{ location }}</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "explore-card",
  props: {
    title: String,
    day: String,
    img: String,
    location: String
  }
};
</script>