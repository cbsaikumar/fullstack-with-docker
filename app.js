import express from 'express'

const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => res.json({
    meta: {
        status: true,
        message: 'Bhargava welcomes you to the app!',
        code: 200
    }
}))

app.get('/login/facebook', (req, res) => res.json({
    meta: {
        status: true,
        message: 'It is facebook oAuth login',
        code: 200
    }
}))

app.get('**', (req, res) => res.redirect(302, '/'))

app.listen(port, console.log(`app listening on ${port}`))

export default app