"use strict";

var urlNewStories = "https://hacker-news.firebaseio.com/v0/newstories.json";
var btn = document.querySelector(".loadmore");
var idNumbers = 0;

function getapi(url) {
  var idResponse, ids, i, id, storieUrl, response2, data2, unixTime;
  return regeneratorRuntime.async(function getapi$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          idResponse = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(idResponse.json());

        case 5:
          ids = _context.sent;
          i = 0;

        case 7:
          if (!(i < 10)) {
            _context.next = 23;
            break;
          }

          id = ids[idNumbers];
          console.log(idNumbers + " id: " + id);
          storieUrl = "https://hacker-news.firebaseio.com/v0/item/".concat(id, ".json");
          _context.next = 13;
          return regeneratorRuntime.awrap(fetch(storieUrl));

        case 13:
          response2 = _context.sent;
          _context.next = 16;
          return regeneratorRuntime.awrap(response2.json());

        case 16:
          data2 = _context.sent;
          unixTime = data2.time;
          createCard(data2.title, data2.url, timeConverter(unixTime), data2.by);
          idNumbers++;

        case 20:
          i++;
          _context.next = 7;
          break;

        case 23:
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