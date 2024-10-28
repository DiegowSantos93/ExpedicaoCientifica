import Expedition from "../models/expedition-model.js";
import Explorer from "../models/explorer-model.js"; 
import Species from "../models/species-model.js";  

const store = async (req, res) => {
    try {
        const { participants, speciesFound } = req.body; 
        
        const existingExplorer = await Explorer.findById(participants);
        if (!existingExplorer) {
            return res.status(404).json({ message: "Explorer não encontrado" });
        }

        const existingSpecies = await Species.findById(speciesFound);
        if (!existingSpecies) {
            return res.status(404).json({ message: "Species não encontrada" });
        }

        const expedition = await Expedition.create(req.body);
        res.status(201).json({ message: "Expedição criada com sucesso", expedition });
        
    } catch (error) {
        res.status(400).json({ message: "Erro ao criar expedição", error });
    }
};

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
