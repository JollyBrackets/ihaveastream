<template>
 <v-container fluid class="pa-0">
    <filter-bar></filter-bar>
    <v-container>
      <p class="caption" v-if="searchTerm">
        <span class="mr-4">Showing results for:</span>
        <v-chip close small @click:close="resetSearch">{{ searchTerm }}</v-chip>
      </p>

      <v-row>
        <v-chip
            v-for="category in categories"
            :key="category"
            v-html="category"
            small
            color="primary"
            class="mx-2 my-1"
          />
      </v-row>

      <template v-if="streams">
        <v-row wrap>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="stream in streams" :key="stream.id">
            <explore-card :stream="stream" />
          </v-col>
        </v-row>
      </template>

      <template v-else>
        <v-skeleton-loader
          v-for="i in 10"
          :key="i"
          type="list-item-avatar-three-line"
          class="mx-auto"
        />
      </template>
    </v-container>
  </v-container>
</template>

<script>
import FilterBar from '@/components/FilterBar.vue'
import ExploreCard from '@/components/ExploreCard.vue'
export default {
  props: {
    searchTerm: {
      type: String,
      default: null
    }
  },
  components: { FilterBar, ExploreCard },
  name: 'Search',
  data: () => ({
    streams: null,
    categories: [
      'Sports & Fitness',
      'Dancing',
      'Cooking',
      'Drinks & Chat',
      'Meditation & Spirituality',
      'Arts & Crafts & Music',
      'Educational & Languages',
      'Gaming & Media',
      'Kids Entertainment',
      'Others'
    ]
  }),
  created() {
    this.requestData()
    /*this.$http.get('https://ip-api.com/json/?fields=statuscountryCode,region,zip')
      .then(response => {
        window.__data__ = response.data
        //const zip = response.data.zip
        //const country = response.data.countryCode


        //console.log({ zip, country })
      })*/
  },
  watch: {
    searchTerm() {
      this.requestData()
    }
  },
  methods: {
    requestData() {
      this.search({ name: this.$props.searchTerm || '' })


      //this.search({ price: { max: 0 } }) // only free
      //this.search({ interaction: 'view' }) // view only ["chat" (with chat) | class (with bidirectional video)]
      //this.search({ recurrent: false }) // one off streams  [true (only recurring) | '' all]
      //this.search({ language: 'en' }) // ['de', 'fr', 'it', ...] <- must be lower case
      //this.search({ category: 'dancing' }) // [sport, dancing, cooking, chat, meditation, arts, education, entertainment, kids, other]
      //this.search({ zip: '90' }) // starting witz 90
      //this.search({ country: 'CH' }) // <- this has to be all caps -.-'

      
    },
    search({ name = "", price = { max: '' }, language = '', datetime = { from: '', to: '' }, interaction = '', recurrent = '', category = '', zip = '', country = '' } = {}) {
      return this.$http.get(`api/v1/streams/?category=${category}&recurrent=${recurrent}&interaction=${interaction}&name=${name}&price_max=${price.max}&country=${country}&zip=${zip}&language=${language}&start_after=${datetime.from}&start_before=${datetime.to}`)
        .then(response => {
          this.streams = response.data  
        })
    },
    resetSearch () {
      this.$router.push('/search')
    }
  }
}

</script>
