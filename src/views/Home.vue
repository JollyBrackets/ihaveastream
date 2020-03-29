<template>
 <v-container fluid class="pa-0">
    <v-row>
      <video autoplay muted loop>
        <source :src="require('@/assets/Ihaveastream-small.mp4')">
      </video>
    </v-row>
    
    <filter-bar></filter-bar>
    
    <v-container>
      <v-row class="text-center white--text">
        <v-col class="py-12">
          <p class="display-1 text-uppercase">{{ heroTitle[Math.floor(Math.random() * heroTitle.length)] }}</p>
          <p class="headline">{{ heroMessage[Math.floor(Math.random() * heroMessage.length)] }}</p>
          <v-btn text class="accent mx-5" @click="$vuetify.goTo('#discover')">
            Discover Streams
          </v-btn>
          <v-btn text class="primary mx-5" @click="$router.push('create-stream')">
            I have a stream
          </v-btn>
        </v-col>
      </v-row>

      <template v-if="streams">
        <v-container fluid v-for="category in Object.keys(categories)" :key="category">
          <h2 class="font-weight-light mt-5 mb-2 white--text" id="discover">
            <span>{{ category }}</span>
            <v-btn text icon class="right">
              <v-icon size="18" color="white">mdi-chevron-right</v-icon>
            </v-btn>
          </h2>
          <v-row>
            <v-col cols="12" sm="6" md="4" class="pa-2" v-for="stream in categories[category]" :key="stream.id">
              <explore-card
                :stream="stream"
              />
            </v-col>
          </v-row>
        </v-container>
      </template>
      
    </v-container>
  </v-container>
</template>

<script>
import ExploreCard from '@/components/ExploreCard.vue'
import FilterBar from '@/components/FilterBar.vue'
export default {
  components: { ExploreCard, FilterBar },
  name: 'Home',
  async created () {
    const response = await this.$http.get(`api/v1/streams`)
    this.streams = response.data  
  },
  computed: {
    categories () {
      return this.streams.reduce((categories, stream) => {
        categories[stream.category] = [
          ...(categories[stream.category] || []),
          stream
        ]
        return categories
      }, {})
    }
  },
  data: () => ({
    streams: null,
    heroTitle: [
      'Connected despite Corona',
      'Time to connect',
      'Connecting Streamers and Streamees',
      'Live streams around you'
    ],
    heroMessage: [
      "Transition your business into streaming",
      "Help your business with a stream",
      "Discover your streamed self",
      "De-quarantine your business through streaming",
      "Reach your students via stream",
      "Stay connected to your customers",
      "Don’t quarantine your passions",
      "Don’t quarantine your curiosity",
      "Connect digitally with everyone around you",
      "Don’t lose your routine",
      "Your new spanish teacher is waiting for you",
      "Have you ever dreamed of dancing in your living room?",
      "Bringing the dance floor to your living room!",
      "I know you want to improve your drawing skills"
    ]
  })
}
</script>

<style scoped>
video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1
}
</style>