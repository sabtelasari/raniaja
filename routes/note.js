// import { Router } from "express";
// import { Post } from "../models/mongo.js";
// import { get } from "mongoose";

// const router = Router();
// router.get('/', async (req,res,next)=> {
//     try{
//         const notes = await Post.find();
//         res.json(notes);
//     } 
//     catch(e){
//         next(e);
//     }
// }
// );

// router.get('/:id', async (req,res,next)=> {
//     try{
//         const note = await Post.findById(req.params.id);
//         if (!note) return rest.status(404).json({error:"Id tidak ditemukan"})
//         res.json(note);
//     } 
//     catch(e){
//         next(e);
//     }
// }
// );

// router.post('/', async (req,res,next)=> {
//     try{
//         const {title, content, author} = await Post.create({title, content, author});
//         res.status(201).json(note);
//     } 
//     catch(e){
//         next(e);
//     }
// }
// );

// router.put('/:id', async (req,res,next)=> {
//     try{
//         const {title, content, author} = await Post.findByIdAndUpdate(req.params.id, {title, content, author});
//         res.json(note);
//     } 
//     catch(e){
//         next(e);
//     }
// }
// );

// router.delete('/:id', async (req,res,next)=> {
//     try{
//         const {title, content, author} = await Post.findByIdAndDelete(req.params.id);
//         if (!note) return rest.status(404).json({error: "Gagal dihapus"})
//         res.json(note);
//     } 
//     catch(e){
//         next(e);
//     }
// }
// );

// export default router;

import { Router } from "express";
import { Post } from "../models/mongo.js";

const router = Router();

// GET ALL
router.get('/', async (req,res,next)=> {
    try{
        const notes = await Post.find();
        res.json(notes);
    } 
    catch(e){
        next(e);
    }
});

// GET BY ID
router.get('/:id', async (req,res,next)=> {
    try{
        const note = await Post.findById(req.params.id);
        if (!note) return res.status(404).json({error:"Id tidak ditemukan"})
        res.json(note);
    } 
    catch(e){
        next(e);
    }
});

// CREATE
router.post('/', async (req,res,next)=> {
    try{
        const note = await Post.create(req.body);
        res.status(201).json(note);
    } 
    catch(e){
        next(e);
    }
});

// UPDATE
router.put('/:id', async (req,res,next)=> {
    try{
        const note = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(note);
    } 
    catch(e){
        next(e);
    }
});

// DELETE
router.delete('/:id', async (req,res,next)=> {
    try{
        const note = await Post.findByIdAndDelete(req.params.id);
        if (!note) return res.status(404).json({error: "Gagal dihapus"})
        res.json({message: "Berhasil dihapus"});
    } 
    catch(e){
        next(e);
    }
});

export default router;