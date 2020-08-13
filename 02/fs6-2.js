const fs = require('fs-extra')

const floder = './test'

fs.remove(floder,err => {
    if(err){
        console.log(err)
    }
})

fs.remove(floder).then(() => {
    //done
}).catch(err=>{
    console.log(err)
})

async function removeFloder(floder){
    try {
        await fs.remove(floder)
    } catch (err) {
        console.log(err)
    }
}
const floder2 = './test'
removeFloder(floder2)