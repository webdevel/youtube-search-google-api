export const searchSpec = {
  "brief": "A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.",
  "type": "YouTubeSearchRequest",
  "method": "GET",
  "scheme": "https",
  "host": "www.googleapis.com",
  "path": "youtube",
  "version": "v3",
  "resource": "search",
  "query": "?",
  "uri": "https://www.googleapis.com/youtube/v3/search",
  "referrence": "https://developers.google.com/youtube/v3/docs/search",
  "parameters": [
    {
      "brief": "OAuth 2.0 token for the current user. One possible way to provide an OAuth 2.0 token.",
      "name": "access_token",
      "type": "string",
      "values": []
    },
    {
      "brief": "Name of the JavaScript callback function that handles the response. Used in JavaScript JSON-P requests.",
      "name": "callback",
      "type": "string",
      "values": []
    },
    {
      "brief": "The channelId parameter indicates that the API response should only contain resources created by the channel. Note: Search results are constrained to a maximum of 500 videos if your request specifies a value for the channelId parameter and sets the type parameter value to video, but it does not also set one of the forContentOwner, forDeveloper, or forMine filters.",
      "name": "channelId",
      "type": "string",
      "values": []
    },
    {
      "brief": "The channelType parameter lets you restrict a search to a particular type of channel.",
      "name": "channelType",
      "type": "string",
      "values": [
        "any",
        "show"
      ]
    },
    {
      "brief": "The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "eventType",
      "type": "string",
      "values": [
        "completed",
        "live",
        "upcoming"
      ]
    },
    {
      "brief": "Selector specifying which fields to include in a partial response.",
      "name": "fields",
      "type": "string",
      "values": [
        "etag",
        "eventId",
        "items",
        "items/etag",
        "items/id",
        "items/id/channelId",
        "items/id/kind",
        "items/id/playlistId",
        "items/id/videoId",
        "items/kind",
        "items/snippet",
        "items/snippet/channelId",
        "items/snippet/channelTitle",
        "items/snippet/description",
        "items/snippet/liveBroadcastContent",
        "items/snippet/publishedAt",
        "items/snippet/thumbnails",
        "items/snippet/thumbnails/default",
        "items/snippet/thumbnails/high",
        "items/snippet/thumbnails/maxres",
        "items/snippet/thumbnails/medium",
        "items/snippet/thumbnails/standard",
        "items/snippet/title",
        "kind",
        "nextPageToken",
        "pageInfo",
        "pageInfo/resultsPerPage",
        "pageInfo/totalResults",
        "prevPageToken",
        "regionCode",
        "tokenPagination",
        "visitorId"
      ]
    },
    {
      "brief": "This parameter can only be used in a properly authorized request, and it is intended exclusively for YouTube content partners. The forContentOwner parameter restricts the search to only retrieve videos owned by the content owner identified by the onBehalfOfContentOwner parameter. If forContentOwner is set to true, the request must also meet the following requirements. The onBehalfOfContentOwner parameter is required. The user authorizing the request must be using an account linked to the specified content owner. The type parameter value must be set to video. None of the following other parameters can be set: videoDefinition, videoDimension, videoDuration, videoLicense, videoEmbeddable, videoSyndicated, videoType.",
      "name": "forContentOwner",
      "type": "boolean",
      "values": [
        "true",
        "false"
      ]
    },
    {
      "brief": "This parameter can only be used in a properly authorized request. The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. The forDeveloper parameter can be used in conjunction with optional search parameters like the q parameter. ",
      "name": "forDeveloper",
      "type": "boolean",
      "values": [
        "true",
        "false"
      ]
    },
    {
      "brief": "This parameter can only be used in a properly authorized request. The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video. In addition, none of the following other parameters can be set in the same request: videoDefinition, videoDimension, videoDuration, videoLicense, videoEmbeddable, videoSyndicated, videoType.",
      "name": "forMine",
      "type": "boolean",
      "values": [
        "true",
        "false"
      ]
    },
    {
      "brief": "The API key. This parameter is required unless you provide an OAuth 2.0 token. Your API key identifies your project and provides you with API access, quota, and reports. Obtain your project's API key from the Google Developers Console.",
      "name": "key",
      "type": "string",
      "values": []
    },
    {
      "brief": "The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427) which indicates the center of an area.",
      "name": "location",
      "type": "string",
      "values": []
    },
    {
      "brief": "The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area. The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.",
      "name": "locationRadius",
      "type": "string",
      "values": []
    },
    {
      "brief": "The maxResults parameter specifies the maximum number of items that should be returned in the result set. Acceptable values are 0 to 50, inclusive. The default value is 5.",
      "name": "maxResults",
      "type": "unsigned integer",
      "values": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50
      ]
    },
    {
      "brief": "This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel.",
      "name": "onBehalfOfContentOwner",
      "type": "string",
      "values": []
    },
    {
      "brief": "The order parameter specifies the method that will be used to order resources in the API response. The default value is relevance.",
      "name": "order",
      "type": "string",
      "values": [
        "date",
        "rating",
        "relevance",
        "title",
        "videoCount",
        "viewCount"
      ]
    },
    {
      "brief": "The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.",
      "name": "pageToken",
      "type": "string",
      "values": []
    },
    {
      "brief": "This parameter is required. The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.",
      "name": "part",
      "type": "string",
      "values": [
        "snippet"
      ]
    },
    {
      "brief": "Returns the response in a human-readable format if true. Default value: true. When this is false, it can reduce the response payload size, which might lead to better performance in some environments.",
      "name": "prettyPrint",
      "type": "boolean",
      "values": [
        "true",
        "false"
      ]
    },
    {
      "brief": "The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).",
      "name": "publishedAfter",
      "type": "string",
      "values": [
        "2017-08-01T00:00:00Z",
        "2017-04-01T00:00:00Z",
        "2017-01-01T00:00:00Z"
      ]
    },
    {
      "brief": "The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).",
      "name": "publishedBefore",
      "type": "string",
      "values": [
        "2006-08-01T00:00:00Z",
        "2006-04-01T00:00:00Z",
        "2006-01-01T00:00:00Z"
      ]
    },
    {
      "brief": "The q parameter specifies the query term to search for. Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either \"boating\" or \"sailing\", set the q parameter value to boating|sailing. Similarly, to search for videos matching either \"boating\" or \"sailing\" but not \"fishing\", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped values for characters are: | %7C, + %2B, - %2D.",
      "name": "q",
      "type": "string",
      "values": []
    },
    {
      "brief": "Lets you enforce per-user quotas from a server-side application even in cases when the user's IP address is unknown. This can occur, for example, with applications that run cron jobs on App Engine on a user's behalf. You can choose any arbitrary string that uniquely identifies a user, but it is limited to 40 characters. Overrides userIp if both are provided.",
      "name": "quotaUser",
      "type": "string",
      "values": []
    },
    {
      "brief": "The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.",
      "name": "regionCode",
      "type": "string",
      "values": []
    },
    {
      "brief": "The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video. Note that if the relatedToVideoId parameter is set, the only other supported parameters are part, maxResults, pageToken, regionCode, relevanceLanguage, safeSearch, type (which must be set to video), and fields.",
      "name": "relatedToVideoId",
      "type": "string",
      "values": []
    },
    {
      "brief": "The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.",
      "name": "relevanceLanguage",
      "type": "string",
      "values": []
    },
    {
      "brief": "The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.",
      "name": "safeSearch",
      "type": "string",
      "values": [
        "moderate",
        "none",
        "strict"
      ]
    },
    {
      "brief": "The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID. Important: Due to the deprecation of Freebase and the Freebase API, the topicId parameter started working differently as of February 27, 2017. At that time, YouTube started supporting a small set of curated topic IDs, and you can only use that smaller set of IDs as values for this parameter.",
      "name": "topicId",
      "type": "string",
      "values": [
        {
          "value": "/m/04rlf",
          "title": "Music (parent topic)"
        },
        {
          "value": "/m/02mscn",
          "title": "Christian music"
        },
        {
          "value": "/m/0ggq0m",
          "title": "Classical music"
        },
        {
          "value": "/m/01lyv",
          "title": "Country"
        },
        {
          "value": "/m/02lkt",
          "title": "Electronic music"
        },
        {
          "value": "/m/0glt670",
          "title": "Hip hop music"
        },
        {
          "value": "/m/05rwpb",
          "title": "Independent music"
        },
        {
          "value": "/m/03_d0",
          "title": "Jazz"
        },
        {
          "value": "/m/028sqc",
          "title": "Music of Asia"
        },
        {
          "value": "/m/0g293",
          "title": "Music of Latin America"
        },
        {
          "value": "/m/064t9",
          "title": "Pop music"
        },
        {
          "value": "/m/06cqb",
          "title": "Reggae"
        },
        {
          "value": "/m/06j6l",
          "title": "Rhythm and blues"
        },
        {
          "value": "/m/06by7",
          "title": "Rock music"
        },
        {
          "value": "/m/0gywn",
          "title": "Soul music"
        },
        {
          "value": "/m/0bzvm2",
          "title": "Gaming (parent topic)"
        },
        {
          "value": "/m/025zzc",
          "title": "Action game"
        },
        {
          "value": "/m/02ntfj",
          "title": "Action-adventure game"
        },
        {
          "value": "/m/0b1vjn",
          "title": "Casual game"
        },
        {
          "value": "/m/02hygl",
          "title": "Music video game"
        },
        {
          "value": "/m/04q1x3q",
          "title": "Puzzle video game"
        },
        {
          "value": "/m/01sjng",
          "title": "Racing video game"
        },
        {
          "value": "/m/0403l3g",
          "title": "Role-playing video game"
        },
        {
          "value": "/m/021bp2",
          "title": "Simulation video game"
        },
        {
          "value": "/m/022dc6",
          "title": "Sports game"
        },
        {
          "value": "/m/03hf_rm",
          "title": "Strategy video game"
        },
        {
          "value": "/m/06ntj",
          "title": "Sports (parent topic)"
        },
        {
          "value": "/m/0jm_",
          "title": "American football"
        },
        {
          "value": "/m/018jz",
          "title": "Baseball"
        },
        {
          "value": "/m/018w8",
          "title": "Basketball"
        },
        {
          "value": "/m/01cgz",
          "title": "Boxing"
        },
        {
          "value": "/m/09xp_",
          "title": "Cricket"
        },
        {
          "value": "/m/02vx4",
          "title": "Football"
        },
        {
          "value": "/m/037hz",
          "title": "Golf"
        },
        {
          "value": "/m/03tmr",
          "title": "Ice hockey"
        },
        {
          "value": "/m/01h7lh",
          "title": "Mixed martial arts"
        },
        {
          "value": "/m/0410tth",
          "title": "Motorsport"
        },
        {
          "value": "/m/07bs0",
          "title": "Tennis"
        },
        {
          "value": "/m/07_53",
          "title": "Volleyball"
        },
        {
          "value": "/m/02jjt",
          "title": "Entertainment (parent topic)"
        },
        {
          "value": "/m/09kqc",
          "title": "Humor"
        },
        {
          "value": "/m/02vxn",
          "title": "Movies"
        },
        {
          "value": "/m/05qjc",
          "title": "Performing arts"
        },
        {
          "value": "/m/066wd",
          "title": "Professional wrestling"
        },
        {
          "value": "/m/0f2f9",
          "title": "TV shows"
        },
        {
          "value": "/m/019_rr",
          "title": "Lifestyle (parent topic)"
        },
        {
          "value": "/m/032tl",
          "title": "Fashion"
        },
        {
          "value": "/m/027x7n",
          "title": "Fitness"
        },
        {
          "value": "/m/02wbm",
          "title": "Food"
        },
        {
          "value": "/m/03glg",
          "title": "Hobby"
        },
        {
          "value": "/m/068hy",
          "title": "Pets"
        },
        {
          "value": "/m/041xxh",
          "title": "Physical attractiveness [Beauty]"
        },
        {
          "value": "/m/07c1v",
          "title": "Technology"
        },
        {
          "value": "/m/07bxq",
          "title": "Tourism"
        },
        {
          "value": "/m/07yv9",
          "title": "Vehicles"
        },
        {
          "value": "/m/098wr",
          "title": "Society (parent topic)"
        },
        {
          "value": "/m/09s1f",
          "title": "Business"
        },
        {
          "value": "/m/0kt51",
          "title": "Health"
        },
        {
          "value": "/m/01h6rj",
          "title": "Military"
        },
        {
          "value": "/m/05qt0",
          "title": "Politics"
        },
        {
          "value": "/m/06bvp",
          "title": "Religion"
        },
        {
          "value": "/m/01k8wb",
          "title": "Knowledge"
        }
      ]
    },
    {
      "brief": "The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist.",
      "name": "type",
      "type": "string",
      "values": [
        "channel",
        "playlist",
        "video"
      ]
    },
    {
      "brief": "IP address of the end user for whom the API call is being made. Lets you enforce per-user quotas when calling the API from a server-side application.",
      "name": "userIp",
      "type": "string",
      "values": []
    },
    {
      "brief": "The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoCaption",
      "type": "string",
      "values": [
        "any",
        "closedCaption",
        "none"
      ]
    },
    {
      "brief": "The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoCategoryId",
      "type": "string",
      "values": [
        {
          "value": "1",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Film & Animation"
        },
        {
          "value": "2",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Autos & Vehicles"
        },
        {
          "value": "10",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Music"
        },
        {
          "value": "15",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Pets & Animals"
        },
        {
          "value": "17",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Sports"
        },
        {
          "value": "18",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Short Movies"
        },
        {
          "value": "19",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Travel & Events"
        },
        {
          "value": "20",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Gaming"
        },
        {
          "value": "21",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Videoblogging"
        },
        {
          "value": "22",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "People & Blogs"
        },
        {
          "value": "23",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Comedy"
        },
        {
          "value": "24",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Entertainment"
        },
        {
          "value": "25",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "News & Politics"
        },
        {
          "value": "26",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Howto & Style"
        },
        {
          "value": "27",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Education"
        },
        {
          "value": "28",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Science & Technology"
        },
        {
          "value": "29",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Nonprofits & Activism"
        },
        {
          "value": "30",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Movies"
        },
        {
          "value": "31",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Anime/Animation"
        },
        {
          "value": "32",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Action/Adventure"
        },
        {
          "value": "33",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Classics"
        },
        {
          "value": "34",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Comedy"
        },
        {
          "value": "35",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Documentary"
        },
        {
          "value": "36",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Drama"
        },
        {
          "value": "37",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Family"
        },
        {
          "value": "38",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Foreign"
        },
        {
          "value": "39",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Horror"
        },
        {
          "value": "40",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Sci-Fi/Fantasy"
        },
        {
          "value": "41",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Thriller"
        },
        {
          "value": "42",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Shorts"
        },
        {
          "value": "43",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Shows"
        },
        {
          "value": "44",
          "channelId": "UCBR8-60-B28hp2BmDPdntcQ",
          "title": "Trailers"
        }
      ],
      "note": "You may retrieve a list of categories that can be associated with YouTube videos (https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=us&maxResults=50&key=)."
    },
    {
      "brief": "The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoDefinition",
      "type": "string",
      "values": [
        "any",
        "high",
        "standard"
      ]
    },
    {
      "brief": "The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoDimension",
      "type": "string",
      "values": [
        "2d",
        "3d",
        "any"
      ]
    },
    {
      "brief": "The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video. Long is greater than 20 minutes. Medium is between 4 and 20 minutes. Short is less than 4 minutes.",
      "name": "videoDuration",
      "type": "string",
      "values": [
        "any",
        "long",
        "medium",
        "short"
      ]
    },
    {
      "brief": "The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoEmbeddable",
      "type": "string",
      "values": [
        "any",
        "true"
      ]
    },
    {
      "brief": "The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoLicense",
      "type": "string",
      "values": [
        "any",
        "creativeCommon",
        "youtube"
      ]
    },
    {
      "brief": "The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoSyndicated",
      "type": "string",
      "values": [
        "any",
        "true"
      ]
    },
    {
      "brief": "The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.",
      "name": "videoType",
      "type": "string",
      "values": [
        "any",
        "episode",
        "movie"
      ]
    }
  ]
}
