function roll(maxNumber){
    try{
        const data = new Date()

        return JSON.stringify( {
            'id': data.getTime().toString(),
            'numero': ( 1 + Math.floor(Math.random()*(maxNumber))).toString()
        })
    }
    
    catch(err){
        console.error('Algum parametro veio errado', err)
    }
}


export{
    roll
}