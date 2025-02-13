import React, { useState, useEffect } from 'react';
import {
  CartelaContainer,
  CartelaBox,
  CartelaTextArea,
  CartelaText,
  CartelaContent,
  CartelaRow,
  CartelaNumbers,
} from './styled';

interface CartelaProps {
  numbers?: number[];
  markedNumbers?: number[];
  numerosDesativados?: number[];
}

const Cartela: React.FC<CartelaProps> = ({ numbers, markedNumbers, numerosDesativados }) => {
  const [gridNumbers, setGridNumbers] = useState<number[][]>([]);
  const [markedNums, setMarkedNums] = useState<number[]>([]);
  const [disabledNums, setDisabledNums] = useState<number[]>([]);

  useEffect(() => {
    let generatedNumbers: number[][] = [];
    let usedMarkedNumbers: number[] = markedNumbers || [];
    let usedDisabledNumbers: number[] = numerosDesativados || [];

    // Lógica para cartela de 90 bolas
    if (numbers && numbers.length === 27) {
      generatedNumbers = [[], [], []]; // 3 linhas
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 9; col++) {
          const index = row * 9 + col;
          generatedNumbers[row][col] = numbers[index];
        }
      }
    }

    setGridNumbers(generatedNumbers);
    setMarkedNums(usedMarkedNumbers);
    setDisabledNums(usedDisabledNumbers);
  }, [numbers, markedNumbers, numerosDesativados]);

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
                const isDisabled = disabledNums.includes(number);
                const isFirstRow = rowIndex === 0;
                const isLastRow = rowIndex === 2;
                const isFirstCol = colIndex === 0;
                const isLastCol = colIndex === 8;

                const borderRadius = {
                  topLeft: isFirstRow && isFirstCol ? '4px' : '0',
                  topRight: isFirstRow && isLastCol ? '4px' : '0',
                  bottomRight: isLastRow && isLastCol ? '4px' : '0',
                  bottomLeft: isLastRow && isFirstCol ? '4px' : '0',
                };

                return (
                  <CartelaNumbers
                    key={colIndex}
                    isMarked={isMarked}
                    isDisabled={isDisabled}
                    borderRadius={borderRadius}
                  >
                    {number !== 0 ? number : ''}
                  </CartelaNumbers>
                );
              })}
            </CartelaRow>
          ))}
        </CartelaContent>
      </CartelaBox>
    </CartelaContainer>
  );
};

export default Cartela;
