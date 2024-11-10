import { Schema, model } from 'mongoose'
import { TPayment } from './payment.interface'

const paymentSchema = new Schema<TPayment>({
  price: {
    type: Number,
    required: true,
  },
})

export const Payment = model<TPayment>('Payment', paymentSchema)
