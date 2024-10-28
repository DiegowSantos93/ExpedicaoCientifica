import Species from "../models/species-model.js"
const store = async (req, res) => {
    try {
        await Species.create(req.body)
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const index = async (req, res) => {
    try {
        const content = await Species.find(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res) => {
    try {
        const content = await Species.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res) => {
    try {
        const content = await Species.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res) => {
    try {
        const content = await Species.findByIdAndDelete(req.params.id).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

export default {store, index, show, update, destroy}
