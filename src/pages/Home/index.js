import React from 'react';
import construir from '../img/construcao.jpg'
import reformar from '../img/reforma.jpg'
import gestao from '../img/gestao.jpg'
import parceiro from '../img/parceiros.jpg'
import cliente from '../img/cliente.jpg'
import './home.css';

function Home(){

    return(
        <div>
            <div id="logohome" />
            <div className='texto'>
                <h2>Quer construir?</h2>
                <h3>Você que deseja iniciar uma obra do zero é importante um planejamento minucioso para que o cronograma
                    de sua obra saia dentro do prazo definido e do orçamento calculado, gerando economia e agilidade ao empreendimento.</h3> <br/>
                <img src={construir} alt='Construções' className='imagens'/>
                <h2>Quer reformar?</h2>
                <h3> Uma reforma requer cuidados estruturais e muita criatividade e competência para otimizar espaços, evitar desperdício de tempo e dinheiro.</h3> <br/>
                <img src={reformar} alt='Reformas' className='imagens'/>
                <h2>Gestão centralizada e compartilhada</h2>
                <h3>Gerenciar as obras através de uma plataforma centralizada, dinâmica e permitir que os clientes tenham acesso ao andamento de sua obra.</h3> <br/>
                <img src={gestao} alt='Gestao das obras' className='imagens'/>
                <h2>Equipe integrada</h2>
                <h3>Gestão de equipes de trabalho, localização da obra em que estão alocados.</h3> <br/>
                <img src={parceiro} alt='Parceiros' className='imagens'/>
                <h2>Cliente satisfeito</h2>
                <h3>Proporcionar ao cliente um acesso rápido ao andamento da obra com um canal direto de comunicação com o gerente.</h3> <br/>
                <img src={cliente} alt='Cliente satisfeito' className='imagens'/>

            </div>
            <br/>
        </div>
    );
}

export default Home;