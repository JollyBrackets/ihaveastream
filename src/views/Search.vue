<template>
 <v-container fluid class="pa-0">
    <filter-bar></filter-bar>
    <v-container>
      <pre>
      {{ results }}
      </pre>
      <v-row>
        <v-col cols="12">
            <p class="caption" v-if="searchTerm">
              <span class="mr-4">Showing results for:</span>
              <v-chip close small @click:close="resetSearch">{{ searchTerm }}</v-chip>
            </p>

            <v-skeleton-loader
              v-for="i in 10"
              :key="i"
              type="list-item-avatar-three-line"
              class="mx-auto"
            ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import FilterBar from '@/components/FilterBar.vue'
export default {
  props: {
    searchTerm: {
      type: String,
      default: null
    }
  },
  components: { FilterBar },
  name: 'Home',
  data: () => ({
    results: []
  }),
  created() {
    this.requestData()
    /*this.$http.get('https://ip-api.com/json/?fields=statuscountryCode,region,zip')
      .then(response => {
        const zip = response.data.zip
        const country = response.data.countryCode


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
    },
    search({ name = "", price = { max: '' }, language = '', datetime = { from: '', to: '' } } = {}) {
      return this.$http.get(`api/v1/streams/?name=${name}&price_max=${price.max}&language=${language}&start_after=${datetime.from}&start_before=${datetime.to}`)
        .then(response => {
          this.results = response.data  
        })
    },
    resetSearch () {
      this.$router.push('/search')
    }
  }
}

</script>
