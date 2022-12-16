import mongoose from 'mongoose';
const registroShema = mongoose.Schema(
    {
        cliente: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        },
        articulos: {
            type: Array,
            required: true
        },
        confirmado: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const registro = mongoose.model('registro', registroShema);
export default Registro;