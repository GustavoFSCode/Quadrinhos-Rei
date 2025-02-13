import React, { useState, useEffect } from 'react';
import { 
  CartelaContainer,
  CartelaBox,
  CartelaTextArea,
  CartelaText,
  CartelaContent,
  CartelaRow,
  CartelaNumbers
} from "./styled";
import GoldenStarBall from '@/components/icons/GoldenStarBall';

interface CartelaProps {
  numbers?: number[]; 
  markedNumbers?: number[]; 
}

const Cartela: React.FC<CartelaProps> = ({ numbers, markedNumbers }) => {
  const [gridNumbers, setGridNumbers] = useState<number[][]>([]);
  const [markedNums, setMarkedNums] = useState<number[]>([]);

  useEffect(() => {
    let generatedNumbers: number[][] = [];
    let usedMarkedNumbers: number[] = [];

    if (numbers && numbers.length === 25) {
      generatedNumbers = [[], [], [], [], []];
      for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 5; row++) {
          const index = col * 5 + row;
          generatedNumbers[row][col] = numbers[index];
        }
      }
      setGridNumbers(generatedNumbers);

      setMarkedNums(markedNumbers || []);
    } else {
      const allNumbers = Array.from({ length: 75 }, (_, index) => index + 1);
      const shuffledNumbers = allNumbers.sort(() => Math.random() - 0.5);
      const selectedNumbers = shuffledNumbers.slice(0, 24);

      const fullNumbers = [];
      for (let i = 0; i < 25; i++) {
        if (i === 12) {
          fullNumbers.push(0);
        } else {
          fullNumbers.push(selectedNumbers.shift()!);
        }
      }

      generatedNumbers = [[], [], [], [], []];
      for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 5; row++) {
          const index = col * 5 + row;
          generatedNumbers[row][col] = fullNumbers[index];
        }
      }
      setGridNumbers(generatedNumbers);

      const flatNumbers = fullNumbers.filter(num => num !== 0);
      const shuffledMarkedNumbers = flatNumbers.sort(() => Math.random() - 0.5);
      const selectedMarkedNumbers = shuffledMarkedNumbers.slice(0, 9);
      setMarkedNums(selectedMarkedNumbers);
    }
  }, [numbers, markedNumbers]);

  return (
    <CartelaContainer>
      <CartelaBox>
        <CartelaTextArea>
          <CartelaText>B</CartelaText>
          <CartelaText>I</CartelaText>
          <CartelaText>N</CartelaText>
          <CartelaText>G</CartelaText>
          <CartelaText>O</CartelaText>
        </CartelaTextArea>
        <CartelaContent>
          {gridNumbers.map((rowNumbers, rowIndex) => (
            <CartelaRow key={rowIndex}>
              {rowNumbers.map((number, colIndex) => {
                const isMarked = markedNums.includes(number);
                const isFirstRow = rowIndex === 0;
                const isLastRow = rowIndex === 4;
                const isFirstCol = colIndex === 0;
                const isLastCol = colIndex === 4;

                const borderRadius = {
                  topLeft: isFirstRow && isFirstCol ? '4px' : '0',
                  topRight: isFirstRow && isLastCol ? '4px' : '0',
                  bottomRight: isLastRow && isLastCol ? '4px' : '0',
                  bottomLeft: isLastRow && isFirstCol ? '4px' : '0',
                };

                if (number === 0) {
                  const isGoldenStarMarked = markedNums.includes(0);
                  return (
                    <CartelaNumbers
                      key={colIndex}
                      isMarked={isGoldenStarMarked}
                      borderRadius={borderRadius}
                    >
                      <GoldenStarBall />
                    </CartelaNumbers>
                  );
                } else {
                  return (
                    <CartelaNumbers
                      key={colIndex}
                      isMarked={isMarked}
                      borderRadius={borderRadius}
                    >
                      {number}
                    </CartelaNumbers>
                  );
                }
              })}
            </CartelaRow>
          ))}
        </CartelaContent>
      </CartelaBox>
    </CartelaContainer>
  );
}

export default Cartela;
