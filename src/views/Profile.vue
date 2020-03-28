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
            <p class="overline">{{ user.gender }} {{ user.location.city }}</p>
        </v-flex>
        <v-flex xs4 class="pa-2">
            <pre>
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
    console.log('user', this.user)
  }
}
</script>
