import mongoose from "mongoose";


// user schema
const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true,
    },
    r_price : {
        type : Number,
        required : true
    },
    s_price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    tage : {
        type : Array,
        default : []
    },
    category : {
        type : Array,
        default : []
    },
    photo : {
        type : String
    },
    gallary : {
        type : Array,
        default : []
    }
}, {
    timestamps : true
})



// export schema
export default mongoose.model(`Product`, productSchema)