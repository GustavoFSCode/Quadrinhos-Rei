import React from 'react';
import { 
    GraficoPage,
    InfosRow,
    GraficosRow,
    InfosBox,
    InfosContent,
    InfosText,
    InfosTittle,
    InfosData,
    InfosIcon,
    GraficosBox,
    GraficosTittle,
    GraficosContent
 } from './styled';
 import UserIcon from '@/components/icons/UserIcon';
import SaqueIcon from '@/components/icons/SaqueIcon';
import MoneyIcon from '@/components/icons/MoneyIcon';
import WinningIcon from '@/components/icons/WinningIcon';
import RollIcon from '@/components/icons/RollIcon';
import StarIcon from '@/components/icons/StarIcon';
import CartelasVendidas from '@/components/Tables/Dashboard/Graficos/CartelasVendidas';
import ValorGastoCartela from '@/components/Tables/Dashboard/Graficos/ValorGastoCartela';
import TotalVencedores from '@/components/Tables/Dashboard/Graficos/TotalVencedores';
import JogadoresSala from '@/components/Tables/Dashboard/Graficos/JogadoresSala';
import MediaCartelasPorJogador from '@/components/Tables/Dashboard/Graficos/MediaCartelasPorJogador';
import TotalRodadasEfetuadas from '@/components/Tables/Dashboard/Graficos/TotalRodadasEfetuadas';
import ValorTotalPremios from '@/components/Tables/Dashboard/Graficos/ValorTotalPremios';
import VencedoresAcumulados from '@/components/Tables/Dashboard/Graficos/VencedoresAcumulados';
import GanhosAcumulados from '@/components/Tables/Dashboard/Graficos/GanhosAcumulados';

function GraficosPage() {
    return(
        <GraficoPage>
            <InfosRow>
                <InfosBox>
                    <InfosContent>
                        <InfosText>
                            <InfosTittle>
                                Total de usuários
                            </InfosTittle>
                            <InfosData>
                                230
                            </InfosData>
                        </InfosText>
                        <InfosIcon>
                            <UserIcon/>
                        </InfosIcon>
                    </InfosContent>
                </InfosBox>
                <InfosBox>
                    <InfosContent>
                        <InfosText>
                            <InfosTittle>
                                Valor total sacado
                            </InfosTittle>
                            <InfosData>
                                R$ 1.270
                            </InfosData>
                        </InfosText>
                        <InfosIcon>
                            <SaqueIcon/>
                        </InfosIcon>
                    </InfosContent>
                </InfosBox>
                <InfosBox>
                    <InfosContent>
                        <InfosText>
                            <InfosTittle style={{ marginLeft: "23%" }}>
                                Valor gasto em grãos de bingo
                            </InfosTittle>
                            <InfosData>
                                R$ 2.270
                            </InfosData>
                        </InfosText>
                        <InfosIcon>
                            <MoneyIcon/>
                        </InfosIcon>
                    </InfosContent>
                </InfosBox>
            </InfosRow>
            <GraficosRow>
                <GraficosBox>
                    <GraficosTittle>Cartelas vendidas - 680</GraficosTittle>
                    <GraficosContent>
                        <CartelasVendidas/>
                    </GraficosContent>
                </GraficosBox>
                <GraficosBox>
                    <GraficosTittle>Valor gasto em cartelas - R$ 550,00 </GraficosTittle>
                    <GraficosContent>
                        <ValorGastoCartela/>
                    </GraficosContent>
                </GraficosBox>
                <GraficosBox>
                    <GraficosTittle>Total de vencedores - 650</GraficosTittle>
                    <GraficosContent>
                        <TotalVencedores/>
                    </GraficosContent>
                </GraficosBox>
            </GraficosRow>
            <GraficosRow>
                <GraficosBox>
                    <GraficosTittle>Jogadores por sala</GraficosTittle>
                    <GraficosContent>
                        <JogadoresSala/>
                    </GraficosContent>
                </GraficosBox>
                <GraficosBox>
                    <GraficosTittle>Média de cartelas compradas por jogador</GraficosTittle>
                    <GraficosContent>
                        <MediaCartelasPorJogador/>
                    </GraficosContent>
                </GraficosBox>
                <GraficosBox>
                    <GraficosTittle>Total de rodadas efetuadas - 120</GraficosTittle>
                    <GraficosContent>
                        <TotalRodadasEfetuadas/>
                    </GraficosContent>
                </GraficosBox>
            </GraficosRow>
            <InfosRow>
                <InfosBox>
                    <InfosContent>
                        <InfosText>
                            <InfosTittle style={{ marginLeft: "23%" }}>
                                Quantidade de bônus enviado
                            </InfosTittle>
                            <InfosData>
                                785
                            </InfosData>
                        </InfosText>
                        <InfosIcon>
                            <WinningIcon/>
                        </InfosIcon>
                    </InfosContent>
                </InfosBox>
                <InfosBox>
                    <InfosContent>
                        <InfosText>
                            <InfosTittle style={{ marginLeft: "15%" }}>
                                Quantidade de bônus ganho na roleta
                            </InfosTittle>
                            <InfosData>
                                785
                            </InfosData>
                        </InfosText>
                        <InfosIcon>
                            <RollIcon/>
                        </InfosIcon>
                    </InfosContent>
                </InfosBox>
                <InfosBox>
                    <InfosContent>
                        <InfosText>
                            <InfosTittle>
                                Total de avaliações
                            </InfosTittle>
                            <InfosData>
                                220
                            </InfosData>
                        </InfosText>
                        <InfosIcon>
                            <StarIcon/>
                        </InfosIcon>
                    </InfosContent>
                </InfosBox>
            </InfosRow>
            <GraficosRow>
                <GraficosBox>
                    <GraficosTittle>Valor total de prêmios - R$ 350</GraficosTittle>
                    <GraficosContent>
                        <ValorTotalPremios/>
                    </GraficosContent>
                </GraficosBox>
                <GraficosBox>
                    <GraficosTittle>Vencedores de acumulados - 1.345</GraficosTittle>
                    <GraficosContent>
                        <VencedoresAcumulados/>
                    </GraficosContent>
                </GraficosBox>
                <GraficosBox>
                    <GraficosTittle>Ganhos em acumulados - R$ 1.345</GraficosTittle>
                    <GraficosContent>
                        <GanhosAcumulados/>
                    </GraficosContent>
                </GraficosBox>
            </GraficosRow>
        </GraficoPage>
    )
}

export default GraficosPage;
