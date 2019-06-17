const cheerio = require('cheerio');
const siteUrl = 'https://leadership.ng/';
const axios = require('axios');
let $ = '';
let cardRow = ''

axios(siteUrl)
    .then(result => {
        const html = result.data;
        $ = cheerio.load(html);
        cardRow = $('.mvp-blog-story-list > li');
    })
    .catch(console.error);

const getLeadershipResults = async () => {
    try {
        let newsDetails = []
        cardRow.each(async function () {
            const summary = $(this).find('.mvp-blog-story-text > p').text();
            const image = $(this).find('.mvp-blog-story-img > img').attr('src');
            const date = $(this).find('.mvp-cat-date-wrap .mvp-cd-date').text()
            const href = $(this).find('a').attr('href');
            const title = $(this).find('.mvp-blog-story-text > h2').text();
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

module.exports = getLeadershipResults;