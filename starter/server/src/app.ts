import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const PORT = 8080

// mengdestructured mongoDB credential dari nodemon.json
const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME
} = process.env

const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.lqean.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority` 
const options = { useNewUrlParser: true, useUnifiedTopology: true} //ini ada didocumentation mongoose

// supaya server kita dapat diakses tanpa ada halangan dari cors policy
app.use(cors())

// method get menandakan kita mengambil data dari endpoint tertentu
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
// app.get merequired lebih dari 1 parameter
// parameter pertama adalah route/url
// parameter kedua adalah method controller mengambil request dan memberikan response
// membuat arrow function yang didalamnya method send yg akan mengirim user yang meminta data dari endpoints dari '/' route

app.get('/about', (req: Request, res: Response) => {
  res.send('this is route ABOUT')
})

mongoose.set('useFindAndModify', true)
mongoose.connect(uri, options)
  .then(() => {
    // kita akan membuat server ini dapat mendengar dengan membuat listen
    app.listen(PORT, () => {
      console.info(`App is listening at http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    throw error
  })
