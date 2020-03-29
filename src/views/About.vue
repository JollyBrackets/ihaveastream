<template>
  <v-container>
    <h1>The team</h1>
    <p>We’re a team of 7 quarantined creative minds from Switzerland and the UK. In the scope of the codevscovid19 hackathon we wanted to cherish the importance of social contacts during tough times such as these and empower people to connect in new ways. Our vision is a singular platform connecting both sides; Streamers can advertise their streams, people new to streaming can get into it and struggling businesses can transition their offerings into a digital variation to bridge tough times. Consumers can search for and discover new streams appealing to their interests or checking their long-time postponed New-Year’s resolutions. No excuses to skip Yoga again, let a professional Yogi take you through the exercises live in your living room. Improve your cooking or finally pick up basic Spanish! Put together your schedule and find all those streams in one place.</p>
    <v-row wrap class="justify-center">
      <v-col cols="12" sm="6" md="4" v-for="member in team" :key="member.name">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card>
                <v-card-text class="text-center" style="height: 200px" v-if="!hover">
                  <v-avatar size="125">
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
                  {{ member.bio || 'Bio not found :(' }}
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

                  <a v-if="member.instagram" :href="member.instagram" target="blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </a>

                  <a v-if="member.twitter" :href="member.twitter" target="blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                  </a>

                  <a v-if="member.web" :href="member.web" target="blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-web</v-icon>
                    </v-btn>
                  </a>

                  <a v-if="member.devpost" :href="member.devpost" target="blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-dev-to</v-icon>
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
        { name: 'Nicolas Zahnd', role: 'Front End', linkedIn: 'https://www.linkedin.com/in/nicolas-zahnd/', img: 'https://source.unsplash.com/125x125/?puppy,1', github: 'https://github.com/JollyBrackets', instagram: 'https://www.instagram.com/gadabout.js/', bio: 'Freelancing IT wizard (technology consulant, web dev and data analyst) and now grounded digital nomad with a love for hackathons', devpost: 'https://devpost.com/NicolasZahnd'},
        { name: 'Nora Moser', role: 'UX & Video', linkedIn: 'https://www.linkedin.com/in/noramoser/', img: 'https://source.unsplash.com/125x125/?puppy,2', bio: 'Human computer interaction and data science in health care and the medical domain.', github: 'https://github.com/norahjoerdis', devpost: 'https://devpost.com/NoraMoser'},
        { name: 'Igor Susmelj', role: 'Data & Promo', linkedIn: 'https://www.linkedin.com/in/igorsusmelj/', github: 'https://github.com/IgorSusmelj', twitter: 'https://twitter.com/ISusmelj', img: 'https://source.unsplash.com/125x125/?puppy,3' , bio: "Igor is a big fan of unicorns and wizards. He's currently working in Zurich in an ETH Spin-Off making deep learning more efficient and easy to use.", devpost: 'https://devpost.com/IgorSusmelj'},
        { name: 'Martin Eigenmann', role: 'Backend', linkedIn: 'https://www.linkedin.com/in/eigenmannmartin/', github: 'https://github.com/eigenmannmartin', web: 'https://eigenmannmartin.ch/', instagram: 'https://www.instagram.com/eigenmannmartin/', img: 'https://source.unsplash.com/125x125/?puppy,4', bio: 'I love translating ideas and visions into prototypes and products using my skills as a thinker, developer and a human being.', devpost: 'https://devpost.com/devpost638'},
        { name: 'Vladislav Bunkin', role: 'Backend & Design', linkedIn: 'https://www.linkedin.com/in/vladislav-bunkin-b0a186100/', github: 'https://github.com/bunkinv', img: 'https://source.unsplash.com/125x125/?puppy,5', bio: 'Coding Mathematician. Into Networks, machine learning, analytical thinking, riddles and calisthenics.', devpost: 'https://devpost.com/bunkinv' },
        { name: 'Natasha Hicken', role: 'UX & Design', linkedIn: 'https://www.linkedin.com/in/natasha-hicken-9b6019126/', img: 'https://source.unsplash.com/125x125/?puppy,6', instagram: 'https://www.instagram.com/natashahicken/?hl=en', web: 'www.natashahicken.com', bio: 'Multi-disciplinary creative working across interaction, immersive spaces and imagined futures', devpost: 'https://devpost.com/natashahicken' },
        { name: 'Konstantin Schürholt', role: 'Content & Data', linkedIn: 'https://www.linkedin.com/in/konstantin-schuerholt/', img: 'https://source.unsplash.com/125x125/?puppy,7', github: 'https://github.com/kschuerholt', bio: 'Reserach Assistant & PhD Candidate in Machine Learning @[AI:ML] Group, ICS-HSG. Background in simulation and scientific computing', devpost: 'https://devpost.com/kschuerholt'}
      ],
  })
}
</script>