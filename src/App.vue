<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-layout row align-center>
        <v-flex xs3 pl-4>
          <v-img contain :height="40" :width="40" :src="require('@/assets/logo.svg')" />
        </v-flex>
        <v-flex xs6>
          <v-text-field
            solo
            flat
            hide-details
            small
            single-line
            placeholder="Find Streams"
          >
            <v-icon small slot="append">mdi-magnify</v-icon>
          </v-text-field>
        </v-flex>
        <v-flex xs3 text-right pr-4>
          <v-btn text class="text-none red">
            I HAVE A STREAM
          </v-btn>
        </v-flex>
      </v-layout>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
