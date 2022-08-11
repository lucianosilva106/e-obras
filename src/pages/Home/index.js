import React from 'react';
import construir from '../img/construcao.jpg'
import reformar from '../img/reforma.jpg'
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
                <div className='textofoot'>
                    <a style={{color: 'cadetblue'}} href='https://www.google.com.br' target='_blank' rel='noreferrer'> Google</a> 
                    <a style={{color: 'cadetblue'}} href='https://www.instagram.com' target='_blank' rel='noreferrer'> Instagran</a> 
                    <a style={{color: 'cadetblue'}} href='https://www.facebook.com' target='_blank' rel='noreferrer'> Facebook</a> 
                    <h4>Copyright © e-Obras 2022</h4>
                </div>

            </div>
        </div>
    );
}

export default Home;