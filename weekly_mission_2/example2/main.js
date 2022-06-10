const explorers = [
    {
        name: "Explorer 1", 
        exercises_complated: 10, 
        rate: 99, 
        city: "CDMX", 
        stack: [
            "js", 
            "c#"
        ],
        mission:{
            onboarding:{
                isFinished: true, 
                exercisesFinished: true
            },
            fronted:{
                isFinished: true, 
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2", 
        exercises_complated: 9, 
        city: "Veracruz", 
        rate: 50, 
        stack:[
            "js"
        ],
        mission:{
            onboarding:{
                isFinished: false,
                exercisesFinished: false
            },
            fronted:{
                isFinished: false, 
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_complated: 3, 
        city: "Sonora", 
        rate: 100, 
        stack:[
            "elixir"
        ], 
        mission:{
            onboarding:{
                isFinished: true, 
                exercisesFinished: true
            },
            fronted:{
                isFinished: false, 
                exercisesFinished: false
            }
        }
    }
]

console.log("Ejercicio 2.1")
console.log(explorers.forEach(explorer =>console.log(explorer.name)))

console.log("Ejercicio 2.2")
console.log(explorers.forEach(explorer =>console.log(explorer.stack)))

console.log("Ejercicio 2.3")
let explorer_stack= explorers.map(item => item.stack)
console.log(explorer_stack)

console.log("Ejercicio 2.4")
let explorer_filter = explorers.filter(item => item.stack.includes("js"))
console.log(explorer_filter)

console.log("Ejercicio 2.5")
let find_explorer_cdmx = explorers.filter(item => item.city.includes("CDMX"))
console.log(find_explorer_cdmx)

console.log("Ejercicio 2.6")
let all_excercises= explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_complated, 0)
console.log("los ejercicios completados de los explorers es de: "+ all_excercises)

console.log("Ejercicio 2.7")
let explorer_fronted_finished = explorers.some(item => item.mission.fronted.isFinished, true)
console.log(explorer_fronted_finished)

console.log("Ejercicio 2.8")
let explorer_onboarding_finished = explorers.every(item => item.mission.onboarding.isFinished, true)
console.log(explorer_onboarding_finished)
