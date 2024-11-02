const app = import("./src/app") ; 
const port = process.env.PORT || 4500 ; 

app.listen(port ,()=>{
  console.log(`the app is listen at http://localhost:${port}`)
})