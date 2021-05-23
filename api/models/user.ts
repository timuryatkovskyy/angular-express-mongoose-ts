import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    profileType: String,
    name: String, 
    lastname: String,
    email: String,
    password: String

})
userSchema.pre('save', function(next) {
    
    const user: any = this

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})
const User = mongoose.model('profile', userSchema)

export default User