class LoginPage{

    get userName(){
        return $("//label[normalize-space()='Username']/following::input[@name='username']");
    }

    get userPassword(){
        return $("//input[@name='password']")
    }

    get btnLogin(){
        return $("//button")
    }

    get dashboard(){
        return $("//h6[text()='Dashboard']")
    }

    async login(username,password){
        await this.userName.waitForDisplayed();
        await this.userName.setValue(username);
        await this.userPassword.setValue(password);
        await this.btnLogin.click();
    }

    async landingPage(){
        await expect(this.dashboard).toBeDisplayed();
    }

}

module.exports = new LoginPage();