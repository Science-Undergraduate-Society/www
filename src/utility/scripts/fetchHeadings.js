const axios = require("axios");
const cheerio = require("cheerio");

async function fetchHeadings(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const headings = [];

    $("h1, h2, h3, h4, h5, h6").each((index, element) => {
      headings.push($(element).text().trim());
    });
    // need to find a way to have only certain things searchable or else a mess

    console.log("headings are:", headings);
    return headings;
  } catch (error) {
    console.log("error received : ", error);
  }
}

fetchHeadings("https://www.susubc.ca/");
