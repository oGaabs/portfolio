import { useLang } from "../../contexts/LangContext"
import { AboutContainer } from "./styles"

export default function About() {
  const { currentLang } = useLang()

  return (
    <AboutContainer>
      {currentLang === "pt" ? (
        <>
          <p>
            Olá, sou o <a href="https://www.linkedin.com/in/gabriel-santana-silva/">Gabriel Santana</a>, estou no 4° semestre do Curso de Desenvolvimento de Sistemas do
            <a href="https://cotuca.unicamp.br/cotuca/"> Colégio Técnico de Campinas - Unicamp (COTUCA)</a>, estou em busca de estágio em desenvolvimento de software, nas áreas
            de back-end, front-end ou mobile, e adoro enfrentar desafios e descobrir novas habilidades.
          </p>
          <p>
            Desde criança sempre fui apaixonado por tecnologia e jogos, no entanto, minha jornada só começou quando em 2021, comecei a estudar programação,
            a minha vontade de explorar o mundo e entender como podia transformar ele, me fez gostar muito da área, tanto que no início, fiquei admirado com a
            capacidade da tecnologia e da quantidade de coisas que era capaz de se desenvolver e de se solucionar, foi nesse momento que vi que essa era a área certa para mim,
            junto ao meu sonho de poder tornar o mundo, um lugar melhor...
            Com os anos passei a entender vários conceitos que antes eram um mistério na minha cabeça.
          </p>
          <p>
            Hoje, apesar de ainda não ter alcançado o que pretendo, sou grato a tudo o que essa área me proporcionou, graças a ela, conheci pessoas incríveis,
            projetos e pessoas que estavam dispostos a ajudar toda a comunidade, além de ter tido a oportunidade de ajudar muitas pessoas, além disso, entrei no colégio
            dos meus sonhos e pude trabalhar com o que gosto, é uma comunidade incrível e que ainda oferecerá muito ao mundo, espero cada vez mais poder fazer parte dessa grande jornada.
          </p>
        </>
      ) : (
        <>
          <p>
            Hi, I'm <a href="https://www.linkedin.com/in/gabriel-santana-silva/">Gabriel Santana</a>, I'm in the 4th semester of the Systems Development Course at
            <a href="https://cotuca.unicamp.br/cotuca/"> Unicamp - Technical High School of Campinas (COTUCA)</a>, I am looking for an internship in software development, in the areas
            back-end, front-end or mobile, and I love to face challenges and discover new skills.
          </p>
          <p>
            Since I was a child, I have always been passionate about technology and games, however, my journey only began when in 2021, I started studying programming,
            my willingness to explore the world and understand how I could transform it, made me really like the area, so much so that at first, I was amazed at the
            capacity of technology and the number of things that it was capable of developing and solving, it was at that moment that I saw that this was the right area for me,
            along with my dream of being able to make the world a better place...
            Over the years I came to understand several concepts that were previously a mystery in my head.
          </p>
          <p>
            Today, despite still not having achieved what I want, I am grateful for everything that this area has given me, thanks to which I met incredible people,
            projects and people who were willing to help the whole community, in addition to having had the opportunity to help many people, in addition, I entered high school
            of my dreams and I was able to work with what I like, it is an incredible community that will still offer a lot to the world, I hope more and more to be part of this great journey.
          </p>
        </>
      )}
    </AboutContainer>
  )
}

