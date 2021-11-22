const settings = {
  "name": "king-react-proyect",
  "state": {
    "frontity": {
      "url": "https://kingart.com.co",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "theme-king",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kingart.com.co/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
