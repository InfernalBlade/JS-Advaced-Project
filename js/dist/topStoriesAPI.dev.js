"use strict";

var urlTopStories = "https://hacker-news.firebaseio.com/v0/topstories.json";

function getTopStories(url) {
  var idResponse, i, id, storieUrl, response2, unixTime;
  return regeneratorRuntime.async(function getTopStories$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(url));

        case 2:
          idResponse = _context.sent;
          i = 0;

        case 4:
          if (!(i < 5)) {
            _context.next = 17;
            break;
          }

          id = idResponse.data[idNumbers];
          storieUrl = "https://hacker-news.firebaseio.com/v0/item/".concat(id, ".json");
          _context.next = 9;
          return regeneratorRuntime.awrap(axios.get(storieUrl));

        case 9:
          response2 = _context.sent;
          unixTime = response2.data.time;
          topStoriesCard(response2.data.title, response2.data.url, timeConverter(unixTime));
          idNumbers++;
          console.log(storieUrl);

        case 14:
          i++;
          _context.next = 4;
          break;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

getTopStories(urlTopStories);