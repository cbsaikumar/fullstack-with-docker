import express from 'express'

const app = express()

const port = process.env.PORT || 8080

app.use('/', (req, res) => res.json({
    meta: {
        status: true,
        message: 'Bhargava welcomes you to the app!',
        code: 200
    }
}))

app.listen(port, console.log(`app listening on ${port}`))

export default app