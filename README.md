# Youtube Search Google API
[![Build Status](https://travis-ci.org/webdevel/youtube-search-google-api.svg?branch=master)](https://travis-ci.org/webdevel/youtube-search-google-api)
[![Coverage Status](https://coveralls.io/repos/github/webdevel/youtube-search-google-api/badge.svg?branch=master)](https://coveralls.io/github/webdevel/youtube-search-google-api?branch=master)

YouTube Search Google API for [Node.js]. Search for YouTube videos, channels, playlists and live events via Google API for [Node.js].

### Installing
This module is designed to be usable via server-side for [Node.js] or in a browser client-side.
```
npm install youtube-search-google-api
```
### Configuration
There are 2 HTTP clients provided [request] and [xhr]. They handle the server-side and client-side respectively.
###### Browser Support
For [Browserify], add a browser field to your `package.json`:
```
"browser": {
  "request": "xhr"
}
```
For [Webpack], add a resolve.alias field to your configuration:
```
"resolve": {
  "alias": {
    "request$": "xhr"
  }
}
```
### Usage
Authorization via Google API Key or OAuth 2.0 token is required by Google. More information regarding Google authentication can be found at [Calling the API]. All other parameters are optional.

```JavaScript
import { YouTube, SearchRequest } from 'youtube-search-google-api'

const youtube = new YouTube()

youtube.search(new SearchRequest(
  {
    query: {
      key: 'AlzaSydu39i6-bseHDgCfG_SNE_hQwuGdc53Vws',
      maxResults: 50,
      order: 'viewCount',
      type: 'video',
      publishedAfter: '2017-10-01T00:00:00Z',
      q: 'pumpkin|halloween+dog -cat'
    }
  }, function(error, response, body) {
    // Handle the response...
  }))
```

### Dependencies
This module depends on the following.
- [lodash]
- [xhr]
- [request]

### Contributing
Please read [Contributing]. Feel free to submit pull requests, issues and comments! Thank you. Participants will be added to the list of [Contributors].

### Alternatives
There is also a light weight alternative to this module [Youtube Search].

### License
*YouTube Search Goggle API* is Free and Open Source Software. It is licensed by the MIT License.

[YouTube Search Google API]: https://github.com/webdevel/youtube-search-google-api
[Calling the API]: https://developers.google.com/youtube/v3/docs/#calling-the-api
[Youtube Search]: https://github.com/MaxGfeller/youtube-search
[lodash]: https://github.com/lodash/lodash
[xhr]: https://github.com/naugtur/xhr
[request]: https://github.com/request/request
[Contributors]: https://github.com/webdevel/youtube-search-google-api/blob/master/CONTRIBUTORS.md
[Contributing]: https://github.com/webdevel/youtube-search-google-api/blob/master/CONTRIBUTING.md
[Node.js]: https://nodejs.org/en/
[Browserify]: http://browserify.org/
[Webpack]: https://webpack.js.org/
