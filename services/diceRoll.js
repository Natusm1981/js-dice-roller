function roll(maxNumber){
    try{
        const data = new Date()

        return ( {
            'Hora_rolagem': data.getTime(),
            'min_num': 1,
            'max_num': maxNumber,
            'resultado': ( 1 + Math.floor(Math.random()*(maxNumber)))//.toString()
        })
    }
    
    catch(err){
        console.error('Algum parametro veio errado', err)
    }
}


export{
    roll
}