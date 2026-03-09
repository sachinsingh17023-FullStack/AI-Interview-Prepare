require("dotenv").config()
const app=require("./src/app")
const connectToDB=require("./src/config/database")
const invokeGeminiAi=require("./src/services/ai.service")
// const {resume,selfDescription,jobDescription}=require("./src/utils/sampleData")
// const generateInterviewReport=require("./src/services/ai.service").generateInterviewReport

connectToDB()
invokeGeminiAi()
app.listen(3000,()=>
{
    console.log("Server is running on 3000")
})