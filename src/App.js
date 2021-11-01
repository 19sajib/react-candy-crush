import React, { useState, useEffect } from 'react'

const width = 8
const candyColors = [
  'blue',
  'red',
  'green',
  'purple',
  'yellow',
  'orange'
]

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const checkForColumnOfFour = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfFour = [i, i + width, i + width * 2]
      const decidedColor = currentColorArrangement[i]

      if( columnOfFour.every(squre => currentColorArrangement[squre] === decidedColor)) {
        columnOfFour.forEach(squre => currentColorArrangement[squre] = '')
      }
    }
  }

  const checkForRowOfFour = () => {
    for (let i = 0; i < 47; i++) {
      const rowOfFour = [i, i + 1, i + 2]
      const decidedColor = currentColorArrangement[i]

      const notValid  = [ 5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64 ]

      if(notValid.includes(i))

      if( rowOfFour.every(squre => currentColorArrangement[squre] === decidedColor)) {
        rowOfFour.forEach(squre => currentColorArrangement[squre] = '')
      }
    }
}


  const checkForColumnOfThree = () => {
       for (let i = 0; i < 47; i++) {
         const columnOfThree = [i, i + width, i + width * 2]
         const decidedColor = currentColorArrangement[i]

         if( columnOfThree.every(squre => currentColorArrangement[squre] === decidedColor)) {
           columnOfThree.forEach(squre => currentColorArrangement[squre] = '')
         }
       }
  }
  const checkForRowOfThree = () => {
       for (let i = 0; i < 47; i++) {
         const rowOfThree = [i, i + 1, i + 2]
         const decidedColor = currentColorArrangement[i]

         const notValid  = [ 6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64 ]

         if(notValid.includes(i))

         if( rowOfThree.every(squre => currentColorArrangement[squre] === decidedColor)) {
           rowOfThree.forEach(squre => currentColorArrangement[squre] = '')
         }
       }
  }


  const createBoard = () => {
    const randomColorArrangement = []
       for (let i = 0; i < width * width; i++) {
         const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
         randomColorArrangement.push(randomColor)
       }

    setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour()
      checkForRowOfFour()
      checkForColumnOfThree()
      checkForRowOfThree()
      setCurrentColorArrangement([...currentColorArrangement])
    }, 100)

    return () => clearInterval(timer)
    
  }, [ checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, currentColorArrangement])
  
  console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        { currentColorArrangement.map((candyColor, i) => (
          <img 
             key={i}
             style={{backgroundColor: candyColor}}
             alt={candyColor}
          />   
        ))}
      </div>
      
    </div>
  );
}

export default App;
