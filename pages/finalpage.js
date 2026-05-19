class finalpage{
    constructor(page){
        this.page = page
        this.finishbtn = '#finish'
        this.backhomebtn = "#back-to-products"
        this.menubtn = '#react-burger-menu-btn'
        this.logoutbtn = '#logout_sidebar_link'
    }

    async finalstep(){
        await this.page.click(this.finishbtn)
        await this.page.click(this.backhomebtn)
        await this.page.click(this.menubtn)
        await this.page.click(this.logoutbtn)
    }

}

module.exports = finalpage