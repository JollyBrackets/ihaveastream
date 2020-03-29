<template>
 <v-container fluid class="pa-0">
    <v-row>
      <video autoplay loop>
        <source :src="require('@/assets/Ihaveastream-small.mp4')">
      </video>
    </v-row>
    
    <filter-bar></filter-bar>
    
    <v-container>
      <v-row class="text-center white--text">
        <v-col>
          <h1 class="my-4">Stay connected despite Corona Kack</h1>
          <p class="font-weight-bold">Bla bla Bla bla Bla bla Bla blaBla blaBla bla</p>
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
      <v-layout row>
        <v-flex xs4 class="pa-2">
          <explore-card
            title="Yoga with Adrien"
            day="Friday"
            img="https://source.unsplash.com/500x300/?yoga"
            location="Zürich, Altstetten"
          />
        </v-flex>
        <v-flex xs4 class="pa-2">
          <explore-card
            title="Soccer with FCB"
            day="Friday"
            img="https://source.unsplash.com/500x300/?soccer"
            location="Zürich, Brunau"
          />
        </v-flex>
        <v-flex xs4 class="pa-2">
          <explore-card
            title="Bootcamp @PumpItUp"
            day="Monday"
            img="https://source.unsplash.com/500x300/?workout,bootcamp"
            location="Zürich, Örlikon"
          />
        </v-flex>
      </v-layout>

      <h2 class="font-weight-light mt-5 mb-2 white--text">
        <span>Learn something new 🎓</span>

        <v-btn text icon class="right">
          <v-icon size="18" color="white">mdi-chevron-right</v-icon>
        </v-btn>
      </h2>
      <v-layout row>
        <v-flex xs4 class="pa-2">
          <explore-card
            title="Web Development"
            day="Thursdays"
            img="https://source.unsplash.com/500x300/?coding,web"
            location="Zürich, Altstetten"
          />
        </v-flex>
        <v-flex xs4 class="pa-2">
          <explore-card
            title="Accounting with Max"
            day="Friday"
            img="https://source.unsplash.com/500x300/?accounting,money"
            location="Zürich, Brunau"
          />
        </v-flex>
        <v-flex xs4 class="pa-2">
          <explore-card
            title="Spanish for flirting"
            day="Monday"
            img="https://source.unsplash.com/500x300/?spanish,language,learning"
            location="Zürich, Örlikon"
          />
        </v-flex>
      </v-layout>
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