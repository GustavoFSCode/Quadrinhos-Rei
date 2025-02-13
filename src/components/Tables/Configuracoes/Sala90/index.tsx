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

function Sala90() {
  // === Estados para InputMoney ===

  // Acumulado cartela cheia
  const [minCashFullCard, setMinCashFullCard] = useState('');
  const [maxCashFullCard, setMaxCashFullCard] = useState('');
  const [allCashFullCard, setAllCashFullCard] = useState('');

  // Rodada
  const [minCashStartRound, setMinCashStartRound] = useState('');
  const [maxCartelasPorRodada, setMaxCartelasPorRodada] = useState(''); 
  const [bolasParaRevisarPedido, setBolasParaRevisarPedido] = useState(''); 
  
  // === Estados para InputPercentage ===
  const [acumulatedFullCard, setAcumulatedFullCard] = useState(''); 
  const [master, setMaster] = useState('');
  const [timeBoll, setTimeBoll] = useState('');
  const [quinaAcumulated, setQuinaAcumulated] = useState('');

  // === Estados para ToggleButton ===
  const [acumulatedFullCardActive, setAcumulatedFullCardActive] = useState(true);
  const [linhaActive, setLinhaActive] = useState(true);
  const [cartelaCheiaActive, setCartelaCheiaActive] = useState(true);

  // === Estados para InputNumber ===
  const [limitWinsBolls, setLimitWinsBolls] = useState('');

  // === Manipuladores para InputMoney ===

  // Acumulado cartela cheia
  const handleMinCashFullCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCashFullCard(e.target.value);
  };

  const handleMaxCashFullCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCashFullCard(e.target.value);
  };

  // Rodada
  const handleMinCashStartRoundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCashStartRound(e.target.value);
  };

  const handleMaxCartelasPorRodadaChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCartelasPorRodada(e.target.value);
  };

  const handleBolasParaRevisarPedidoChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBolasParaRevisarPedido(e.target.value);
  };

  // === Manipuladores para InputPercentage ===
  const handleAcumulatedFullCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcumulatedFullCard(e.target.value);
  };

  const handleMasterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaster(e.target.value);
  };

  const handleTimeBollChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeBoll(e.target.value);
  };

  const handleQuinaAcumulatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuinaAcumulated(e.target.value);
  };

  // === Manipuladores para ToggleButton ===
  const handleAcumulatedFullCardToggle = (newState: boolean) => {
    setAcumulatedFullCardActive(newState);
  };

  const handleLinhaToggle = (newState: boolean) => {
    setLinhaActive(newState);
  };

  const handleCartelaCheiaToggle = (newState: boolean) => {
    setCartelaCheiaActive(newState);
  };

  // === Manipuladores para InputNumber ===
  const handleLimitWinsBollsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLimitWinsBolls(e.target.value);
  };

  // === Cálculo para AllCashDisplay ===

  // Acumulado cartela cheia
  const calculateAllCashFullCard = () => {
    const min = parseFloat(minCashFullCard.replace(/R\$\s?|\.|,/g, '').replace(',', '.')) || 0;
    const max = parseFloat(maxCashFullCard.replace(/R\$\s?|\.|,/g, '').replace(',', '.')) || 0;
    return (max + min).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // === useEffect para Atualizar os Valores Acumulados ===
  useEffect(() => {
    setAllCashFullCard(calculateAllCashFullCard());
  }, [minCashFullCard, maxCashFullCard]);

  return (
    <Container>
      {/* Porcentagens Padrão */}
      <Strip>
        <LineTittle>Porcentagens padrão</LineTittle>
        <StripContentContainer>
          <StripContent>
            <InputPercentage
              name="acumulatedFullCard"
              label="Acumulado cartela cheia"
              value={acumulatedFullCard}
              onChange={handleAcumulatedFullCardChange}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="master"
              label="Master"
              value={master}
              onChange={handleMasterChange}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="fullCard"
              label="Cartela cheia"
              value={timeBoll}
              onChange={handleTimeBollChange}
              width="200px"
            />
          </StripContent>
          <StripContent>
            <InputPercentage
              name="line"
              label="Linha"
              value={quinaAcumulated}
              onChange={handleQuinaAcumulatedChange}
              width="200px"
            />
          </StripContent>
        </StripContentContainer>
      </Strip>

      {/* Acumulados */}
      <Strip>
        <LineTittle>Acumulados</LineTittle>
        <StripContentContainer>
          {/* Acumulado cartela cheia */}
          <StripContent>
            <LineSubTittle>Acumulado cartela cheia</LineSubTittle>
            <StripContentTop>
              <InputMoney
                name="minFullCard"
                label="Mínimo"
                value={minCashFullCard}
                onChange={handleMinCashFullCardChange}
                width="186px"
              />
              <InputMoney
                name="maxFullCard"
                label="Máximo"
                value={maxCashFullCard}
                onChange={handleMaxCashFullCardChange}
                width="186px"
              />
            </StripContentTop>
            <StripContentBottom>
              <AllCashDisplay
                label="Valor Acumulado"
                value1={maxCashFullCard}
                value2={minCashFullCard}
                width='385px'
              />
            </StripContentBottom>
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
              onChange={handleAcumulatedFullCardToggle}
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='limitBollsToWin'
              label='Limite de bolas cantadas para ganhar'
              value={limitWinsBolls}
              onChange={handleLimitWinsBollsChange}
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
              label="Linha"
              initialState={linhaActive}
              onChange={handleLinhaToggle}
            />
          </StripContent>
          <StripContent>
            <ToggleButton
              label="Cartela cheia"
              initialState={cartelaCheiaActive}
              onChange={handleCartelaCheiaToggle}
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
              onChange={handleMinCashStartRoundChange}
              width="315px"
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='maxCartelasPorRodada'
              label='Máximo de cartelas do jogador por rodada'
              value={maxCartelasPorRodada}
              onChange={handleMaxCartelasPorRodadaChangeNumber}
              width='315px'
            />
          </StripContent>
          <StripContent>
            <InputNumber
              name='bolasParaRevisarPedido'
              label='Bolas cantadas para revisar pedido de bingo'
              value={bolasParaRevisarPedido}
              onChange={handleBolasParaRevisarPedidoChangeNumber}
              width='315px'
            />
          </StripContent>
        </StripContentContainer>
      </Strip>
    </Container>
  );
}

export default Sala90;