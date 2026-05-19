class productpage{
    constructor(page){
        this.page= page
        this.addtocartbtn = '#add-to-cart-sauce-labs-fleece-jacket'
        this.gotocartbtn = '.shopping_cart_link'
    }

    async addtocart(){
        await this.page.click(this.addtocartbtn)
    }
    async gotocart(){
        await this.page.click(this.gotocartbtn)
    }
}
module.exports = productpage