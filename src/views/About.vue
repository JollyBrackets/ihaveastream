<template>
  <v-container>
    <h1>This is an about page</h1>
    <v-row wrap>
      <v-col cols="4" v-for="member in team" :key="member.name">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card>
                <v-card-text class="text-center" style="height: 200px" v-if="!hover">
                  <v-avatar size="100">
                    <v-img :src="member.img">
                      <template v-slot:placeholder>
                          <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="red lighten-3" />
                          </v-row>
                      </template>
                    </v-img>
                  </v-avatar>
                  <p class="title mt-4 mb-0">{{ member.name }}</p>
                  <p class="subheading primary--text">{{ member.role }}</p>
                </v-card-text>
                <v-card-text style="height: 200px; overflow-y: auto" class="primary white--text" v-else>
                  Short bio...
                </v-card-text>

                <v-card-text class="text-center">
                  <a :href="member.linkedIn" target="blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </a>

                  <a v-if="member.github" :href="member.github" target="blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </a>

                </v-card-text>
              </v-card>
            </template>
          </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
      team: [
        { name: 'Nicolas Zahnd', role: 'Front End', linkedIn: 'https://www.linkedin.com/in/nicolas-zahnd/', img: 'https://source.unsplash.com/100x100/?puppy,1', github: 'https://github.com/JollyBrackets' },
        { name: 'Nora Moser', role: 'UX & Video', linkedIn: 'https://www.linkedin.com/in/noramoser/', img: 'https://source.unsplash.com/100x100/?puppy,2' },
        { name: 'Igor Susmelj', role: 'Data & Promo', linkedIn: 'https://www.linkedin.com/in/igorsusmelj/', img: 'https://source.unsplash.com/100x100/?puppy,3' },
        { name: 'Martin Eigenmann', role: 'Backend', linkedIn: 'https://www.linkedin.com/in/eigenmannmartin/', img: 'https://source.unsplash.com/100x100/?puppy,4' },
        { name: 'Vladislav Bunkin', role: 'Backend & Design', linkedIn: 'https://www.linkedin.com/in/vladislav-bunkin-b0a186100/', img: 'https://source.unsplash.com/100x100/?puppy,5' },
        { name: 'Natasha Hicken', role: 'UX & Design', linkedIn: 'https://www.linkedin.com/in/natasha-hicken-9b6019126/', img: 'https://source.unsplash.com/100x100/?puppy,6' },
        { name: 'Konstantin Schürholt', role: 'Content & Data', linkedIn: 'https://www.linkedin.com/in/konstantin-schuerholt/', img: 'https://source.unsplash.com/100x100/?puppy,7' }
      ],
  })
}
</script>