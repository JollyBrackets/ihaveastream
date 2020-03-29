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
  })
}

</script>
