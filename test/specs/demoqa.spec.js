describe('testing demoqa website', () => {
    it('launching website',async() => {
        browser.url('https://demoqa.com/');
        await expect($('//header/descendant::img')).toBeDisplayed();
    })
});
