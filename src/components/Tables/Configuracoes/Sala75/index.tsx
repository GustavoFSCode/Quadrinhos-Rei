// Sala75.tsx
"use client";
import React, { useState, useEffect } from 'react';  
import {
  Container,
  Strip,
  LineTittle,
  StripContentContainer,
  StripContent,
  LineSubTittle,
  StripContentTop,
  StripContentBottom
} from './styled';
import ToggleButton from '@/components/Button/BigToggleButton';
import InputMoney from '@/components/Input/InputMoney';
import InputPercentage from '@/components/Input/InputPercentage';
import InputNumber from '@/components/Input/InputNumber'; 
import AllCashDisplay from '@/components/Input/AllCashDisplay'; 

function Sala75() {
  // === Estados para InputMoney ===
  interface Acumulado {
    label: string;
    min: string;
    max: string;
    setMin: React.Dispatch<React.SetStateAction<string>>;
    setMax: React.Dispatch<React.SetStateAction<string>>;
    all: string;
    setAll: React.Dispatch<React.SetStateAction<string>>;
  }

  // Definição dos estados de acumulados
  const [minCashBola, setMinCashBola] = useState('');
  const [maxCashBola, setMaxCashBola] = useState('');
  const [allCashBola, setAllCashBola] = useState('');

  const [minCashQuina, setMinCashQuina] = useState('');
  const [maxCashQuina, setMaxCashQuina] = useState('');
  const [allCashQuina, setAllCashQuina] = useState('');

  const [minCashQuadra, setMinCashQuadra] = useState('');
  const [maxCashQuadra, setMaxCashQuadra] = useState('');
  const [allCashQuadra, setAllCashQuadra] = useState('');

  const [minCashX, setMinCashX] = useState('');
  const [maxCashX, setMaxCashX] = useState('');
  const [allCashX, setAllCashX] = useState('');

  const [minCashStartRound, setMinCashStartRound] = useState('');
  const [allCashStartRound, setAllCashStartRound] = useState('');
  const [maxCartelasPorRodada, setMaxCartelasPorRodada] = useState(''); 
  const [bolasParaRevisarPedido, setBolasParaRevisarPedido] = useState(''); 

  // === Estados para InputPercentage ===
  const [roundWinner, setRoundWinner] = useState(''); 
  const [timeBoll, setTimeBoll] = useState('');
  const [master, setMaster] = useState('');
  const [quinaAcumulated, setQuinaAcumulated] = useState('');
  const [quadraAcumulated, setQuadraAcumulated] = useState('');

  // === Estados para ToggleButton ===
  const [rodadaXActive, setRodadaXActive] = useState(true);
  const [quatroCantosActive, setQuatroCantosActive] = useState(true);
  const [linhaHorizontalActive, setLinhaHorizontalActive] = useState(true);
  const [linhaVerticalActive, setLinhaVerticalActive] = useState(true);
  const [diagonalEsquerdaActive, setDiagonalEsquerdaActive] = useState(true);
  const [diagonalDireitaActive, setDiagonalDireitaActive] = useState(true);

  // === Estados para InputNumber ===
  const [limitWinsBolls, setLimitWinsBolls] = useState('');

  // === Funções Genéricas para Manipular onChange ===
  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  // === Definição dos Acumulados ===
  const acumulados: Acumulado[] = [
    {
      label: 'Acumulado da bola da vez',
      min: minCashBola,
      max: maxCashBola,
      setMin: setMinCashBola,
      setMax: setMaxCashBola,
      all: allCashBola,
      setAll: setAllCashBola
    },
    {
      label: 'Acumulado da quina',
      min: minCashQuina,
      max: maxCashQuina,
      setMin: setMinCashQuina,
      setMax: setMaxCashQuina,
      all: allCashQuina,
      setAll: setAllCashQuina
    },
    {
      label: 'Acumulado da quadra',
      min: minCashQuadra,
      max: maxCashQuadra,
      setMin: setMinCashQuadra,
      setMax: setMaxCashQuadra,
      all: allCashQuadra,
      setAll: setAllCashQuadra
    },
    {
      label: 'Acumulado do X',
      min: minCashX,
      max: maxCashX,
      setMin: setMinCashX,
      setMax: setMaxCashX,
      all: allCashX,
      setAll: setAllCashX
    },
  ];

  // === Função Genérica para Calcular Valores Acumulados ===
  const calculateAllCash = (min: string, max: string): string => {
    const minVal = parseInt(min.replace(/[^0-9]/g, ''), 10) || 0;
    const maxVal = parseInt(max.replace(/[^0-9]/g, ''), 10) || 0;
    const totalCentavos = minVal + maxVal;
    const totalReais = (totalCentavos / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return totalReais;
  };

  // === useEffect para Atualizar os Valores Acumulados ===
  useEffect(() => {
    acumulados.forEach(acum => {
      acum.setAll(calculateAllCash(acum.min, acum.max));
    });
  }, [
    ...acumulados.map(acum => acum.min),
    ...acumulados.map(acum => acum.max)
  ]);

  return (
    <Container>
      <Strip>
        <LineTittle>Porcentagens padrão</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputPercentage
              name="roundWinner"
              label="Ganhador da rodada"
              value={roundWinner}
              onChange={handleChange(setRoundWinner)}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="timeBoll"
              label="Bola da vez"
              value={timeBoll}
              onChange={handleChange(setTimeBoll)}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="master"
              label="Master"
              value={master}
              onChange={handleChange(setMaster)}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="quinaAcumulated"
              label="Acumulado da quina"
              value={quinaAcumulated}
              onChange={handleChange(setQuinaAcumulated)}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="quadraAcumulated"
              label="Acumulado da quadra"
              value={quadraAcumulated}
              onChange={handleChange(setQuadraAcumulated)}
              width="200px"
            />
          </StripContent>
        </StripContentContainer>
      </Strip>

      {/* Acumulados */}
      <Strip>
        <LineTittle>Acumulados</LineTittle>
        <StripContentContainer>
          {acumulados.map((acum, index) => (
            <StripContent key={index}>
              <LineSubTittle>{acum.label}</LineSubTittle>
              <StripContentTop>
                <InputMoney
                  name={`minCash${index}`}
                  label="Mínimo"
                  value={acum.min}
                  onChange={handleChange(acum.setMin)}
                  width="137px"
                />
                <InputMoney
                  name={`maxCash${index}`}
                  label="Máximo"
                  value={acum.max}
                  onChange={handleChange(acum.setMax)}
                  width="137px"
                />
              </StripContentTop>
              <StripContentBottom>
                <AllCashDisplay
                  label="Valor Acumulado"
                  value1={acum.max}
                  value2={acum.min}
                  width='284px'
                />
              </StripContentBottom>
            </StripContent>
          ))}
        </StripContentContainer>
      </Strip>

      {/* Rodada do X */}
      <Strip>
        <LineTittle>Rodada do X</LineTittle>
        <StripContentContainer>
          <StripContent>
            <ToggleButton
              label="Rodada X"
              initialState={rodadaXActive}
              onChange={setRodadaXActive}
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='limitWinsBollsRodadaX'
              label='Limite de bolas cantadas para ganhar'
              value={limitWinsBolls}
              onChange={handleChange(setLimitWinsBolls)}
              width='315px'
            />
          </StripContent>
        </StripContentContainer>
      </Strip>

      {/* Vencedores */}
      <Strip>
        <LineTittle>Vencedores</LineTittle>
        <StripContentContainer>
          <StripContent>
            <ToggleButton
              label="Quatro cantos"
              initialState={quatroCantosActive}
              onChange={setQuatroCantosActive}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Linha horizontal"
              initialState={linhaHorizontalActive}
              onChange={setLinhaHorizontalActive}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Linha vertical"
              initialState={linhaVerticalActive}
              onChange={setLinhaVerticalActive}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Diagonal esquerda"
              initialState={diagonalEsquerdaActive}
              onChange={setDiagonalEsquerdaActive}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Diagonal direita"
              initialState={diagonalDireitaActive}
              onChange={setDiagonalDireitaActive}
            />
          </StripContent>
        </StripContentContainer>
      </Strip>

      {/* Rodada */}
      <Strip>
        <LineTittle>Rodada</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputMoney
              name="minCashStartRound"
              label="Valor mínimo para início da rodada"
              value={minCashStartRound}
              onChange={handleChange(setMinCashStartRound)}
              width="315px"
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='maxCartelasPorRodada'
              label='Máximo de cartelas do jogador por rodada'
              value={maxCartelasPorRodada}
              onChange={handleChange(setMaxCartelasPorRodada)}
              width='315px'
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='bolasParaRevisarPedido'
              label='Bolas cantadas para revisar pedido de bingo'
              value={bolasParaRevisarPedido}
              onChange={handleChange(setBolasParaRevisarPedido)}
              width='315px'
            />
          </StripContent>
        </StripContentContainer>
      </Strip>
    </Container>
  );
}

export default Sala75;
