const urlTopStories = "https://hacker-news.firebaseio.com/v0/topstories.json"
async function getTopStories(url) {
    const idResponse = await axios.get(url);
    for(let i = 0; i<5; i++){
        let id = idResponse.data[idNumbers];
        
        let storieUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        const response2 = await axios.get(storieUrl);
        let unixTime = response2.data.time;
        topStoriesCard(response2.data.title, response2.data.url, timeConverter(unixTime));

        idNumbers++;
        console.log(storieUrl);
    }
}
getTopStories(urlTopStories);