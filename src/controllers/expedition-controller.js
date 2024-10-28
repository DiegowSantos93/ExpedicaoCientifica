import Expedition from "../models/expedition-model.js"
const store = async (req, res) => {
    try {
        await Expedition.create(req.body)
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const index = async (req, res) => {
    try {
        const content = await Expedition.find(req.query).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req, res) => {
    try {
        const content = await Expedition.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req, res) => {
    try {
        const content = await Expedition.findByIdAndUpdate(req.params.id, req.body).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async (req, res) => {
    try {
        const content = await Expedition.findByIdAndDelete(req.params.id).exec()
        res.json()
    } catch (error) {
        res.status(400).json(error)
    }
}

export default {store, index, show, update, destroy}
