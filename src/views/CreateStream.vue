<template>
 <v-container>
    <v-layout row>
        <h1>Create Your Stream</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <v-btn @click="createStream">create</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Create',
  data: () => ({
  }),
  methods: {
    createStream() {

      const formData = new FormData();
      formData.append('name', 'name');
      formData.append('description', 'description');
      formData.append('price', 0);
      formData.append('interaction', 'view');
      formData.append('duration', '30');
      formData.append('category', 'sport');
      formData.append('zip', 9000);
      formData.append('country', 'CH');
      formData.append('language', 'de');

      this.$http.post('api/v1/streams/', formData)
        .then(response => {
          const stream = response.data

          const formData = new FormData();
          formData.append('title', 'title');
          formData.append('description', 'description');
          formData.append('tech', 'youtube');
          formData.append('url', 'https://google.ch');
          formData.append('start', new Date());

          this.$http.post(`api/v1/streams/${stream.id}/add_session/`, formData)
        })
    }
  }
}

</script>
