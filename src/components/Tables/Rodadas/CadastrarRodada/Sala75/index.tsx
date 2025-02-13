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

// Função para converter valores formatados em centavos
function formatToCents(value: string | undefined): string {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  return digits;
}

interface Acumulado {
  label: string;
  min: string;
  max: string;
  setMin: React.Dispatch<React.SetStateAction<string>>;
  setMax: React.Dispatch<React.SetStateAction<string>>;
  all: string;
  setAll: React.Dispatch<React.SetStateAction<string>>;
}

interface Sala75Props {
  data?: {
    minCashBola?: string;
    maxCashBola?: string;
    minCashQuina?: string;
    maxCashQuina?: string;
    minCashQuadra?: string;
    maxCashQuadra?: string;
    minCashX?: string;
    maxCashX?: string;
    minCashStartRound?: string;
    maxCartelasPorRodada?: string;
    bolasParaRevisarPedido?: string;
    roundWinner?: string;
    timeBoll?: string;
    master?: string;
    quinaAcumulated?: string;
    quadraAcumulated?: string;
    xAcumulated?: string;
    limitWinsBolls?: string;
  };
  readOnly?: boolean;
}

function Sala75({ data = {}, readOnly = false }: Sala75Props) {
  // Definição dos estados de acumulados
  const [minCashBola, setMinCashBola] = useState(formatToCents(data.minCashBola) || '');
  const [maxCashBola, setMaxCashBola] = useState(formatToCents(data.maxCashBola) || '');
  const [allCashBola, setAllCashBola] = useState('');

  const [minCashQuina, setMinCashQuina] = useState(formatToCents(data.minCashQuina) || '');
  const [maxCashQuina, setMaxCashQuina] = useState(formatToCents(data.maxCashQuina) || '');
  const [allCashQuina, setAllCashQuina] = useState('');

  const [minCashQuadra, setMinCashQuadra] = useState(formatToCents(data.minCashQuadra) || '');
  const [maxCashQuadra, setMaxCashQuadra] = useState(formatToCents(data.maxCashQuadra) || '');
  const [allCashQuadra, setAllCashQuadra] = useState('');

  const [minCashX, setMinCashX] = useState(formatToCents(data.minCashX) || '');
  const [maxCashX, setMaxCashX] = useState(formatToCents(data.maxCashX) || '');
  const [allCashX, setAllCashX] = useState('');

  const [minCashStartRound, setMinCashStartRound] = useState(formatToCents(data.minCashStartRound) || '');
  const [maxCartelasPorRodada, setMaxCartelasPorRodada] = useState(data.maxCartelasPorRodada || '');
  const [bolasParaRevisarPedido, setBolasParaRevisarPedido] = useState(data.bolasParaRevisarPedido || '');

  // Estados para InputPercentage
  const [roundWinner, setRoundWinner] = useState(data.roundWinner || '');
  const [timeBoll, setTimeBoll] = useState(data.timeBoll || '');
  const [master, setMaster] = useState(data.master || '');
  const [quinaAcumulated, setQuinaAcumulated] = useState(data.quinaAcumulated || '');
  const [quadraAcumulated, setQuadraAcumulated] = useState(data.quadraAcumulated || '');
  const [xAcumulated, setXAcumulated] = useState(data.xAcumulated || '');

  // Estados para ToggleButton
  const [rodadaXActive, setRodadaXActive] = useState(true);
  const [quatroCantosActive, setQuatroCantosActive] = useState(true);
  const [linhaHorizontalActive, setLinhaHorizontalActive] = useState(true);
  const [linhaVerticalActive, setLinhaVerticalActive] = useState(true);
  const [diagonalEsquerdaActive, setDiagonalEsquerdaActive] = useState(true);
  const [diagonalDireitaActive, setDiagonalDireitaActive] = useState(true);

  // Estados para InputNumber
  const [limitWinsBolls, setLimitWinsBolls] = useState(data.limitWinsBolls || '');

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

  // === Função para calcular os valores acumulados ===
  const calculateAllCash = (min: string, max: string): string => {
    const minVal = parseInt(min, 10) || 0;
    const maxVal = parseInt(max, 10) || 0;
    const total = minVal + maxVal;
    return `R$ ${(total / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // === useEffect para atualizar os valores acumulados ===
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
      {/* Acumulados */}
      <Strip>
        <LineTittle>Acumulados</LineTittle>
        <StripContentContainer>
          {acumulados.map((acum, index) => (
            <StripContent key={index}>
              <LineSubTittle>{acum.label}</LineSubTittle>
              <StripContentTop>
                <InputMoney
                  name={`minCash_${index}`}
                  label="Mínimo"
                  value={acum.min}
                  onChange={readOnly ? undefined : (e) => acum.setMin(e.target.value)}
                  width="137px"
                  readOnly={readOnly}
                />
                <InputMoney
                  name={`maxCash_${index}`}
                  label="Máximo"
                  value={acum.max}
                  onChange={readOnly ? undefined : (e) => acum.setMax(e.target.value)}
                  width="137px"
                  readOnly={readOnly}
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

      {/* Vencedores */}
      <Strip>
        <LineTittle>Vencedores</LineTittle>
        <StripContentContainer>
          <StripContent>
            <ToggleButton
              label="Quatro cantos"
              initialState={quatroCantosActive}
              onChange={setQuatroCantosActive}
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Linha horizontal"
              initialState={linhaHorizontalActive}
              onChange={setLinhaHorizontalActive}
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Linha vertical"
              initialState={linhaVerticalActive}
              onChange={setLinhaVerticalActive}
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Diagonal esquerda"
              initialState={diagonalEsquerdaActive}
              onChange={setDiagonalEsquerdaActive}
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Diagonal direita"
              initialState={diagonalDireitaActive}
              onChange={setDiagonalDireitaActive}
              readOnly={readOnly}
            />
          </StripContent>
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
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='limitWinsBollsRodadaX'
              label='Limite de bolas cantadas para ganhar'
              value={limitWinsBolls}
              onChange={readOnly ? undefined : (e) => setLimitWinsBolls(e.target.value)}
              width='315px'
              readOnly={readOnly}
            />
          </StripContent>
        </StripContentContainer>
      </Strip>

      {/* Porcentagens padrão */}
      <Strip>
        <LineTittle>Porcentagens padrão</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputPercentage
              name="roundWinner"
              label="Ganhador da rodada"
              value={roundWinner}
              onChange={readOnly ? undefined : (e) => setRoundWinner(e.target.value)}
              width="180px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="timeBoll"
              label="Bola da vez"
              value={timeBoll}
              onChange={readOnly ? undefined : (e) => setTimeBoll(e.target.value)}
              width="180px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="master"
              label="Master"
              value={master}
              onChange={readOnly ? undefined : (e) => setMaster(e.target.value)}
              width="180px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="quinaAcumulated"
              label="Acumulado da quina"
              value={quinaAcumulated}
              onChange={readOnly ? undefined : (e) => setQuinaAcumulated(e.target.value)}
              width="180px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="quadraAcumulated"
              label="Acumulado da quadra"
              value={quadraAcumulated}
              onChange={readOnly ? undefined : (e) => setQuadraAcumulated(e.target.value)}
              width="180px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="xAcumulated"
              label="Acumulado do X"
              value={xAcumulated}
              onChange={readOnly ? undefined : (e) => setXAcumulated(e.target.value)}
              width="180px"
              readOnly={readOnly}
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
              onChange={readOnly ? undefined : (e) => setMinCashStartRound(e.target.value)}
              width="315px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='maxCartelasPorRodada'
              label='Máximo de cartelas do jogador por rodada'
              value={maxCartelasPorRodada}
              onChange={readOnly ? undefined : (e) => setMaxCartelasPorRodada(e.target.value)}
              width='315px'
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='bolasParaRevisarPedido'
              label='Bolas cantadas para revisar pedido de bingo'
              value={bolasParaRevisarPedido}
              onChange={readOnly ? undefined : (e) => setBolasParaRevisarPedido(e.target.value)}
              width='315px'
              readOnly={readOnly}
            />
          </StripContent>
        </StripContentContainer>
      </Strip>
    </Container>
  );
}

export default Sala75;
