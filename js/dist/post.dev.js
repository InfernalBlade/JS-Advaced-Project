"use strict";

var mainContainer = document.querySelector(".cards");

function createCard(title, url, date, by) {
  /* Create elements for card component */
  var wrapper = document.createElement("div");
  var titleContainer = document.createElement("h2");
  var urlContainer = document.createElement("a");
  var dateContainer = document.createElement("p");
  var userContainer = document.createElement("p");
  var infoContainer = document.createElement("div");
  wrapper.classList.add("card");
  infoContainer.classList.add("info");
  mainContainer.append(wrapper);
  wrapper.append(titleContainer, urlContainer, infoContainer);
  infoContainer.append(dateContainer, userContainer);
  titleContainer.classList.add("title");
  urlContainer.classList.add("url");
  dateContainer.classList.add("date");
  userContainer.classList.add("user");
  /* Show Data */

  titleContainer.innerText = title;
  urlContainer.innerText = "Read Full Article";
  urlContainer.setAttribute("href", url);
  dateContainer.innerText = date;
  userContainer.innerText = "By " + by;

  if (url == null) {
    urlContainer.innerText = "Link not available";
    urlContainer.removeAttribute("href");
  }
}