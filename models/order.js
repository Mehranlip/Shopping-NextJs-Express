import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [{
        title: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
    }],
    shippingData: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        postlCode: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    totalPrice: { type: Number, required: true }

})


const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)




export default Order