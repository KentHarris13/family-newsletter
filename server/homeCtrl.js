const { send } = require('process')
const newsletter = require('./db.json')
let globalId = 2

module.exports = {
    getnewsletter: (req, res) => res.status(200).send(newsletter),

    deletenewsletter: (req, res) => {
        // I think this is not doing what I actully want it to whitch is deleting old newsletters
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index,2)
        res.status(200).send(newsletter)
    },

    createnewsletter: (req, res) => {
        const {addText, imageURL} = req.body

        let createnewsletter = {
            addText,
            addURL,
            id: globalId
        }

        newsletter.push(createnewsletter)
        globalId++

        res.status(200).send(newsletter)
    },

    updatenewsletter: (req, res) => {
        let { id } = req.params
        let { type } =req.body
    },

}