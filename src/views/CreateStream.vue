<template>
 <v-container>
    <v-row>
      <v-col>
        <h1>Create Your Stream</h1>
        
        <p>
          <a href="https://www.boxcast.com/blog/how-to-start-live-streaming" target="blank">
            Here is a really helpful article to get started
          </a>
        </p>

        <p>
          <a href="https://docs.google.com/forms/d/1-LOLNv0sPoTH8010voWzZX4vXDcwvDjoGd61p7KcTrM/viewform?edit_requested=true" target="blank">
            Form to create your stream
          </a>
        </p>

        <v-btn @click="createStream">create</v-btn>

        
        <p class="subheading mt-12">Some Help to pick a streaming service</p>
        <v-img src="@/assets/flowchart.png">
          <template v-slot:placeholder>
            <loader />
          </template>
        </v-img>
      </v-col>
    </v-row>
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
          formData.append('start', (new Date()).toISOString());

          this.$http.post(`api/v1/streams/${stream.id}/add_session/`, formData)
        })
    }
  }
}

</script>
