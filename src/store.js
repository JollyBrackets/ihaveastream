import Vue from 'vue'

export default new Vue({
  methods: {
    restoreUser () {
      const token = localStorage.getItem('token') || null
      
      if (token) {
        this.setToken(token)
        this.loadUser()
      }
    },
    setToken(token) {
      window.localStorage.setItem('token', token)
      Vue.http.headers.common['Authorization'] = token
    },

    async loadUser() {
      try {
        const response = await this.$http.get("api/v1/users/me")
        this.user = response.data
      } catch(error) {
        if (error.status === '401') {
          this.setToken(null)
        }
      }
    },

    async login() {
      const authCode = await this.$gAuth.getAuthCode()
      const formData = new FormData();
      formData.append('code', authCode);
      formData.append('provider', 'google-oauth2');
      formData.append('redirect_uri', window.location.origin);

      const response = await this.$http.post("auth/login/social/knox/", formData);
      this.setToken(`Token ${response.data.token}`)
      this.loadUser()
    }
  },
  data: {
    user: null,
    techOptions: [
      { value: "vimeo", text: "Vimeo" },
      { value: "youtube", text: "Youtube" },
      { value: "zoom", text: "Zoom" }
    ],
    durationOptions: [
      { value: "15", text: "15" },
      { value: "30", text: "30" },
      { value: "60", text: "60" },
      { value: "120", text: "120" },
      { value: "open", text: "open" }
    ],
    interactionOptions: [
      { value: "view", text: "view only" },
      { value: "chat", text: "with text chat" },
      { value: "class", text: "with video chat" }
    ],
    categoryOptions: [
      { value: "sport", text: "Sport" },
      { value: "dancing", text: "Dancing" },
      { value: "cooking", text: "Cooking" },
      { value: "chat", text: "Drinks & Chat" },
      { value: "meditation", text: "Meditation & Spirituality" },
      { value: "arts", text: "Arts & Crafts & Music" },
      { value: "education", text: "Educational & Languages" },
      { value: "entertainment", text: "Gaming & Media" },
      { value: "kids", text: "Kids Entertainment" },
      { value: "other", text: "Other" }
    ],
    languageOptions: [
      { value: "ch", text: "Swiss German" },
      { value: "de", text: "German" },
      { value: "en", text: "English" },
      { value: "fr", text: "French" },
      { value: "es", text: "Spanish" },
      { value: "it", text: "Italian" }
    ]
  }
})