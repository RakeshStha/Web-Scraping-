// const puppeteer = require("puppeteer");

// (async () => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto("https://www.meroauto.com/news/stock-motorcycle-and-scooter/");
  
//   const grabTitle = await page.evaluate(()=>{
//       const Hed = document.querySelector(".page-title-name.mb-20 h1")
//       return Hed.innerHTML;
//   })

//   console.log(grabTitle)
//   await browser.close()
// })()



const puppeteer = require('puppeteer');

(async () => {

    //headless true = don't open the browser (chromium)
    //headless false = open the browser (chromium)
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto("https://nagariknews.nagariknetwork.com/social-affairs/788911-1649309222.html");

    //To get the og tag for meta and head tag of HTML
    let title= await page.evaluate(() => {
        return document.head.querySelector('meta[property="og:title"]').getAttribute("content"); 
    });

    let description= await page.evaluate(() => {
        return document.head.querySelector('meta[property="og:description"]').getAttribute("content"); 
    });

    console.log(title, description);


      // For Normal website title and url 
    
    // const title = await page.title();
    // const url = await page.url();
    // console.log(title, url)

    await browser.close()
})()
