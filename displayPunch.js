const cheerio = require('cheerio'),
    axios = require('axios');

let story = new Set();

const fetchData = async (url) => {
    const result = await axios.get(url);
    return cheerio.load(result.data);
  }


  const getFullStory = async (url) => {
    const $ = await fetchData(url);
  
    $(".row .entry-content > p").each((index, element) => {
      story.add($(element).html());
    });
    console.log(story)
    return  {story:[...story]
    }

}



module.exports = getFullStory;