// CartelaDeBingo/index.tsx

import React from "react";
import {
  BingoContainer,
  BingoTittle,
  BingoTittleElement,
  BingoRow,
  BingoBoll,
  TimeBoll,
  BingoLetterContainer,
} from "./styled";
import StarBall from "@/components/icons/StarBall";
import GoldenStarBall from "@/components/icons/GoldenStarBall";

interface CartelaDeBingoProps {
  bolaDaVez: number | undefined;
  bolaDourada: boolean | undefined;
}

function CartelaDeBingo({ bolaDaVez, bolaDourada }: CartelaDeBingoProps) {
  const marcadas: number[] = [5, 12, 18, 23, 29, 34, 42, 47, 53, 61, 68, 75];

  const isMarcada = (numero: number) => marcadas.includes(numero);

  const gerarLinhas = () => {
    const letras = ["B", "I", "N", "G", "O"];
    const bolasPorLinha = 15;
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
        <BingoTittleElement>
          Bola dourada: {bolaDourada ? <GoldenStarBall width={30} height={30}/> : <StarBall />}
        </BingoTittleElement>
        <BingoTittleElement>
          Bola da vez: {bolaDaVez !== null ? <TimeBoll>{bolaDaVez}</TimeBoll> : null}
        </BingoTittleElement>
      </BingoTittle>
      {gerarLinhas()}
    </BingoContainer>
  );
}

export default CartelaDeBingo;
