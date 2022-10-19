import express from 'express';
const ticketRouter = express.Router();
import { getTickets, getTicket, createTicket, deleteTicket, updateTicket } from '../controllers/ticketController.js'
import protect from '../middleware/authMiddleware.js'

// Re-route into note router
import noteRouter from './noteRoutes.js'
ticketRouter.use('/:ticketId/notes', noteRouter)

ticketRouter.route('/').get(protect, getTickets).post(protect, createTicket)

ticketRouter
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)

export default ticketRouter