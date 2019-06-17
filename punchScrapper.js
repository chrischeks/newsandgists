const cheerio = require('cheerio'),
    siteUrl = 'https://punchng.com/all-posts/',
    axios = require('axios');
let $ = '';
let target =''


axios(siteUrl)
    .then(result => {
        const html = result.data;
        $ = cheerio.load(html);
        target = $('.cards .items');   
    })
    .catch(console.error);
    

const getResults = async () => {
    try {
        let newsDetails = []
    target.each(async function () {
        const summary = $(this).find('.seg-summary > p').text();
        const image = $(this).find('.col-sm-2 > figure').attr('data-src');
        const date = $(this).find('.filler .seg-time').text()
        const anchor = $(this).find('a');
        const href = anchor.attr('href')
        const title = anchor.attr('title')
    
        newsDetails.push({
            title,
            summary,
            href,
            date,
            image
        })
    })

    return newsDetails
    } catch (error) {
        console.log(error)
    }
    
};

module.exports = getResults;