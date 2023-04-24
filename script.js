// // const keyboard = document.querySelector('.keyboard')
// // const title = document.querySelector('.heading-name')
// // const tile=document.querySelector('.tile')
// // const messagee=document.querySelector('.message-container')

// // let wordle='SUPER'
// // let keys = [
// //     'Q',
// //     'W',
// //     'E',
// //     'R',
// //     'T',
// //     'Y',
// //     'U',
// //     'I',
// //     'O',
// //     'P',
// //     'A',
// //     'S',
// //     'D',
// //     'F',
// //     'G',
// //     'H',
// //     'J',
// //     'K',
// //     'L',
// //     'ENTER',
// //     'Z',
// //     'X',
// //     'C',
// //     'V',
// //     'B',
// //     'N',
// //     'M',
// //     '«',
// // ]

// // const guessrows=[
// //   ['','','','','',''],
// //   ['','','','','',''],
// //   ['','','','','',''],
// //   ['','','','','',''],
// //   ['','','','','',''],
// //   ['','','','','','']
// // ]
// // guessrows.forEach((guessRow,guessRow_index) => {
// //   const rowelement=document.createElement('div')
// //   rowelement.setAttribute('id','guessRow-'+guessRow_index)

// //   guessRow.forEach((guess,guess_index)=>{
// //     const tileElement=document.createElement('div')

// //     tileElement.setAttribute('id','guessRow-'+guessRow_index+ ' guess'+guess_index)
// //     // tileElement.innerText=guess_index
// //     rowelement.append(tileElement)
// //     tileElement.classList.add('tileElement')
// //   })
// //   tile.append(rowelement)
// // });

// // let currentrow=0
// // let currentTile=0
// // let isGameover=false

// // const addLetter= (letter)=>{
  
// //   if(currentrow<6 && currentTile<5){
// //     const tile=document.getElementById('guessRow-'+currentrow+' guess'+currentTile)
// //     tile.textContent=letter
// //     tile.setAttribute('data',letter)

// //     if(currentTile<=4){
// //       currentTile++
// //     }
// //     guessrows[currentrow][currentTile]=letter
// //   } 
// //   else{
// //     isGameover=false
// //   }
// // }

// // const deleteLetter= ()=>{
// //   if(currentTile>0){
// //     if(currentTile==5){
// //       currentTile--
// //       const tile=document.getElementById('guessRow-'+currentrow+' guess'+currentTile)
// //       tile.setAttribute('data','')
// //       tile.textContent=''
// //     }
// //     else{
// //       currentTile--
// //       const tile=document.getElementById('guessRow-'+currentrow+' guess'+currentTile)
// //       tile.setAttribute('data','')
// //       tile.textContent=''
// //     }
// //   }

// // }
// // const addColorToKey = (keyLetter, color) => {
// //   const key = document.getElementById(keyLetter)
// //   key.classList.add(color)
// // }

// // const flipTile = () => {
// //   const rowTiles = document.querySelector('#guessRow-' + currentrow).childNodes
// //   let checkWordle = wordle
// //   const guess = []

// //   rowTiles.forEach(tile => {
// //       guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
// //   })

// //   guess.forEach((guess, index) => {
// //       if (guess.letter == wordle[index]) {
// //           guess.color = 'green-overlay'
// //           checkWordle = checkWordle.replace(guess.letter, '')
// //       }
// //   })

// //   guess.forEach(guess => {
// //       if (checkWordle.includes(guess.letter)) {
// //           guess.color = 'yellow-overlay'
// //           checkWordle = checkWordle.replace(guess.letter, '')
// //       }
// //   })

// //   rowTiles.forEach((tile, index) => {
// //       setTimeout(() => {
// //           tile.classList.add('flip')
// //           tile.classList.add(guess[index].color)
// //           addColorToKey(guess[index].letter, guess[index].color)
// //       }, 500 * index)
// //   })
// // }

// // const checkRow= ()=>{
// //   flipTile()
// //   if(currentTile==5){
// //     const guess=guessrows[currentrow].join('')
// //     if(guess==wordle){
// //       console.log('yess')
// //       showMessage('magnificiant')
// //     }
// //     else{
// //       if(currentrow>=5){
// //         isGameover=true
// //         showMessage('gameover')
// //       }
// //       if(currentrow<5){
// //         currentrow++
// //         currentTile=0
// //       }
// //     }
// //   }
// // }


// // const showMessage=(message)=>{
// //   const messageElement=document.createElement('p')
// //   messageElement.textContent=message
// //   messagee.append(messageElement)
// //   setTimeout(()=>messagee.removeChild(messageElement),2000)
// //   isGameover=true
// //   return
// // }

// // const handleClick= (key)=>{
// //   // console.log("clicked"+key)
// //   if(!isGameover){
// //     if(key==='«'){
// //       deleteLetter()
// //       return
// //     }
// //     if(key==='ENTER'){
// //       checkRow()
// //       return 
// //     }
// //     addLetter(key)
// //   }
// // }

// // for (let index = 0; index < keys.length; index++) {
// //     let buttonElement = document.createElement('button')
// //  //   console.log(buttonElement);
// //     buttonElement.innerText = keys[index];
// //     buttonElement.setAttribute('id', index)
// //     buttonElement.addEventListener('click',()=> handleClick(keys[index]))
// //     keyboard.appendChild(buttonElement)
// // }


// const tileDisplay = document.querySelector('.tile-container')
// const keyboard = document.querySelector('.key-container')
// const messageDisplay = document.querySelector('.message-container')

// let wordle

// const getWordle = () => {
//     fetch('http://localhost:8000/word')
//         .then(response => response.json())
//         .then(json => {
//             wordle = json.toUpperCase()
//         })
//         .catch(err => console.log(err))
// }
// getWordle()

