const { default: mongoose } = require('mongoose');
const htmlContentModels = require('../models/htmlContentModels');
const htmlDescriptionModel = require('../models/htmlDesctiptionModel');
const htmlModel = require('../models/htmlContentModels');
const JeeMainModel = require('../models/jeeMainQue');
const jeeMainDes = require('../models/jeeMainQueDes');

exports.createContent=async(req,res)=>{
    try {
        const {title} = req.body;
        if(!title){
            return res.status(400).send({
                success:false,
                massage:"All field are requred",
            });
        }
        const content = new htmlContentModels({title});
        await content.save();
        return res.status(200).send({
            success:true,
            massage:"Content is Posted",
            content
        })
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}

exports.createDescription = async(req,res)=>{
    try {
        const {subtitle,subdescription,content} = req.body;
        if(!subtitle || !subdescription || !content){
            return res.status(401).send({
                success:false,
                massage:"All field are required"
            })
        }
        const existingContent = await htmlContentModels.findById(content);
        if(!existingContent){
            return res.status(201).send({
                success:false,
                massage:"Content is not match",
            });
        }
        const descr = new htmlDescriptionModel({subtitle,subdescription,content});

        const session = await mongoose.startSession();
        session.startTransaction();
        await descr.save({session});
        existingContent.description.push(descr);
        await existingContent.save({session});
        await session.commitTransaction();
        await descr.save();
        return res.status(200).send({
            success:true,
            massage:"Description is posted",
            descr
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}

exports.getContent= async(req,res)=>{
    try {
        const content = await htmlContentModels.find({});
        return res.status(200).send({
            success:true,
            massage:"All Content data",
            content
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}
exports.getSingleContent = async(req,res)=>{
    try {
        const {id} = req.params;
        const sdata = await htmlModel.findById(id);
        if(!sdata){
            return res.status(404).send({
                success:false,
                massage:"Content not found"
            })
        }
        return res.status(200).send({
            success:true,
            massage:"Fetch All Data",
            sdata
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            massage:"Error while massage",
            error
        })    
    }

}
exports.getHtmlDescriptionDetalis=async(req,res)=>{
    try {
        const {id} = req.params;
        
        const description = await htmlContentModels.findById(id).populate("description");
        if(!description){
            return res.status(404).send({
                success:false,
                massage:"No Description found"
            });
        }
        return res.status(200).send({
            success:true,
            massage:"All Description fetch",
            description
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            massage:"Error in description",
            error
        })   
    }
}

exports.createJeeMain = async(req,res)=>{
    try {
        const {title} = req.body;
        if(!title){
            return res.status(400).send({
                success:false,
                massage:"All field are requred",
            });
        }
        const content = new JeeMainModel({title});
        await content.save();
        return res.status(200).send({
            success:true,
            massage:"Content is Posted",
            content
        })
        
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}
exports.getJeeMain = async(req,res)=>{
    try {
        const content = await JeeMainModel.find({});
        return res.status(200).send({
            success:true,
            massage:"All Content data",
            content
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}
exports.getJeeMainSingle = async(req,res)=>{
    try {
        const {id} = req.params;
        const sdata = await JeeMainModel.findById(id);
        if(!sdata){
            return res.status(404).send({
                success:false,
                massage:"Content not found"
            })
        }
        return res.status(200).send({
            success:true,
            massage:"Fetch All Data",
            sdata
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            massage:"Error while massage",
            error
        })    
    }
}
exports.createJeeMainDes = async(req,res)=>{
    try {
        const {question,options,answer,content} = req.body;
        if(!question || !options || !content){
            return res.status(401).send({
                success:false,
                massage:"All field are required"
            })
        }
        const existingContent = await JeeMainModel.findById(content);
        if(!existingContent){
            return res.status(201).send({
                success:false,
                massage:"Content is not match",
            });
        }
        const descr = new jeeMainDes({question,options,answer,content});

        const session = await mongoose.startSession();
        session.startTransaction();
        await descr.save({session});
        existingContent.description.push(descr);
        await existingContent.save({session});
        await session.commitTransaction();
        await descr.save();
        return res.status(200).send({
            success:true,
            massage:"Description is posted",
            descr
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            massage:'Error in registration',
            success:false,
            error
        })
    }

}
exports.getJeeMainDes = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const description = await JeeMainModel.findById(id).populate("description");
        if(!description){
            return res.status(404).send({
                success:false,
                massage:"No Description found"
            });
        }
        return res.status(200).send({
            success:true,
            massage:"All Description fetch",
            description
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            massage:"Error in description",
            error
        })   
    }
}
