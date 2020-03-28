<template>
 <v-container>
    <v-layout row v-if="user">
        <v-flex xs4 class="pa-2">
            <v-avatar size="200">
                <v-img :src="user.picture.large">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="red lighten-3" />
                        </v-row>
                    </template>
                </v-img>
            </v-avatar>
            <p class="title">{{ user.name.first }} {{ user.name.last }}</p>
            <p class=".body-1">{{ user.name.title }} {{ user.gender }}</p>
        </v-flex>
        <v-flex xs4 class="pa-2">
            <pre>
                <p class="title">Subscription details</p>
                <b-card title="Dancing">
                    <b-card-text>
                    <b>Nr. 1 Dance school</b>
                    </b-card-text>
                    <b-card-text>
                    <b>Hip-Hop</b>
                    </b-card-text>
                    <a href="#" class="card-link">Card link</a>
                    <br>
                    <b-card-text>
                    <b>Fitness all day</b>
                    </b-card-text>
                    <b-card-text>
                    <b>Zumba</b>
                    </b-card-text>
                    <a href="#" class="card-link">Card link</a>
                    <br>
                </b-card>
                
                <p class=".subtitle-1">Drinks and chats</p>
                <p class=".body-1">{Streamer Name 1}<br>{Course Name 1}</p>
                <p class=".body-1">{Streamer Name 2}<br>{Course Name 2}</p>
                {{ user }}
            </pre>
        </v-flex>
    </v-layout>

    <v-row class="fill-height ma-0" align="center" justify="center" v-else>
        <v-progress-circular indeterminate color="red lighten-3" />
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  data: () => ({
      user: null
  }),
  async created () {
    const response = await axios.get('https://randomuser.me/api/')
    this.user = response.data.results[0]
  }
}
</script>
