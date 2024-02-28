const express=require('express');
const router=express.Router();
const NoteController=require('../Controllers/createNote');
router.post('/', NoteController.createNote);
router.get('/:id', NoteController.getNote);
router.put('/:id', NoteController.updateNote);
router.delete('/:id', NoteController.deleteNote);
module.exports=router