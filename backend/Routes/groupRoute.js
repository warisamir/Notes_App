const express=require("express");
const router =express.Router();
const GroupRouter=require("../Controllers/createGroup");
router.post('/', GroupController.createGroup);
router.get('/:id', GroupController.getGroup);
router.put('/:id', GroupController.updateGroup);
router.delete('/:id', GroupController.deleteGroup);

module.exports = router;