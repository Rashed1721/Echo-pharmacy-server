import express from 'express'
import { PaymentControllers } from './payment.controller'

const router = express.Router()

router.post('/create-payment-intent', PaymentControllers.createPaymentIntent)

export const PaymentRoutes = router
