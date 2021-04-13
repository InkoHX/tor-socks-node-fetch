const { fetch } = require('./fetch')

fetch('https://facebookcorewwwi.onion')
  .then(console.log)
  .catch(console.error)
