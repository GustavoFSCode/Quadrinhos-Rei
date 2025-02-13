import React, { useState } from "react";
import {
  BingoContainer,
  BingoTittle,
  BingoTittleElement,
  BingoRow,
  BingoBoll,
  BingoLetterContainer,
} from "./styled";

function CartelaDeBingo() {
  const totalNumbers = 90;
  const numbersToMark = 45;

  // Função para gerar números únicos aleatórios
  function getRandomUniqueNumbers(total: number, count: number): number[] {
    const numbers = Array.from({ length: total }, (_, i) => i + 1);
    const shuffled = numbers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Inicializar o estado com os números marcados
  const [marcadas] = useState<number[]>(getRandomUniqueNumbers(totalNumbers, numbersToMark));

  const isMarcada = (numero: number) => marcadas.includes(numero);

  const gerarLinhas = () => {
    const letras = ["B", "I", "N", "G", "O"];
    const bolasPorLinha = 18;
    const linhas = letras.map((letra, index) => {
      const inicio = index * bolasPorLinha + 1;
      const bolas = Array.from({ length: bolasPorLinha }, (_, i) => inicio + i);

      return (
        <BingoRow key={letra}>
          <BingoLetterContainer>{letra}</BingoLetterContainer>
          {bolas.map((numero) => (
            <BingoBoll
              key={numero}
              marcada={isMarcada(numero)}
              disabled={true}
            >
              {numero}
            </BingoBoll>
          ))}
        </BingoRow>
      );
    });
    return linhas;
  };

  return (
    <BingoContainer>
      <BingoTittle>
        <BingoTittleElement>
          Bolas sorteadas: <span>{marcadas.length}</span>
        </BingoTittleElement>
      </BingoTittle>
      {gerarLinhas()}
    </BingoContainer>
  );
}

export default CartelaDeBingo;