// const keys = [
//     'Q',
//     'W',
//     'E',
//     'R',
//     'T',
//     'Y',
//     'U',
//     'I',
//     'O',
//     'P',
//     'A',
//     'S',
//     'D',
//     'F',
//     'G',
//     'H',
//     'J',
//     'K',
//     'L',
//     'ENTER',
//     'Z',
//     'X',
//     'C',
//     'V',
//     'B',
//     'N',
//     'M',
//     '«',
// ]
// const guessRows = [
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', '']
// ]
// let currentRow = 0
// let currentTile = 0
// let isGameOver = false

// guessRows.forEach((guessRow, guessRowIndex) => {
//     const rowElement = document.createElement('div')
//     rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
//     guessRow.forEach((_guess, guessIndex) => {
//         const tileElement = document.createElement('div')
//         tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
//         tileElement.classList.add('tile')
//         rowElement.append(tileElement)
//     })
//     tileDisplay.append(rowElement)
// })

// keys.forEach(key => {
//     const buttonElement = document.createElement('button')
//     buttonElement.textContent = key
//     buttonElement.setAttribute('id', key)
//     buttonElement.addEventListener('click', () => handleClick(key))
//     keyboard.append(buttonElement)
// })

// const handleClick = (letter) => {
//     if (!isGameOver) {
//         if (letter === '«') {
//             deleteLetter()
//             return
//         }
//         if (letter === 'ENTER') {
//             checkRow()
//             return
//         }
//         addLetter(letter)
//     }
// }

// const addLetter = (letter) => {
//     if (currentTile < 5 && currentRow < 6) {
//         const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
//         tile.textContent = letter
//         guessRows[currentRow][currentTile] = letter
//         tile.setAttribute('data', letter)
//         currentTile++
//     }
// }

// const deleteLetter = () => {
//     if (currentTile > 0) {
//         currentTile--
//         const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
//         tile.textContent = ''
//         guessRows[currentRow][currentTile] = ''
//         tile.setAttribute('data', '')
//     }
// }

// const checkRow = () => {
//     const guess = guessRows[currentRow].join('')
//     // if (currentTile > 4) {
//     //     fetch(`http://localhost:8000/check/?word=${guess}`)
//     //         .then(response => response.json())
//     //         .then(json => {
//     //             if (json == 'Entry word not found') {
//     //                 showMessage('word not in list')
//     //                 return
//     //             } else {
//     //                 flipTile()
//     //                 if (wordle == guess) {
//     //                     showMessage('Magnificent!')
//     //                     isGameOver = true
//     //                     return
//     //                 } else {
//                         if (currentRow >= 5) {
//                             isGameOver = true
//                             showMessage('Game Over')
//                             return
//                         }
//                         if (currentRow < 5) {
//                             currentRow++
//                             currentTile = 0
//                         }
//                    }
// //                 }
// //             }).catch(err => console.log(err))
// //     }
// // }

// const showMessage = (message) => {
//     const messageElement = document.createElement('p')
//     messageElement.textContent = message
//     messageDisplay.append(messageElement)
//     setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
// }

// const addColorToKey = (keyLetter, color) => {
//     const key = document.getElementById(keyLetter)
//     key.classList.add(color)
// }

// const flipTile = () => {
//     const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
//     let checkWordle = wordle
//     const guess = []

//     rowTiles.forEach(tile => {
//         guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
//     })

//     guess.forEach((guess, index) => {
//         if (guess.letter == wordle[index]) {
//             guess.color = 'green-overlay'
//             checkWordle = checkWordle.replace(guess.letter, '')
//         }
//     })

//     guess.forEach(guess => {
//         if (checkWordle.includes(guess.letter)) {
//             guess.color = 'yellow-overlay'
//             checkWordle = checkWordle.replace(guess.letter, '')
//         }
//     })

//     rowTiles.forEach((tile, index) => {
//         setTimeout(() => {
//             tile.classList.add('flip')
//             tile.classList.add(guess[index].color)
//             addColorToKey(guess[index].letter, guess[index].color)
//         }, 500 * index)
//     })
// }


const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')

let wordle='SUPER';

const getWordle = () => {
    fetch('http://localhost:8000/word')
        .then(response => {
            response.json();
            console.log(response);
        })
        .then(json => {
            wordle = json.toUpperCase()
        })
        .catch(err => console.log(err.message))
}
getWordle()
console.log(wordle);

const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
let currentRow = 0
let currentTile = 0
let isGameOver = false

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((_guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})

const handleClick = (letter) => {
    if (!isGameOver) {
        if (letter === '«') {
            deleteLetter()
            return
        }
        if (letter === 'ENTER') {
            checkRow()
            return
        }
        addLetter(letter)
    }
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if (currentTile > 4) {
        flipTile()
        if (wordle == guess) {
            showMessage('Magnificent!')
            isGameOver = true
            return
            }
        else {
            if (currentRow >= 5) {
                isGameOver = true
                showMessage('Game Over')
                return
            }
            if (currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
            
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}
const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    let checkWordle = wordle
    const guess = []

    rowTiles.forEach(tile => {
        guess.push({letter: tile.getAttribute('data'), color: 'grey-overlay'})
    })

    guess.forEach((guess, index) => {
        if (guess.letter == wordle[index]) {
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    guess.forEach(guess => {
        if (checkWordle.includes(guess.letter)) {
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    rowTiles.forEach((tile, index) => {
        tile.classList.add('flip')
        tile.classList.add(guess[index].color)
        addColorToKey(guess[index].letter, guess[index].color)
    })
}