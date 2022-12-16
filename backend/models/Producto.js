import mongoose from 'mongoose';
const productoSchema = new mongoose.Schema({
    codigoDePaquete: {
        type: 'string',
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    destinario: {
        type: Number,
        required: true,
        trim: true
    },
    image: {
        url: String,
        public_id: String,
    },
    direccionDeDestinario: {
        type: Number,
        required: true,
        trim: true
    }
})
export default mongoose.model('Producto', productoSchema);