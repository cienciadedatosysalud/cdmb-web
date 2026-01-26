import{j as e,u as m}from"./useTranslation.ChJ-2vCC.js";import{r as n}from"./index.CMt9tOoS.js";import"./i18n.CnFZXKic.js";const x=()=>{const{t:a}=m(),[c,d]=n.useState(""),p=[{id:"home",label:a("nav.home")},{id:"project",label:a("nav.project")},{id:"cohort",label:a("nav.cohort")},{id:"entities",label:a("nav.entities")},{id:"validation",label:a("nav.validation")},{id:"summary",label:a("nav.summary")}];return n.useEffect(()=>{const t=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&d(i.target.id)})},{rootMargin:"-40% 0px -40% 0px"}),l=["home","project","cohort","entities","validation","summary"],r=()=>{let o=0;l.forEach(i=>{const s=document.getElementById(i);s&&(t.observe(s),o++)}),o<l.length&&setTimeout(r,500)};return r(),()=>t.disconnect()},[]),e.jsxs(e.Fragment,{children:[e.jsxs("nav",{className:"tl-container",children:[e.jsx("div",{className:"tl-line"}),p.map(t=>e.jsxs("a",{href:`#${t.id}`,className:`tl-item ${c===t.id?"active":""}`,id:`nav-${t.id}`,"aria-label":`Ir a ${t.label}`,suppressHydrationWarning:!0,children:[e.jsx("div",{className:"tl-dot-container",children:e.jsx("span",{className:"tl-dot"})}),e.jsx("span",{className:"tl-label",children:t.label})]},t.id))]}),e.jsx("style",{children:`
        /* He renombrado todas las clases con 'tl-' (Timeline) 
           para evitar conflictos con Home.jsx */

        .tl-container {
          position: fixed;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          z-index: 50;
          pointer-events: none; /* Permite hacer clic a través del contenedor vacío */
        }

        .tl-line {
          position: absolute;
          left: 9px; /* (20px ancho dot / 2) - (2px ancho línea / 2) = 9px */
          top: 10px;
          bottom: 10px;
          width: 2px;
          background-color: #e5e7eb;
          z-index: -1;
        }

        .tl-item {
          pointer-events: auto; /* Reactivamos clics en los items */
          display: flex;       /* Esto asegura que el texto vaya a la DERECHA */
          flex-direction: row; /* Forzamos fila */
          align-items: center; /* Centrado vertical */
          gap: 1rem;           /* Separación entre bola y texto */
          text-decoration: none;
          color: #6b7280;
          transition: all 0.2s ease;
          cursor: pointer;
          position: relative;  /* Importante */
        }

        .tl-dot-container {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f8fafc; /* Color de fondo igual que tu app (slate-50) */
          border-radius: 50%;
          flex-shrink: 0; /* Evita que se aplaste */
        }

        .tl-dot {
          width: 10px;
          height: 10px;
          background-color: #d1d5db;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tl-label {
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.6; /* Un poco transparente cuando inactivo */
          transition: all 0.2s;
          white-space: nowrap; /* Evita que el texto salte de línea */
        }

        /* --- ESTADOS DE INTERACCIÓN --- */

        /* Hover */
        .tl-item:hover .tl-dot {
          transform: scale(1.2);
          background-color: #9ca3af;
        }
        .tl-item:hover .tl-label {
          color: #111827;
          opacity: 1;
        }

        /* ACTIVO (Se ilumina azul) */
        .tl-item.active .tl-dot {
          width: 14px;
          height: 14px;
          background-color: #4D76B2;
          box-shadow: 0 0 0 4px #ebf5ff;
        }

        .tl-item.active .tl-label {
          color: #4D76B2;
          font-weight: 700;
          opacity: 1;
          transform: translateX(4px);
        }
      `})]})},h=()=>e.jsx(n.Suspense,{fallback:null,children:e.jsx(x,{})});export{h as default};
