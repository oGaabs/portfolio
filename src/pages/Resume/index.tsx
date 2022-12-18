import { useState, useEffect } from "react";
import { AiOutlineDownload, AiOutlineRollback } from "react-icons/ai"
import { Document, Page, pdfjs } from "react-pdf"
import pdf from "../../assets/docs/CV_Estagio_Gabriel_Santana_Silva.pdf"

import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { Container } from "../Home/styles";
import { ContactContainer, ContactIcon } from "../../components/Header/styles";
import { useLang } from "../../contexts/LangContext";
import { NavLink } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


export default function ResumeNew() {
    const [width, setWidth] = useState(1200)
    const { currentLang } = useLang()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, []);

    return (
        <div>
            <Container className="resume-section">
                {currentLang === "pt" ? (
                    <>
                        <h1>Curriculo</h1>
                        <p>Aqui você pode baixar meu curriculo em formato PDF.</p>
                        <p>Clique no botão abaixo para baixar.</p>
                    </>
                ) : (
                    <>
                        <h1>Resume</h1>
                        <p>Here you can download my resume in PDF format.</p>
                        <p>Click on the button below to download.</p> </>
                )}



                <div style={{ justifyContent: "center", position: "relative" }}>
                    <ContactContainer>
                        <NavLink to="/" style={{ maxWidth: "250px" }}>
                            <ContactIcon contactType={"cv"}>
                                <AiOutlineRollback size={"1.2rem"} /> {currentLang === "pt" ? (
                                    <span>Voltar</span>
                                ) : (
                                    <span>Back</span>
                                )}
                            </ContactIcon>
                        </NavLink>
                    </ContactContainer>
                    <ContactContainer>
                        <a href={pdf} target="_blank" style={{ maxWidth: "250px" }} rel="noreferrer">
                            <ContactIcon contactType={"cv"}>
                                <AiOutlineDownload size={"1.2rem"} /> <span>Download CV</span>
                            </ContactIcon>
                        </a>
                    </ContactContainer>
                </div>

                <div className="resume" style={{ justifyContent: "center", position: "relative" }}>
                    <Document file={pdf}   >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </div>

            </Container >
        </div >
    );
}
