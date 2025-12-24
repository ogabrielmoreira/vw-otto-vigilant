# VW Otto Vigilant 🚗💙

Aplicação web React que replica o design do sistema de infotainment VW Otto Vigilant, um conceito de copiloto de IA da Volkswagen que evolui o OTTO atual de assistente de voz para sistema proativo de segurança contra fadiga e estresse ao volante.

## 🎨 Design

O design foi baseado no Figma oficial do projeto, mantendo fidelidade pixel-perfect aos elementos visuais, incluindo:
- Layout de infotainment com sidebars laterais
- Header com status do sistema
- Cards de aplicativos
- Sistema de alertas interativo

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Roteamento para SPA

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/ogabrielmoreira/vw-otto-vigilant.git

# Entre na pasta
cd vw-otto-vigilant

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🎯 Funcionalidades

### Home Page
- Grid de 4 aplicativos (Meu VW, Otto Vigilant, Waze, Porto Seguro)
- Design responsivo
- Navegação para página do Otto Vigilant

### Otto Vigilant Page
- Registro de eventos de fadiga
- Alerta automático após 3 segundos
- 3 níveis de alerta:
  - 🟢 **Nível 1 (Verde)**: Cansaço leve - Sugestão de pausa
  - 🟠 **Nível 2 (Laranja)**: Fadiga moderada - Recomendação de descanso
  - 🔴 **Nível 3 (Vermelho)**: Fadiga crítica - Sistema assumiu controle

### Sistema de Alertas
- Modal interativo com animação de ondas de áudio
- Mensagens contextuais baseadas no nível de fadiga
- Botões de ação personalizados por nível

## 📁 Estrutura do Projeto

```
vw-otto-vigilant/
├── public/
│   └── images/          # Imagens do infotainment e ícones
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── AlertModal.jsx
│   │   ├── AppCard.jsx
│   │   ├── AppGrid.jsx
│   │   ├── Header.jsx
│   │   ├── LeftSidebar.jsx
│   │   └── RightSidebar.jsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── HomePage.jsx
│   │   └── OttoVigilantPage.jsx
│   ├── App.jsx          # Rotas principais
│   ├── main.jsx         # Entry point
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Cores

- **Fundo**: `#000000` (Preto)
- **Card**: `#111317` (Cinza escuro)
- **Texto**: `#FFFFFF` (Branco)
- **Texto secundário**: `#969696` (Cinza)
- **Alerta Verde**: `#00B374`
- **Alerta Laranja**: `#FF9500`
- **Alerta Vermelho**: `#E63946`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção

## 🔗 Links

- [Figma Design](https://www.figma.com/design/OBEdK2DfxJstCcH60kJG6q/VW-Otto-Vigilant)
- [Repositório GitHub](https://github.com/ogabrielmoreira/vw-otto-vigilant)

## 👤 Autor

Gabriel Moreira - [GitHub](https://github.com/ogabrielmoreira)

## 📄 Licença

Este projeto é um portfólio/estudo de caso baseado no design da Volkswagen.
