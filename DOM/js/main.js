// methods of document objects

document.getElementById() //element
document.getElementsByClassName() // objeto de tipo htmlCollection
document.getElementsByTagName() //objeto de tipo htmlCollection

document.querySelector() // element
document.querySelectorAll() // objeto de tipo nodeList



// create a elements
let elementP = document.createElement('p')
let text = document.createTextNode('Hola Koder')

elementP.appendChild(text)

let kodersQuantity = parseInt(prompt('¿Cúantos Koders desea registrar?'))

 const koderNames = []
 for (let i = 0; i < kodersQuantity; i++) {
     let koderName = prompt(`¿Cúal es el mobre del koder ${i+1}`)
     koderNames.push(koderName)
 }

 function printToKoders() {
     document.getElementsByTagName('ol')[0] ? document.getElementsByTagName('ol')[0].remove() : null 
     const elementUl = document.createElement('ol')
     
    koderNames.forEach((name) => {
       let elementLi = document.createElement('li')
       let textName = document.createTextNode(name)
       elementLi.appendChild(textName)
    
       elementUl.appendChild(elementLi)
    })
    
    document.body.appendChild(elementUl)
}


function askInsertNewKoder () {
    let name = prompt('¿ingresa el nombre del nuevo koder?')
    koderNames.push(name)
    printToKoders()
}

function Koder(name, lastName,) {
    this.name = name
    this.lastName = lastName
}

const kodersQuantity = parseInt(prompt('¿cuántos Koder desea registrar?'))

const arrayKoders = []

for (let i = 0; i < kodersQuantity; i++) {
    const name = prompt(`¿cual es el nombre del ${i + 1}`)
    const lastName = prompt(`¿cual es el nombre del ${i + 1}`)
    const koder = newKoder(name, lastName)
    arrayKoders.push(koder)
}


/*
  Práctica:
  A partir del arreglo llamado productionArray de las clases anteriores:
    
  let productionArray = [
        [
            ‘David Moranchel’,
            ‘Lunes: 100pz’,
            ‘Martes: 85pz’,
            ‘Miércoles: 70pz’,
            ‘Jueves: 96pz’,
            ‘Viernes: 120pz’,
        ],
        [
            ‘Michael Villalba’,
            ‘Lunes: 123pz’,
            ‘Martes: 94pz’,
            ‘Miércoles: 100pz’,
            ‘Jueves: 74pz’,
            ‘Viernes: 81pz’,
        ],
        [
            ‘Charles Silva’,
            ‘Lunes: 120’,
            ‘Martes: 76pz’,
            ‘Miércoles: 86pz’,
            ‘Jueves: 95pz’,
            ‘Viernes: 100pz’,
        ],
        [
            ‘Israel Salinas’,
            ‘Lunes: 90pz’,
            ‘Martes: 85pz’,
            ‘Miércoles: 93pz’,
            ‘Jueves: 121pz’,
            ‘Viernes: 72pz’,
        ]
    ]

  en el que generamos un array de objetos de tipo Worker con su método getAverage()

  Crear y mostrar la informacion (name, producción por dia, y el promedio) de cada uno de los Wokers en una tabla
  mediante los métodos del DOM.
*/



