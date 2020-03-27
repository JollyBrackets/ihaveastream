<template>
 <v-container fluid class="pa-0">
    <v-container>
      <v-layout>
        <v-btn text large class="text-none flex">
          <v-icon small color="grey" class="mr-2">mdi-map</v-icon>
          <span>Zürich</span>
        </v-btn>

        <v-btn text large class="text-none flex">
          <v-icon small color="grey" class="mr-2">mdi-web</v-icon>
          <span>English</span>
        </v-btn>

        <v-btn text large class="text-none flex">
          <v-icon small color="grey" class="mr-2">mdi-currency-usd</v-icon>
          <span>> 200</span>
        </v-btn>

        <v-btn text large class="text-none flex">
          <v-icon small color="grey" class="mr-2">mdi-calendar</v-icon>
          <span>Today</span>
        </v-btn>
      </v-layout>

      <h1 class="font-weight-light my-4">Try something new</h1>
      <v-layout>
        <v-row>
          <v-col cols="6">
            <v-img
              src="https://source.unsplash.com/600x400/?streaming"
              gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.9)"
            >
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-icon :size="60" color="white">mdi-play-circle-outline</v-icon>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-layout>

      <h2 class="font-weight-light mt-5 mb-2">
        <span>Let's work out!</span>
        <v-btn text icon class="right">
          <v-icon size="18">mdi-chevron-right</v-icon>
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

      <h2 class="font-weight-light mt-5 mb-2">
        <span>Learn something new 🎓</span>

        <v-btn text icon class="right">
          <v-icon size="18">mdi-chevron-right</v-icon>
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
export default {
  components: { ExploreCard },
  name: 'Home',
}
</script>
