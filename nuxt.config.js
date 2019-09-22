import colors from "vuetify/es5/util/colors";

export default {
  // mode: "",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-fire",
      {
        // Required:
        config: {
          development: {
            apiKey: "AIzaSyAB5ZIJfkji5sooQN8Bqz_DomNX7jUtbZs",
            authDomain: "lecturebuddy-d3375.firebaseapp.com",
            databaseURL: "https://lecturebuddy-d3375.firebaseio.com",
            projectId: "lecturebuddy-d3375",
            storageBucket: "lecturebuddy-d3375.appspot.com",
            messagingSenderId: "1000961580185",
            appId: "1:1000961580185:web:f5f51477d46f1a792eac08"
          },
          production: {
            apiKey: "AIzaSyAB5ZIJfkji5sooQN8Bqz_DomNX7jUtbZs",
            authDomain: "lecturebuddy-d3375.firebaseapp.com",
            databaseURL: "https://lecturebuddy-d3375.firebaseio.com",
            projectId: "lecturebuddy-d3375",
            storageBucket: "lecturebuddy-d3375.appspot.com",
            messagingSenderId: "1000961580185",
            appId: "1:1000961580185:web:f5f51477d46f1a792eac08"
          }
        },
        // The following options are optional:
        useOnly: [
          "auth",
          "firestore",
          "functions",
          "storage",
          "realtimeDb",
          "messaging",
          "performance"
        ],
        customEnv: false,
        functionsLocation: "us-central1"
      }
    ]
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken2,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
};
