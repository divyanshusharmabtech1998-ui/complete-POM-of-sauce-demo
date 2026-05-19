class checkoutpage{
    constructor(page){
        this.page = page
        this.checkoutbtn = '#checkout'
        this.firstname = '#first-name'
        this.lastname = '#last-name'
        this.zipcode = '#postal-code'
        this.continuebtn = '#continue'
    }

    async checkout(){
        await this.page.click(this.checkoutbtn)
    }

    async userinfo(fname, lname, zipcode){
        await this.page.fill(this.firstname, fname)
        await this.page.fill(this.lastname, lname)
        await this.page.fill(this.zipcode, zipcode)

    }

    async continue(){
        await this.page.click(this.continuebtn)
    }
}

module.exports = checkoutpage