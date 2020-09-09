
// declaracion de la function
function createKoder (koderObject) {
    const xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(xHttp.responseText)
        }
    };
    // GET, POST, DELETE, PATCH,PUT,
    // console.log(JSON.stringify(koderObject))
    xHttp.open('POST', `https://ajaxclass9g.firebaseio.com/superTeam/.json`, true);
    xHttp.send(JSON.stringify(koderObject));
}

function getKoders() {
    const xHttp = new XMLHttpRequest();
    let koders
    
    // GET, POST, DELETE, PATCH,PUT,
    // console.log(JSON.stringify(koderObject))
    
    xHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            koders = JSON.parse(xHttp.responseText)
        }
    };
    
    xHttp.open('GET', `https://ajaxclass9g.firebaseio.com/superTeam/.json`, false);
    xHttp.send();
    return koders
}

function deleteKoder(keyKoder) {
    const xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(xHttp.responseText)
        }
    };
    // GET, POST, DELETE, PATCH,PUT,
    // console.log(JSON.stringify(koderObject))
    xHttp.open('DELETE', `https://ajaxclass9g.firebaseio.com/superTeam/${keyKoder}.json`, true);
    xHttp.send();
}

function updateKoder(objectKoder, keyKoder) {
    const xHttp = new XMLHttpRequest();

    xHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           return JSON.parse(this.responseText)
        }
    };
    // GET, POST, DELETE, PATCH,PUT,
    // console.log(JSON.stringify(koderObject))
    xHttp.open('PUT', `https://ajaxclass9g.firebaseio.com/superTeam/${keyKoder}.json`, true);
    xHttp.send(JSON.stringify(objectKoder));
}


const kodersArray = [
    {
        name: 'Fernanda',
        lastName: 'Palacios'
    },
    {
        name: 'Lucho',
        lastName: 'Gomez'
    },
    {
        name: 'Eddy',
        lastName: 'Ruiz'
    },
    {
        name: 'Mauro',
        lastName: 'Ochoa'
    },
    {
        name: 'Fabiola',
        lastName: 'Ochoa'
    }

]

let arrayFilter = []


const printTable = (array) => {
    document.getElementById('body-table').innerHTML = ""
    array.forEach(({name, lastName}, index) => {
        const row =  document.createElement('tr')
        const tdNumber = document.createElement('td')
        const tdName = document.createElement('td')
        const tdLastName = document.createElement('td')

        const textNumber = document.createTextNode(index +1)
        const textName = document.createTextNode(name)
        const textLastname = document.createTextNode(lastName)
        
        tdNumber.appendChild(textNumber)
        tdName.appendChild(textName)
        tdLastName.appendChild(textLastname)

        row.appendChild(tdNumber)
        row.appendChild(tdName)
        row.appendChild(tdLastName)

        document.getElementById('body-table').appendChild(row)
    })
}

const search = (query) => {
    arrayFilter =  kodersArray.filter(({name, lastName}) =>  name.toLowerCase().includes(query.toLowerCase()) || lastName.toLowerCase().includes(query.toLowerCase()))
    console.log(arrayFilter)
    printTable(arrayFilter)
}

printTable(kodersArray)

document.getElementById('search').addEventListener('keyup',(event) => {
    // console.log(event.target.value)
    const query = event.target.value
    console.log(query)

    search(query)
})

const newArray = []
const convertedtoArray = () => {
    const koders = getKoders()

    for (const key in koders) {
        newArray.push({...koders[key], key})
    }

}
