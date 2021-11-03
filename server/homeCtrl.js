const { send } = require('process')
const newsletter = []
let globalId = 1

module.exports = {
    getnewsletter: (req, res) => res.status(200).send(newsletter),

    deletenewsletter: (req, res) => {
        // I think this is not doing what I actully want it to whitch is deleting old newsletters
        let index = newsletter.findIndex(elem => elem.id === +req.params.id)
        newsletter.splice(index,1)
        res.status(200).send(newsletter)
    },

    createnewsletter: (req, res) => {
        const {addText, addURL} = req.body

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