import Vue from 'vue'

export default new Vue({
  data: {
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