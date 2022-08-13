let topStoriesContainer = document.querySelector(".sidebar");

function topStoriesCard(title, url, date){
    let topCard = document.createElement("div");
    let datePar = document.createElement("p");
    let titleText = document.createElement("h4");
    let link = document.createElement("a")
    let linkSpan = document.createElement("span")

    topCard.classList.add("topCard");
    linkSpan.classList.add("link");

    topStoriesContainer.append(topCard);

    topCard.append(
        datePar,
        titleText,
        link,
    );
    link.append(linkSpan,);

    datePar.innerText = date;
    titleText.innerText = title;
    link.setAttribute("href", url);
    
    if(url==null){
        urlContainer.innerText=("Link not available");
        urlContainer.removeAttribute("href");
    }
}   