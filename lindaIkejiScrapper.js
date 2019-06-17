const cheerio = require('cheerio');
const siteUrl = 'https://www.lindaikejisblog.com/';
const axios = require('axios');
let $ = '';
let cardRow = ''

axios(siteUrl)
    .then(result => {
        const html = result.data;
        $ = cheerio.load(html);
        cardRow = $('.col-md-12 .col-xs-12');
    })
    .catch(console.error);

const getLindaIkejiResults = async () => {
    try {
        let blogDetails = []
        cardRow.each(async function () {
            const summary = $(this).find('.story_block .story_meta > p').text();
            const image = $(this).find('.text-center').attr('src');
            const date = $(this).find('.meta .post_age').text().split(' ')[5];
            const story = $(this).find('.story_title > a')
            const href = story.attr('href');
            const title = story.text();
            blogDetails.push({
                title,
                summary,
                image,
                href,
                date
            })
        })
        return blogDetails
    } catch (error) {
        console.log(error)
    }

};

module.exports = getLindaIkejiResults;