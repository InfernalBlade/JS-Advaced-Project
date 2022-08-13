const urlNewStories = "https://hacker-news.firebaseio.com/v0/newstories.json";

let btn = document.querySelector(".loadmore");

let idNumbers = 0;

async function getNewStories(url) {
    const idResponse = await axios.get(url);
    for(let i = 0; i<10; i++){
        let id = idResponse.data[idNumbers];
        
        let storieUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        const response2 = await axios.get(storieUrl);
        let unixTime = response2.data.time;
        newStories(response2.data.title, response2.data.url, timeConverter(unixTime),response2.data.by);

        idNumbers++;
    }
}
getNewStories(urlNewStories);




btn.addEventListener("click", ()=>{
    getNewStories(urlNewStories);
})

