import vaiNaWeb from "../../assets/vaiNaWeb.png"

function Footer () {
    return (
        <>
            <footer>
                <section className="SectionFooter">
                <div>
                    <p>
                        Criado por Diego Henrique - Módulo II | Desenvolvimento Web
                    </p>
                </div>
                <div className="DivImgFooter">
                    <a href="https://vainaweb.com.br/" target="_blank">
                    <img src={vaiNaWeb} alt="Vai na Web"/>
                    </a>
                </div>
                </section>
            </footer>
        </>
    )
}

export default Footer