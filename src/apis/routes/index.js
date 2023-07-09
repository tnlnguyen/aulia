const express = require('express')

const userRoute = require('./v1/user.route')
const fileRoute = require('./v1/file.route')

const router = express.Router()

const defaultRoutes = [
    {
        path: '/v1/user',
        route: userRoute,
    },
    {
        path: '/v1/file',
        route: fileRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
