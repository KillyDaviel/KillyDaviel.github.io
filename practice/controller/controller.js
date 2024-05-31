const schema = require('../models/model')

const getalltasks =  async (req,res) => {
    try {
        const tasks = await schema.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({error})
    }    
}

const gettask =  async (req,res) => {
    try {
        const {id : taskID} = req.params
        const task = await schema.findOne({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`taskID ${taskID} is not found`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}

const createtask =  async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})        
    } catch (error) {
        res.status(500).json({error})
    }
}

const deletetask =  async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task){
            return res.status(404).json({ msg:`Task ID ${taskID} not found`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({error})
    }
}

const updatetask =  async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if (!task){
            return res.status(404).json({ msg:`Task ID ${taskID} not found`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getalltasks,gettask,createtask,deletetask,updatetask
}