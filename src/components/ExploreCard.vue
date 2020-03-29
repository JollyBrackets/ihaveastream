<template>
  <v-card v-if="stream" elevation="1" @click="$router.push({ name: 'Stream', params: { id: stream.id } })">
    <v-img
      :src="'https://source.unsplash.com/500x300/?'+ stream.category"
      :height="150"
      gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.9)"
      >
        <template v-slot:placeholder>
          <loader />
        </template>
        
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-icon :size="40" color="white">mdi-play-circle-outline</v-icon>
        </v-row>
    </v-img>
    <v-card-text>
      <p class="mb-0 primary--text">{{ stream.sessions[stream.sessions.length -1].start | moment('from', 'now') }}</p>
      <p class="title text-truncate mb-0">{{ stream.name }}</p>
      <v-chip x-small color="primary">{{ stream.category }}</v-chip>
    </v-card-text>
    <v-divider />
    <v-card-text class="py-2">
      <v-layout>
        <v-flex shrink>
          <v-avatar size="40" class="elevation-2">
            <v-img :src="stream.owner.picture || 'http://music.virginia.edu/sites/music.virginia.edu/files/styles/faculty_profile_image/public/default_images/person-placeholder_3.png?itok=dtpqDURH'">
              <template v-slot:placeholder>
                <loader />
              </template>
            </v-img>
          </v-avatar>
        </v-flex>
        <v-flex grow class="px-3">
          <p class="mb-0">{{ stream.owner.name || 'Anonymous' }} ({{ stream.owner.country || 'CH' }})</p>
          <p class="caption mb-0">200 Subscribers</p>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "explore-card",
  props: {
    stream: Object
  }
};
</script>