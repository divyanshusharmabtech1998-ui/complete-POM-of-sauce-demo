const {test, expect} = require ('@playwright/test')
const loginpage = require ('../pages/loginpage')
const creds = require ('../utils/credentials')
const productpage = require ('../pages/productpage')
const checkoutpage = require ('../pages/checkoutpage')
const data = require ('../utils/testdata')
const finalpage = require ('../pages/finalpage')

test ('loginpage', async ({page})=>{
    const login = new loginpage(page)
    const product = new productpage(page)
    const checkout = new checkoutpage(page)
    const final = new finalpage(page)

    await login.URL()

    await login.login(
        creds.username,
        creds.password
    )

    await expect(page).toHaveURL(/inventory/)

    await product.addtocart()

    await product.gotocart()

    await checkout.checkout()

   // console.log(data)

    await checkout.userinfo(
        data.checkoutinfo.fname,
        data.checkoutinfo.lname,
        data.checkoutinfo.zipcode
    )

    await checkout.continue()

    await final.finalstep()



    await page.pause()
})
