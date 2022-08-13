const urlNewStories = "https://hacker-news.firebaseio.com/v0/newstories.json";

let btn = document.querySelector(".loadmore");

let idNumbers = 0;

async function getapi(url) {
    const idResponse = await fetch(url);
    var ids = await idResponse.json();
    for(let i = 0; i<10; i++){
        let id = ids[idNumbers];
        console.log(idNumbers + " id: " + id);
        let storieUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        const response2 = await fetch(storieUrl);
        var data2 = await response2.json();
        let unixTime = data2.time;
        createCard(data2.title, data2.url, timeConverter(unixTime),data2.by);

        idNumbers++;
    }
}
getapi(urlNewStories);

btn.addEventListener("click", ()=>{
    getapi(urlNewStories);
})

