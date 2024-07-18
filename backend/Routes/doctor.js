import express from 'express';
import {
    updateDoc,
    deleteDoc,
    getAllDoc,
    getSingleDoc
} from '../controller/doctorController.js'

const router = express.Router();

router.get('/:id', getSingleDoc)
router.get('/', getAllDoc)
router.put('/:id', updateDoc)
router.delete('/:id', deleteDoc)

export default router;