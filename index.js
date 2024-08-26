const puppeteer = require('puppeteer');

(async () => {
    // Puppeteer লঞ্চ কর
    const browser = await puppeteer.launch({ headless: false }); // headless: false দিলে ব্রাউজারটি দৃশ্যমান থাকবে
    const page = await browser.newPage();
    
    // ওয়েব পেজ লোড কর
    await page.goto('https://bytehogs.blogspot.com/2024/08/blog-post.html'); // এখানে আপনার ওয়েবসাইটের URL দিন
    
    // নির্দিষ্ট div সিলেক্ট এবং তাতে ক্লিক কর
    await page.waitForSelector('#ads'); // এখানে আপনার div-এর সঠিক selector দিন
    await page.click('#ads'); // এখানে ক্লিক করার জন্য div-এর selector দিন
    
    // কাজ শেষে ব্রাউজার ক্লোজ কর
    await browser.close();
})();
