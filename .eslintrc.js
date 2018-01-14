module.exports = {
  "parser" : "babel-eslint",
  "plugins" : [
    "react",
    "react-native"
  ],
  "extends" : [ "airbnb", "plugin:react-native/all"],
  "rules" : {
    "react/jsx-filename-extension" : 0,
    "react/forbid-prop-types": 0,
    "import/prefer-default-export": false,
  },
  "env": {
    "react-native/react-native": true
  }
};