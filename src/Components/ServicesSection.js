import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                   
                       <ServiceCard 
                        image={gamedev} 
                        title={'WEB DEVELOPMENT'} 
                        paragraph={'I create websites using HTML, CSS,  JavaScript And ReactJs. I am a Frontend Developer and you can see what I have done from the Portfolio page. If you need a website, contact me via social media!'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'RESPONSIVE DESIGN'} 
                            paragraph={'I create sites that are flexible to the mobile version. Frontend developers also create the site with flexibility to the mobile version.'}
                        />
                    </div>
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'I can also do business cards, mockup design, social media post design and more in the Design area. You can see what I did on the Portfolio page.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
