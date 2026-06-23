# Miluz - Recrutamento e Seleção

![Miluz Logo](https://img.shields.io/badge/Miluz-Recrutamento%20e%20Sele%C3%A7%C3%A3o-39175d?style=for-the-badge&logo=react)

Uma landing page moderna e responsiva para a Miluz, empresa especializada em soluções de recrutamento e seleção generalista para diferentes áreas do mercado.

## 🚀 Sobre o Projeto

A Miluz é uma empresa focada em conectar empresas com profissionais qualificados. Nossa landing page apresenta nossos serviços, diferenciais e facilita o contato direto com nossa equipe.

### ✨ Funcionalidades

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Integração WhatsApp**: Formulário de contato integrado com WhatsApp
- **Animações Suaves**: Transições e efeitos visuais modernos
- **Navegação Intuitiva**: Menu de navegação com rolagem suave
- **Formulário de Contato**: Com validação e envio direto para WhatsApp
- **Seções Informativas**: Apresentação completa dos serviços e diferenciais

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes React modernos
- **Lucide React** - Ícones vetoriais
- **React Hook Form** - Gerenciamento de formulários

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/lhkuklis/miluz-landpage.git
cd miluz-landpage
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

## 🏗️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção
npm run lint         # Executa linter
npm run type-check   # Verifica tipos TypeScript
```

## 📱 Seções da Landing Page

### 🏠 Seção Hero
- Título principal com destaque para "Recrutamento e Seleção"
- Botões de call-to-action (Fale conosco / Saiba mais)
- Animações de fundo e elementos flutuantes

### 🎯 Soluções de Talentos
- Apresentação dos diferenciais da empresa
- Cards com ícones e descrições
- Efeitos hover interativos

### 📊 Seção Sobre
- Informações sobre a empresa
- Estatísticas de sucesso
- Lista de benefícios

### 🔧 Seção de Serviços
- Recrutamento e Seleção
- Consultoria de RH
- Headhunting
- Processos otimizados

### 💬 Depoimentos
- Depoimentos de clientes
- Sistema de avaliação por estrelas
- Cards com efeitos visuais

### 🤝 Por que escolher
- Benefícios para empresas
- Benefícios para profissionais
- Processo de trabalho

### 📞 Seção de Contato
- Formulário de contato completo
- Integração com WhatsApp
- Informações de contato
- Links para redes sociais

## 🎨 Design System

### Cores Principais
- **Roxo Principal**: `#39175d`
- **Azul**: `#0072B1`
- **Verde**: `#00e6c3`
- **Branco**: `#FFFFFF`

### Tipografia
- **Fonte Principal**: Inter (sans-serif)
- **Tamanhos Responsivos**: Adaptáveis para mobile e desktop

## 📱 Responsividade

O projeto foi desenvolvido com foco total na responsividade:

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Layout flexível com CSS Grid e Flexbox
- **Touch Friendly**: Elementos otimizados para toque

## 🔧 Configuração de Desenvolvimento

### Estrutura de Pastas
```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   └── ...             # Componentes customizados
├── contexts/           # Contextos React
├── hooks/              # Custom hooks
├── lib/                # Utilitários
└── pages/              # Páginas da aplicação
```

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
VITE_API_URL=your_api_url_here
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte o repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Faça upload da pasta dist para GitHub Pages
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: [miluz.work](https://miluz.work)
- **Email**: contact@miluz.work
- **WhatsApp**: +55 11 96911 4510
- **LinkedIn**: [linkedin.com/company/miluzwork](https://www.linkedin.com/company/miluzwork)

---

Desenvolvido com ❤️ pela equipe Miluz
