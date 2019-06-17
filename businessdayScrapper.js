const cheerio = require('cheerio');
const siteUrl = 'https://businessday.ng/';
const axios = require('axios');
let $ = '';
let target = ''

axios(siteUrl)
    .then(result => {
        const html = result.data;
        $ = cheerio.load(html);
        target = $('.listing-blog-5 > article');
        console.log(target)
    })
    .catch(console.error);

const getBusinessDayResults = async () => {
    try {
        let newsDetails = []
        target.each(async function () {
            const summary = $(this).find('.item-inner .post-summary').text();
            const image = $(this).find('.img-holder').attr('data-bsrjs');
            const date = $(this).find('.post-published').attr('datetime').split("T")[0];
            const story = $(this).find('.title > a')
            const href = story.attr('href');
            const title = story.text();
            newsDetails.push({
                title,
                summary,
                image,
                href,
                date
            })
        })
        return newsDetails
    } catch (error) {
        console.log(error)
    }

};

module.exports = getBusinessDayResults;