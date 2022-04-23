// 1.- Creacion de un objeto con propiedades. 
let myCar = new Object();
myCar.make= 'Ford';
myCar.model='Mustang';
myCar.year=1969; 

console.log(myCar);
// 2.- Declaracion de ub objeto con variables locales y publicas. 
const myModule =(( ) =>{
    // Variable de contexto local 
    const privateFoo="Soy un valor privado, solo me usan dentro de este objeto" 
    const privateBar=[1,2,3,4]
    const baz="Soy un valor que va a ser expuesto"
    // Variable para guardar las variables locales 
    const exported={
        publicFoo: "Valor publico , pueden verme desde donde me llamen",
        publicBar: "Oto valor publico",
        publicBaz: baz
    }
    // Exposicion de variables locales 
    return exported
})
console.log(myModule)