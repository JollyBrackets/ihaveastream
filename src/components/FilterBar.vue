<template>
    <v-layout row style="background-color: rgba(0,0,0,0.7)">
        <v-btn text large class="text-none flex" color="white">
          <v-icon small color="primary" class="mr-2">mdi-clock</v-icon>
          <span>Now</span>
        </v-btn>

        <v-btn text large class="text-none flex" color="white">
          <v-icon small color="primary" class="mr-2">mdi-map</v-icon>
          <span>Near Me</span>
        </v-btn>

        <v-btn text large class="text-none flex" color="white">
          <v-icon small color="primary" class="mr-2">mdi-web</v-icon>
          <span>English</span>
        </v-btn>

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
    filters: {
      free: false,
      interactive: false,
      regular: false
    }
  })
}
</script>