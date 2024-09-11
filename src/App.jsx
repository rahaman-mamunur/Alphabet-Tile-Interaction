import { useState } from 'react';

function App() {
  const [outputString, setOutputString] = useState('');
  const [inputString, setInputString] = useState(''); 

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleClick = (letter) => {
    const newInputString = inputString + letter;
    setInputString(newInputString);

    let count = 1;
    let result = '';
    
    for (let i = 1; i < newInputString.length; i++) {
      if (newInputString[i] === newInputString[i - 1]) {
        count++;
      } else {
        if (count === 3) {
          result += '_';
        } else if (count > 3) {
          result += '_'.repeat(count);
        } else {
          result += newInputString[i - 1].repeat(count);
        }
        count = 1;
      }
    }

    if (count === 3) {
      result += '_';
    } else if (count > 3) {
      result += '_'.repeat(count);
    } else {
      result += newInputString[newInputString.length - 1].repeat(count);
    }
    setOutputString(result);
  };

  return (
    <>
        <div className="mb-4 p-2 text-lg" id="outputString">
          {outputString}
        </div>

        <div className="grid grid-cols-6 gap-4">
          {letters.map((letter) => (
            <div
              key={letter}
              className="bg-green-500 text-white p-4 text-center "
              onClick={() => handleClick(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
    </>
  );
}

export default App;
