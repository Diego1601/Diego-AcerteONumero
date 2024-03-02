import React, {useState} from "react";

const GerarNumeroAleatorio = () => {
   /*estado do valor de entrada "Numero digitado" */
   const[numeroDigitado, setNumeroDigitado] = useState();

   /*estado do valor aleatório "randomMath" */
   const[numeroAleatorio, setNumeroAleatorio] = useState();

    /*estado da Mensagem que será exibida*/
    const[mensagem, setMensagem] = useState();

    /*FUNÇÃO QUE GERA O NUMERO, VERIFICA OS VALORES DO INPUT E DO NUMERO GERADO.*/
    const Verificar = () => {
      const numeroGerado = Math.floor(Math.random() * 20) + 1; // Gera um número aleatório de 1 a 10
      setNumeroAleatorio(numeroGerado);

      if(parseInt(numeroDigitado) === numeroGerado) {
        setMensagem("Parabéns, você acertou. O número pensado foi: ")
      } else if(parseInt(numeroDigitado) > 20){
        setMensagem("O numero digitado é maior que 20. O número pensado foi: ")
      } else if(parseInt(numeroDigitado) < 1){
        setMensagem("O numero digitado é menor que 1. O número pensado foi: ")
      }
      else {
        setMensagem("Não foi dessa vez. O número pensado foi: ")
      }
}
    /* FUNÇÃO QUE LIMPA OS DADOS DA PÁGINA */
    const JogarDeNovo = () => {
      setNumeroDigitado("");
      setNumeroAleatorio(null);
      setMensagem("");
      };
   
  return (
    <>
    <main>
        <section className="SectionSorteio">
            <div className="DivGerandoNumero">
                <h3>Estou pensando em um número entre 1 e 20. Tente adivinhar: </h3>
                <input type="Number" value={numeroDigitado} onChange={(event) => {setNumeroDigitado(event.target.value)}} name="InputNumber" placeholder="Digite um número" />
              <div className="DivButton">
                <button onClick={JogarDeNovo}>Jogar de novo</button>
                <button onClick={Verificar}>Verificar</button>
              </div>
            </div>
        </section>
        <h2>{mensagem} {numeroAleatorio}</h2>
     
    </main>
    </>
  )
}

export default GerarNumeroAleatorio
