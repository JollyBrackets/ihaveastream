<template>
  <v-container>
    <v-row v-if="stream">
      <v-col cols="9">
        <video v-if="liveSession" controls style="max-width: 100%">
          <source :src="liveSession.url" />
        </video>

        <v-img
          v-else
          contain
          src="https://source.unsplash.com/500x300/?streaming"
          gradient="to top right, rgba(0,0,0,.6), rgba(25,32,72,.9)"
          >
            <template v-slot:placeholder>
              <loader />
            </template>
            
            <v-row class="fill-height ma-0 white--text" align="center" justify="center">
              <v-col v-if="nextSession" class="text-center">
                <p class="subheading d-inline text-uppercase accent--text">Next Stream</p>
                <p class="display-1">{{ nextSession.start | moment('from', 'now')}}</p>

                <v-btn color="primary">
                  Add to calendar
                </v-btn>
              </v-col>
              <template v-else>
                <p class="title">No upcomming streams planned</p>
              </template>
            </v-row>
        </v-img>

        <p class="headline mt-3 mb-0">{{ stream.name }}</p>
        <p class="subheading mb-0">{{ stream.description }}</p>
        <p class="caption">
          <span class="mr-4">Categories:</span>
          <v-chip x-small color="primary">{{ stream.category }}</v-chip>
        </p>

        <v-divider />

        <v-layout class="mt-5">
          <v-flex shrink>
            <v-avatar size="50" class="elevation-2">
              <v-img :src="stream.owner.picture">
                <template v-slot:placeholder>
                  <loader />
                </template>
              </v-img>
            </v-avatar>
          </v-flex>
          <v-flex grow class="px-3">
            <p class="mb-0">{{ stream.owner.name }} ({{ stream.owner.country }})</p>
            <p class="caption">200 Subscribers</p>
          </v-flex>
        </v-layout>

      </v-col>


      <v-col cols="3">
        <template v-if="upcommingSessions.length > 0">
          <p class="subheading">Upcomming streams</p>
          <v-card>
            <v-img
              :src="img"
              :height="150"
              gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.9)"
              >
                <template v-slot:placeholder>
                  <loader />
                </template>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-icon :size="40" color="white">mdi-play-circle-outline</v-icon>
                </v-row>
            </v-img>
            <v-card-text>
              <v-btn small>Add to calender</v-btn>
            </v-card-text>
          </v-card>
        </template>


      </v-col>
    </v-row>

    <!-- Loader -->
    <v-row class="fill-height ma-0" align="center" justify="center" v-else>
      <v-progress-circular indeterminate color="primary" />
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    stream: null
  },
  name: "Stream",
  data: () => ({}),
  computed: {
    liveSession () {
      return this.stream.sessions.find(session => {
        const duration = this.stream.duration === 'open' ? 120 : this.stream.duration
        const start = moment(session.start)
        const end = moment(start).add(duration, 'minutes')
        const now = moment()
        return now.isBetween(start, end)
      })
    },
    nextSession () {
      return this.stream.sessions.filter(session => moment(session.start).isAfter(moment()))[0]
    },
    upcommingSessions () {
      return this.stream.sessions.filter(session => moment(session.start).isAfter(moment(session.start)))
    },
    pastSessions () {
      return this.stream.sessions.filter(session => moment(session.start).isAfter(moment(session.start)))
    }
  },
  async created() {
    const response = await this.$http.get("https://ihaveastream-staging.herokuapp.com/api/v1/streams/" + this.id)
    this.stream = response.data[0]
  }
};
</script>
