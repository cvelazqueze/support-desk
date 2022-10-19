import { Router } from 'express'
const noteRouter = Router({ mergeParams: true })
import { getNotes, addNote } from '../controllers/noteController.js'
import protect from '../middleware/authMiddleware.js'

noteRouter.route('/').get(protect, getNotes).post(protect, addNote)

export default noteRouter