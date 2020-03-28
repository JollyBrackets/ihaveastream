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

        <div id="vue-root">
            <datatable :columns="columns" :data="rows"></datatable>
        </div>

        <v-flex xs4 class="pa-2">
            <pre>
                <p class="title">Subscription details</p>
                <v-card
                max-width="500"
                class="mx-auto"
                outlined
                >
                <v-list-item>
                    <v-list-item-avatar color="grey"></v-list-item-avatar>
                    <v-list-item-content>
                    <v-list-item-title class="headline">Hip-Hop 2</v-list-item-title>
                    <v-list-item-subtitle>by Best Dance School Zürich</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                    height="194"
                    width="500"
                ></v-img>
            
                <v-card-actions>
                    <v-btn
                    text
                    color="deep-purple accent-3"
                    >
                    Read
                    </v-btn>
                    <v-btn
                    text
                    color="deep-purple accent-4"
                    >
                    Bookmark
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                </v-card-actions>
                </v-card>
                
                
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

import Vue from 'vue';

new Vue({
    el: '#vue-root',
    data: {
        columns: [
            {label: 'id', field: 'id'},
            {label: 'Username', field: 'user.username', headerClass: 'class-in-header second-class'},
            {label: 'First Name', field: 'user.firstName'},
            {label: 'Last Name', field: 'user.lastName'},
            {label: 'Email', field: 'user.email'},
            {label: 'Address', representedAs: ({address, city, state}) => `${address}<br />${city}, ${state}`, interpolate: true}
        ],
        rows: [

            {
                id: 1,
                user: {
                    username: "dprice0",
                    firstName: "Daniel",
                    lastName: "Price",
                    email: "dprice0@blogs.com"
                },
                address: "3 Toban Park",
                city: "Pocatello",
                state: "Idaho"
            }
        ]
    }
});

</script>
