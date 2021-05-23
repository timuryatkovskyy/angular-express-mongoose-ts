import mongoose, {Schema} from 'mongoose'


const faqSchema = new Schema({
    title: String,
    description: String

})

const Faq = mongoose.model('faq', faqSchema)

export default Faq