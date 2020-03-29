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
        <v-col>
          <h1 class="my-4">{{ heroTitle[Math.floor(Math.random() * heroTitle.length)] }}</h1>
          <p class="font-weight-bold">{{ heroMessage[Math.floor(Math.random() * heroMessage.length)] }}</p>
          <v-btn text class="text-none primary" @click="$router.push('create-stream')">
            I HAVE A STREAM
          </v-btn>
        </v-col>
      </v-row>

      <h2 class="font-weight-light mt-5 mb-2 white--text">
        <span>Let's work out!</span>
        <v-btn text icon class="right">
          <v-icon size="18" color="white">mdi-chevron-right</v-icon>
        </v-btn>
      </h2>
      <v-row>
        <v-col cols="12" sm="6" md="4" class="pa-2">
          <explore-card
            title="Yoga with Adrien"
            day="Friday"
            img="https://source.unsplash.com/500x300/?yoga"
            location="Zürich, Altstetten"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-2">
          <explore-card
            title="Soccer with FCB"
            day="Friday"
            img="https://source.unsplash.com/500x300/?soccer"
            location="Zürich, Brunau"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-2">
          <explore-card
            title="Bootcamp @PumpItUp"
            day="Monday"
            img="https://source.unsplash.com/500x300/?workout,bootcamp"
            location="Zürich, Örlikon"
          />
        </v-col>
      </v-row>

      <h2 class="font-weight-light mt-5 mb-2 white--text">
        <span>Learn something new 🎓</span>

        <v-btn text icon class="right">
          <v-icon size="18" color="white">mdi-chevron-right</v-icon>
        </v-btn>
      </h2>
      <v-row>
        <v-col cols="12" sm="6" md="4" class="pa-2">
          <explore-card
            title="Web Development"
            day="Thursdays"
            img="https://source.unsplash.com/500x300/?coding,web"
            location="Zürich, Altstetten"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-2">
          <explore-card
            title="Accounting with Max"
            day="Friday"
            img="https://source.unsplash.com/500x300/?accounting,money"
            location="Zürich, Brunau"
          />
        </v-col>
        <v-col cols="12" sm="6" md="4" class="pa-2">
          <explore-card
            title="Spanish for flirting"
            day="Monday"
            img="https://source.unsplash.com/500x300/?spanish,language,learning"
            location="Zürich, Örlikon"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ExploreCard from '@/components/ExploreCard.vue'
import FilterBar from '@/components/FilterBar.vue'
export default {
  components: { ExploreCard, FilterBar },
  name: 'Home',
  data: () => ({
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