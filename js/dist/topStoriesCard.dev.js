"use strict";

var topStoriesContainer = document.querySelector(".sidebar");

function topStoriesCard(title, url, date) {
  var topCard = document.createElement("div");
  var datePar = document.createElement("p");
  var titleText = document.createElement("h4");
  var link = document.createElement("a");
  var linkSpan = document.createElement("span");
  topCard.classList.add("topCard");
  linkSpan.classList.add("link");
  topStoriesContainer.append(topCard);
  topCard.append(datePar, titleText, link);
  link.append(linkSpan);
  datePar.innerText = date;
  titleText.innerText = title;
  link.setAttribute("href", url);

  if (url == null) {
    urlContainer.innerText = "Link not available";
    urlContainer.removeAttribute("href");
  }
}