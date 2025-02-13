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
import InputPercentage from '@/components/Input/InputPercentage';
import InputNumber from '@/components/Input/InputNumber';
import InputMoney from '@/components/Input/InputMoney';
import ToggleButton from '@/components/Button/BigToggleButton';
import AllCashDisplay from '@/components/Input/AllCashDisplay';

// Função para converter valores formatados em centavos
function formatToCents(value: string | undefined): string {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  return digits;
}

interface Sala90Props {
  data?: {
    minCashFullCard?: string;
    maxCashFullCard?: string;
    minCashStartRound?: string;
    maxCartelasPorRodada?: string;
    bolasParaRevisarPedido?: string;
    acumulatedFullCard?: string;
    master?: string;
    fullCard?: string;
    line?: string;
    limitWinsBolls?: string;
  };
  readOnly?: boolean;
}

function Sala90({ data = {}, readOnly = false }: Sala90Props) {
  // === Estados para Acumulados ===
  const [minCashFullCard, setMinCashFullCard] = useState('');
  const [maxCashFullCard, setMaxCashFullCard] = useState('');
  const [allCashFullCard, setAllCashFullCard] = useState('');

  // Atualizar minCashFullCard e maxCashFullCard quando os dados forem carregados
  useEffect(() => {
    if (data.minCashFullCard) {
      setMinCashFullCard(formatToCents(data.minCashFullCard));
    }
    if (data.maxCashFullCard) {
      setMaxCashFullCard(formatToCents(data.maxCashFullCard));
    }
  }, [data.minCashFullCard, data.maxCashFullCard]);

  // === Estados para Rodada ===
  const [minCashStartRound, setMinCashStartRound] = useState(formatToCents(data.minCashStartRound) || '');
  const [maxCartelasPorRodada, setMaxCartelasPorRodada] = useState(data.maxCartelasPorRodada || ''); 
  const [bolasParaRevisarPedido, setBolasParaRevisarPedido] = useState(data.bolasParaRevisarPedido || ''); 
  
  // === Estados para InputPercentage ===
  const [acumulatedFullCard, setAcumulatedFullCard] = useState(data.acumulatedFullCard || ''); 
  const [master, setMaster] = useState(data.master || '');
  const [fullCard, setFullCard] = useState(data.fullCard || '');
  const [line, setLine] = useState(data.line || '');

  // === Estados para ToggleButton ===
  const [acumulatedFullCardActive, setAcumulatedFullCardActive] = useState(true);
  const [linhaActive, setLinhaActive] = useState(true);
  const [cartelaCheiaActive, setCartelaCheiaActive] = useState(true);

  // === Estados para InputNumber ===
  const [limitWinsBolls, setLimitWinsBolls] = useState(data.limitWinsBolls || '');

  // === Função para calcular o valor acumulado ===
  const calculateAllCash = (min: string, max: string): string => {
    const minVal = parseInt(min, 10) || 0;
    const maxVal = parseInt(max, 10) || 0;
    const total = minVal + maxVal;
    return `R$ ${(total / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Atualizar o valor acumulado quando min ou max mudarem
  useEffect(() => {
    setAllCashFullCard(calculateAllCash(minCashFullCard, maxCashFullCard));
  }, [minCashFullCard, maxCashFullCard]);

  return (
    <Container>
      {/* Acumulados */}
      <Strip>
        <LineTittle>Acumulados</LineTittle>
        <StripContentContainer>
          <StripContent>
            <LineSubTittle>Acumulado cartela cheia</LineSubTittle>
            <StripContentTop>
              <InputMoney
                name="minCashFullCard"
                label="Mínimo"
                value={minCashFullCard}
                onChange={readOnly ? undefined : (e) => setMinCashFullCard(e.target.value)}
                width="186px"
                readOnly={readOnly}
              />
              <InputMoney
                name="maxCashFullCard"
                label="Máximo"
                value={maxCashFullCard}
                onChange={readOnly ? undefined : (e) => setMaxCashFullCard(e.target.value)}
                width="186px"
                readOnly={readOnly}
              />
            </StripContentTop>
            <StripContentBottom>
              <AllCashDisplay
                label="Valor Acumulado"
                value1={minCashFullCard}
                value2={maxCashFullCard}
                width='385px'
              />
            </StripContentBottom>
          </StripContent>
        </StripContentContainer>
      </Strip>
      <Strip>
        <LineTittle>Vencedores</LineTittle>
        <StripContentContainer>
          <StripContent>
            <ToggleButton
              label="Linha"
              initialState={linhaActive}
              onChange={readOnly ? undefined : setLinhaActive}
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Cartela cheia"
              initialState={cartelaCheiaActive}
              onChange={readOnly ? undefined : setCartelaCheiaActive}
              readOnly={readOnly}
            />
          </StripContent>
        </StripContentContainer>
      </Strip>
       {/* Cartela cheia */}
       <Strip>
        <LineTittle>Cartela cheia</LineTittle>
        <StripContentContainer>
          <StripContent>
            <ToggleButton
              label="Acumulado cartela cheia"
              initialState={acumulatedFullCardActive}
              onChange={readOnly ? undefined : setAcumulatedFullCardActive}
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='limitBollsToWin'
              label='Limite de bolas cantadas para ganhar'
              value={limitWinsBolls}
              onChange={readOnly ? undefined : (e) => setLimitWinsBolls(e.target.value)}
              width='315px'
              readOnly={readOnly}
            />
          </StripContent>
        </StripContentContainer>
      </Strip>
      {/* Porcentagens Padrão */}
      <Strip>
        <LineTittle>Porcentagens padrão</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputPercentage
              name="acumulatedFullCard"
              label="Acumulado cartela cheia"
              value={acumulatedFullCard}
              onChange={readOnly ? undefined : (e) => setAcumulatedFullCard(e.target.value)}
              width="200px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="master"
              label="Master"
              value={master}
              onChange={readOnly ? undefined : (e) => setMaster(e.target.value)}
              width="200px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="fullCard"
              label="Cartela cheia"
              value={fullCard}
              onChange={readOnly ? undefined : (e) => setFullCard(e.target.value)}
              width="200px"
              readOnly={readOnly}
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="line"
              label="Linha"
              value={line}
              onChange={readOnly ? undefined : (e) => setLine(e.target.value)}
              width="200px"
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

export default Sala90;
