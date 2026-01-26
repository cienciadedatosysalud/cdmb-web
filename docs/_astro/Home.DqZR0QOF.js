import{u as i,j as e}from"./useTranslation.ChJ-2vCC.js";import"./index.CMt9tOoS.js";import"./i18n.CnFZXKic.js";const s="/cdmb-web/";function m(){const{t}=i(),a=[t("home.steps.step1"),t("home.steps.step2"),t("home.steps.step3"),t("home.steps.step4"),t("home.steps.step5"),t("home.steps.step6"),t("home.steps.step7"),t("home.steps.step8"),t("home.steps.step9")],r=a.length;return e.jsxs("div",{children:[e.jsxs("div",{className:"home-container",children:[e.jsx("img",{src:`${s}logo_builder.png`,alt:"Logo",className:"logo-img"}),e.jsxs("div",{className:"metro-container",children:[e.jsx("div",{className:"metro-line",children:e.jsx("div",{className:"progress-line"})}),a.map((n,o)=>e.jsxs("div",{className:"station",style:{left:`calc(${o/(r-1)*100}%)`},children:[e.jsx("div",{className:"circle"}),e.jsx("p",{className:"label",children:n})]},o))]})]}),e.jsxs("div",{className:"cards-container",children:[e.jsx("a",{href:"/about",className:"footer-card",target:"_blank",rel:"noopener noreferrer",children:t("home.footer.about")}),e.jsx("a",{href:"/about#authors",className:"footer-card",target:"_blank",rel:"noopener noreferrer",children:t("home.footer.authors")}),e.jsx("a",{href:"/about#funding",className:"footer-card",target:"_blank",rel:"noopener noreferrer",children:t("home.footer.funding")}),e.jsx("a",{href:"/about#termsconditions",className:"footer-card",target:"_blank",rel:"noopener noreferrer",children:t("home.footer.terms")}),e.jsx("a",{href:"/about#contact",className:"footer-card",target:"_blank",rel:"noopener noreferrer",children:t("home.footer.contact")})]}),e.jsx("style",{children:`
        .home-container {
          width: 100%;
          max-width: 1100px; /* Un poco más de ancho para dar aire */
          margin: 0 auto;
          text-align: center;
          padding: 2rem 1rem;
        }

        .logo-img {
          width: 800px;
          height: auto;
          border-radius: 0.75rem;
          margin-bottom: 2rem;
          display: inline-block;
        }

        /* --- METRO MAP ZIG-ZAG --- */
        
        .metro-container {
          position: relative;
          width: 100%;
          /* Aumentamos altura para que quepan textos arriba y abajo */
          height: 160px; 
          display: flex;
          align-items: center; /* Centrar verticalmente */
          margin-bottom: 2rem;
        }

        .metro-line {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          height: 6px;
          background: #eee;
          border-radius: 3px;
          overflow: hidden;
          z-index: 1;
        }

        .progress-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background: #FED56D;
          border-radius: 3px;
          animation: fillLine 9s linear forwards;
        }

        .station {
          position: absolute;
          top: 50%;
          /* Centramos el punto exactamente en la línea */
          transform: translate(-50%, -50%); 
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
          width: 1px; /* Para que no ocupe espacio lateral y se base en el punto */
        }

        .circle {
          width: 20px; /* Reduje un poco el círculo para ganar espacio */
          height: 20px;
          border-radius: 50%;
          background: #ccc;
          flex-shrink: 0; /* Evita que se aplaste */
        }

        /* --- ESTRATEGIA ZIG ZAG --- */

        /* ETIQUETAS: Base */
        .label {
          position: absolute;
          width: 130px; /* Más ancho para el inglés */
          font-size: 0.85rem; /* Texto un pelín más pequeño */
          line-height: 1.2;
          color: #333;
          text-align: center;
          left: 50%;
          transform: translateX(-50%);
        }

        /* PARES: Texto ARRIBA */
        .station:nth-child(even) .label {
          bottom: 28px; /* Colocar encima del círculo */
          margin-bottom: 5px;
        }

        /* IMPARES: Texto ABAJO */
        .station:nth-child(odd) .label {
          top: 28px; /* Colocar debajo del círculo */
          margin-top: 5px;
        }

        /* FOOTER & ANIMATIONS */
        .cards-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
          padding-bottom: 4rem;
        }

        .footer-card {
          display: block;
          padding: 1rem;
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          color: #333;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s;
          min-width: 140px;
        }
        .footer-card:hover {
            transform: translateY(-5px);
        }

        @keyframes fillLine { 0% { width: 0%; } 100% { width: 100%; } }
        @keyframes lightStation { 0% { background: #FED56D; } 100% { background: #4D76B2; } }
        @keyframes lastGreen { 0% { background: #FED56D; } 100% { background: #4D76B2; } }

        /* Las animaciones de los círculos se mantienen igual */
        .station:nth-child(1) .circle { animation: lightStation 9s linear 0s forwards; }
        .station:nth-child(2) .circle { animation: lightStation 8s linear 1s forwards; }
        .station:nth-child(3) .circle { animation: lightStation 7s linear 1.5s forwards; }
        .station:nth-child(4) .circle { animation: lightStation 6s linear 2.5s forwards; }
        .station:nth-child(5) .circle { animation: lightStation 5s linear 3.5s forwards; }
        .station:nth-child(6) .circle { animation: lightStation 4s linear 4.5s forwards; }
        .station:nth-child(7) .circle { animation: lightStation 3s linear 5.5s forwards; }
        .station:nth-child(8) .circle { animation: lightStation 2s linear 6.5s forwards; }
        .station:nth-child(9) .circle { animation: lightStation 1s linear 7.5s forwards; }
        .station:nth-child(10) .circle { animation: lightStation 0s linear 9.5s forwards, lastGreen 0s forwards 9s; }

        @media (max-width: 768px) {
            .metro-container { display: none; } /* Ocultar mapa en móviles */
            .logo-img { width: 100%; }
        }
      `})]})}export{m as default};
