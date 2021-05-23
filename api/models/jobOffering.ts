import mongoose, {Schema} from 'mongoose'


const jobOfferingSchema = new Schema({
    title: String,
    description: String,
    yearsOfExperience: Number,
    salary: {
        amount: Number,
        currency: String
    }

})

const JobOffering = mongoose.model('offering', jobOfferingSchema)

export default JobOffering