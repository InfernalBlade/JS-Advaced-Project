"use strict";

var urlNewStories = "https://hacker-news.firebaseio.com/v0/newstories.json";
var btn = document.querySelector(".loadmore");
var idNumbers = 0;

function getapi(url) {
  var idResponse, i, id, storieUrl, response2, unixTime;
  return regeneratorRuntime.async(function getapi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(url));

        case 2:
          idResponse = _context.sent;
          i = 0;

        case 4:
          if (!(i < 10)) {
            _context.next = 16;
            break;
          }

          id = idResponse.data[idNumbers];
          storieUrl = "https://hacker-news.firebaseio.com/v0/item/".concat(id, ".json");
          _context.next = 9;
          return regeneratorRuntime.awrap(axios.get(storieUrl));

        case 9:
          response2 = _context.sent;
          unixTime = response2.data.time;
          createCard(response2.data.title, response2.data.url, timeConverter(unixTime), response2.data.by);
          idNumbers++;

        case 13:
          i++;
          _context.next = 4;
          break;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}

getapi(urlNewStories);
btn.addEventListener("click", function () {
  getapi(urlNewStories);
});