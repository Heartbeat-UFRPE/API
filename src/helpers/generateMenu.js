const { generateToken } = require("../middlewares/auth")

function generateMenu(result){
    
    cardapio = {
        "segunda":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        "terca":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        "quarta":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        "quinta":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        "sexta":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        "sabado":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
        "domingo":{
            "cafe":[{"comida": result[1].name, "quantidade": "1x" , "kcal" : result[1].calories}],
            "almoco":[{"comida": result[0].name, "quantidade": "1x" , "kcal" : result[0].calories }],
            "jantar":[{"comida": result[2].name , "quantidade": "1x" , "kcal" : result[2].calories }],
        },
    }

    return cardapio
}

module.exports = generateMenu