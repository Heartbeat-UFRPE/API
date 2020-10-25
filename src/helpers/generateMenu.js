function generateMenu(result){
    
    cardapio = [
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        {
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
    ]

    return cardapio
}

module.exports = generateMenu