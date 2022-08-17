const getBtn = document.querySelector('#button')

// const buttonClick = () => {
//     axios.get('https://swapi.dev/api/planets/?search=ald')
//     .then((res) => {
//         for (let i = 0; i < res.data; i++) {
//             axios.get('https://swapi.dev/api/people/5/')
//             .then((res) => {
//                 const header2 = document.createElement('h2')
//                 header2.textContent = res.data.result[0]
//                 document.querySelector('body').appendChild(header2)
//             })
//             axios.get('https://swapi.dev/api/people/68/')
//             .then((res) => {
//                 const header2 = document.createElement('h2')
//                 header2.textContent = res.data.result[1]
//                 document.querySelector('body').appendChild(header2)
//             })
//             axios.get('https://swapi.dev/api/people/81/')
//             .then((res) => {
//                 const header2 = document.createElement('h2')
//                 header2.textContent = res.data.result[2]
//                 document.querySelector('body').appendChild(header2)
//             })
//         }
//     })
//     console.log('Button clicked!')
// }


const buttonClick = () => {
    axios.get('https://swapi.dev/api/planets/?search=ald') 
    .then((res) => {
        let {residents} = residents.data.results[0]
        
        for (let i = 0; i < res.data; i++) {
            axios.get(residents)
            .then((res) => {
                const header2 = document.createElement('h2')
                header2.textContent = res.data.name
                body.appendChild(header2)
            })
        }
    })
}

getBtn.addEventListener('click', buttonClick)