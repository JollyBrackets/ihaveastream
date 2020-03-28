<template>
  <v-app style="background-color: transparent">
    <v-app-bar app color="black" dark>
      <v-layout row align-center>
        <v-flex xs3 pl-4 @click="$router.push('/')">
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
          <v-btn text class="text-none accent" @click="$router.push('create-stream')">
            I HAVE A STREAM
          </v-btn>
          
          <v-btn fab small class="ml-3" @click="$router.push('profile')">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      dark
      padless
    >
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <a href="https://github.com/JollyBrackets/ihaveastream" target="blank" style="text-decoration: none;">
            <v-btn class="mx-4 white--text">
              <v-icon size="24px">mdi-github</v-icon>
              <span>Github Repo</span>
            </v-btn>
          </a>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>I Have A Stream</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
