describe('demo on iframes', () => {

    it('iframe sample test', async() => {
        await browser.url("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
        const iframe = await $("//iframe[@name='globalSqa']");
        browser.switchToFrame(iframe);
        browser.pause(2000);

    })
    
})
