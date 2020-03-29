<template>
 <v-container fluid class="pa-0">
    <filter-bar></filter-bar>
    <v-container>
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
  }),
  methods: {
    resetSearch () {
      this.$router.push('/search')
    }
  }
}

</script>
