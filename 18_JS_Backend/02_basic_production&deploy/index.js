console.log("Krishna Chaurasia");
/*

-express is a web framework
-install express in terminal : npm install express
-after successfully installation; it will show in package.json's 
    dependencies's object as "express": "^4.19.2"
- It will aslo create a package-lock.json file in the same folder
- it will also create node_modules files in the same folder 
  
*/

//****now working on express */
require('dotenv').config()
const express  = require('express')
//or import express from "express" is same as const express  = require('express')

const app = express() //creating a var. app using express var

const port = 3000 //this is the free port on server where it will listen response

// app listens on '/' i.e home route or on home page
//req: is request and res: is response
app.get('/',(req,res) => {
    res.send('Hello World!')
})
// app listens on '/twitter' after home route
app.get('/twitter',(req,res)=>{
    res.send('krishna.com')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at krishna.com</h1>')
})
// we need to restart the code to run this /login page else will give error becasue new get is added

app.get('/youtube',(req,res)=>{
    res.send('<h2>go to youtube.krishna.com</h2>')
})
// we need to restart the code to run this /login page else will give error becasue new get is added

/*
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
*/
//or use below code if dotenv is imported
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`) // port = 3000, not port = 4000 in env
})



// **** after this code run the code terminal : npm run start
// once start running it will not close because it keeps on listening
// using these lines of code a local server has been created
// and we ca  see on http://localhost:3000  or http://localhost:3000/twitter
// to stop the server the server type :  Ctrl + C.



// note do not directly publish it on githbu make some changes to save db password etc. 

/*
-To deploy: 
 -1) in terminal install : npm install dotenv

  -1.1) -after successfully installation; it will show in package.json's 
    dependencies's object as "dotenv": "^16.4.5",
 
-2)After installing dotenv : need to create a file. and it is imported on the above line 


-3) To deploy you can use : digitalocean, 
    paid sites to deply : Heroku, railway.app, seenode.com, dashboard.random.com,cyclic.sh
 */


