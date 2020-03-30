<template>
    <v-layout row style="background-color: rgba(0,0,0,0.7)">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="filters.date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-btn text large class="text-none flex" color="white" v-on="on">
            <v-icon small color="primary" class="mr-2">mdi-clock</v-icon>
            <span>Now</span>
          </v-btn>
        </template>
        <v-date-picker
          v-model="filters.date"
          :min="new Date().toISOString()"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(filters.date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
      

        <v-btn text large class="text-none flex" color="white">
          <v-icon small color="primary" class="mr-2">mdi-map</v-icon>
          <span>Near Me</span>
        </v-btn>


        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text large class="text-none flex" color="white" v-on="on">
              <v-icon small color="primary" class="mr-2">mdi-web</v-icon>
              <span>{{ activeLanguage }}</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="language in $store.languageOptions"
              :key="language.value"
              @click="$router.push({ name: 'search', query: { language: language.value } })">
              <v-list-item-title>{{ language.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text large class="text-none flex" color="white" v-on="on">
              <v-icon small color="primary" class="mr-2">mdi-filter</v-icon>
              <span>More Filters</span>
            </v-btn>
          </template>
          <v-card>
            <v-card-text>
              <v-checkbox
                class="mt-0"
                v-model="filters.free"
                label="Only free streams"
                hide-details
              />
              <v-checkbox
                v-model="filters.interactive"
                label="Interactive streams"
                hide-details
              />
              <v-checkbox
                v-model="filters.regular"
                label="Weekly / Monthly"
                hide-details
              />
            </v-card-text>
          </v-card>
        </v-menu>
    </v-layout>
</template>

<script>
export default {
  name: 'filter-bar',
  data: () => ({
    menu: false,
    filters: {
      date: null,
      free: false,
      interactive: false,
      regular: false
    }
  }),
  computed: {
    activeLanguage () {
      const value = this.$route.query.language
      const languageOption = this.$store.languageOptions.find(lo => lo.value === value)
      return languageOption ? languageOption.text : 'English'
    }
  }
}
</script>