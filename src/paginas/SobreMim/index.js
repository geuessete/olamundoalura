import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function Sobremim(){
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Gustavo.
            </h3>

            <img 
                className={styles.fotoSobreMim} 
                src={fotoSobreMim} 
                alt='Professor' />

            <p className={styles.paragrafo}>Vamos salvar. Ficamos vendo e acompanhando as alterações. Salvei o arquivo e no navegador já consegui ver a foto do lado direito. Agora, precisamos adicionar os textos daqueles parágrafos, que já estão prontos no Figma.</p>
            <p className={styles.paragrafo}>Lá temos seis parágrafos, vou copiar os três primeiros que estão agrupados no Figma. Seleciono o trecho de texto e clico no ícone para copiar que fica no lado direito. Copiados os textos, vou inseri-los depois da imagem, dando um "Ctrl + V" nesses parágrafos.</p> 
            <p className={styles.paragrafo}>Agora vou copiar todos os parágrafos, darei uma identação neles, e agora, pegarei também os últimos três.</p>

            <p className={styles.paragrafo}>Vamos salvar. Ficamos vendo e acompanhando as alterações. Salvei o arquivo e no navegador já consegui ver a foto do lado direito. Agora, precisamos adicionar os textos daqueles parágrafos, que já estão prontos no Figma.</p>
            <p className={styles.paragrafo}>Lá temos seis parágrafos, vou copiar os três primeiros que estão agrupados no Figma. Seleciono o trecho de texto e clico no ícone para copiar que fica no lado direito. Copiados os textos, vou inseri-los depois da imagem, dando um "Ctrl + V" nesses parágrafos.</p> 
            <p className={styles.paragrafo}>Agora vou copiar todos os parágrafos, darei uma identação neles, e agora, pegarei também os últimos três.</p>
        
        </PostModelo>
    )
}