import mongoose, {Schema} from 'mongoose'


const filterSchema = new Schema({
    name: String
})

const Filter = mongoose.model('filter', filterSchema)

export default Filter