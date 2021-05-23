import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from './models/user'
import JobOffering from './models/jobOffering'
import Faq from './models/faqs'
import Filter from './models/filter'


const router = express.Router({caseSensitive: true, strict: true})
const uri = `mongodb://localhost:27017/jobSeekers`
const mongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, mongoClientOptions)

router.get('/', (req, res) => {
    res.send('Hello World')
    console.log(`Called ${req.url}`);
    
})

/*
*   JOB SEEKERS' REQUESTS
*
 */

router.route('/api/job-seeker/:id?')
    /* GET USER */
    .get(async function (req, res) {
        const us = await User.find({})     
        res.send(us) 
    })
    /* CREATE NEW USER */
    .post(async (req, res) => {
        console.log(req.body)
        await User.create(req.body)
        console.log(`Created ${req.body.name}.`)
    })
    /* UPDATE EXISTING USER */
    .put(async function (req, res) {
        const us = await User.findByIdAndUpdate(req.params.id, req.body)
        res.send(`Updated ${us}`)
    })
    /* DELETE USER */
    .delete(async function (req, res) {
        const us = await User.findByIdAndDelete(req.params.id)
        res.send(`Deleted ${us}`)
    })

/*
*   JOBSEEKER'S AUTHENTICATION
*
*  */
router.route('/api/auth')
    .post(async function(req, res) {
        const {email, password} = req.body
        User.findOne({email: email}, (error: any, user: any) => {
            if (user) {
                bcrypt.compare(password, user.password, (error, same) => {
                        if (same) {
                            console.log(user)
                            res.send(user)
                            console.log(`Password matched.`)
                        }
                        else {
                            console.log('Try again')
                        }
                    }
                )
            }
            
        })
    })

/*
*   FAQ REQUESTS
*
*/
router.route('/api/faq')
    .get(async function(req, res) {
        const faqs = await Faq.find({})
        res.send(faqs)
    })

/*
*   JOB OFFERINGS 
* 
*/

router.route('/api/job-offering')
    .get(async function(req, res, next) {
        const jo = await JobOffering.find({})
        res.send(jo)
    })
/*
*   FILTERS
*
*/
router.route('/api/filters')
    .get(async function(req, res) {
        const f = await Filter.find({})
        res.send(f)
    })



export default router;