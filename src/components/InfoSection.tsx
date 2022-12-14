import boat from '../assets/images/boat.jpg'
import kratos from '../assets/images/kratos.png'

export default function InfoSection(){
    return(
        <section>
            <img src={boat} alt="Kratos e Atreus de barco olhando para esquerda" />
            <div>
                <h1>Embarque com Kratos e Atreus em uma jornada épica emocionante 
                sobre apego e superação
                </h1>
                <p>Do Santa Monica Studio, esta é a sequência da aclamada versão de 2018 de God of War. O Fimbulwinter já começou. Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros. A ameaça do Ragnarök se aproxima. Kratos e Atreus terão de escolher entre a segurança deles próprios e a dos reinos.
                </p>
            </div>

            <article>
                <div>
                    <h2>Enfrente Inimigos Poderosos!</h2>
                    <img src={kratos} alt="Kratos enfrentando um lobo gigante" />
                </div>
            </article>
        </section>
    )
}