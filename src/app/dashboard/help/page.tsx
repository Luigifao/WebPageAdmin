"use client";

import React from 'react';
interface MycomponentsProps {
    text: string;
}
const HelpPage = () => {
    return (
        <div className="relative w-full h-full flex flex-col">
            {/* Título e Descrição */}
            <div className="mt-5 text-center">
                <Title text="Página de ajuda" />
                <Description text="Esta é a página de ajuda de nossa aplicação. Aqui você encontrará informações úteis e respostas para suas dúvidas" />
            </div>

            {/* Espaço flexível para centralizar as perguntas */}
            <div className="flex-grow flex items-center justify-center" style={{width: '80%'}}>
                <div className="flex flex-col items-center">
                    <DialogBox title="Pergunta 1" description="Resposta para a pergunta 1" />
                    <DialogBox title="Pergunta 2" description="Resposta para a pergunta 2" />
                </div>
            </div>
        </div>
    )
};
const Description: React.FC<MycomponentsProps> = ({ text }) => {
    return (
        <p style={{ textAlign: 'center'  }}>{text}</p>
    );
};
const Title: React.FC<MycomponentsProps> = ({ text }) => {
    return (
        <h1 className=" w-full text-center text-4xl ">{text}
        </h1>
    );
};

const DialogBox = ({ title, description }) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <h2>{title}</h2>
            <h4>{description}</h4>
        </div>
    )
}
export default HelpPage;
