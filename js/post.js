let mainContainer = document.querySelector(".cards");
function createCard(title, url, date, by){
    /* Create elements for card component */

    let wrapper = document.createElement("div");
    let titleContainer = document.createElement("h2");
    let urlContainer = document.createElement("a");
    let dateContainer = document.createElement("p");
    let userContainer = document.createElement("p");

    let infoContainer = document.createElement("div");

    wrapper.classList.add("card");
    infoContainer.classList.add("info");
    mainContainer.append(wrapper);

    wrapper.append(
        titleContainer,
        urlContainer,
        infoContainer,
    );

    
    infoContainer.append(
        dateContainer,
        userContainer,
    )


    titleContainer.classList.add("title");
    urlContainer.classList.add("url");
    dateContainer.classList.add("date");
    userContainer.classList.add("user");

    /* Show Data */
    titleContainer.innerText = (title);
    urlContainer.innerText = ("Read Full Article");
    urlContainer.setAttribute("href", url);
    dateContainer.innerText = (date);
    userContainer.innerText = ("By " + by);

    if(url==null){
        console.log("not available")
        urlContainer.innerText=("Link not available");
        urlContainer.removeAttribute("href");
    }
}