# 🚀 RUMON - Landing Page Futurística

**RUMON - Repúblicas Unidas JM** | Vem com a gente para o futuro

Uma landing page cyber futurística criada para a Associação das Repúblicas Unidas Monlevadenses, com tema holográfico, efeitos 3D e experiência imersiva.

## ✨ Características Futurísticas

- **🌐 Tema Cyber Holográfico**: Elementos holográficos com tons verdes e cyan
- **🎮 Efeitos Sonoros**: Interações com feedback auditivo
- **🖱️ Cursor Personalizado**: Cursor cyber com efeitos de grid
- **🏗️ Elementos 3D**: Hologramas, prédios futuristas e partículas cyber
- **⚡ Animações Avançadas**: Efeitos de glitch, scan lines e transições 3D
- **🔮 Interface Holográfica**: Botões e formulários com efeitos de holograma
- **📱 Responsivo Total**: Adaptado para todos os dispositivos

## 🎨 Identidade Visual

### Paleta Cyber
```css
--cyber-green: #00ff88      /* Verde neon principal */
--cyber-green-dark: #00cc6a /* Verde escuro */
--cyber-blue: #00d4ff       /* Azul cyan */
--metallic: #8b949e         /* Cinza metálico */
--metallic-light: #c0c0c0   /* Metálico claro */
```

### Efeitos Especiais
- **Hologramas**: Elementos flutuantes com scan lines
- **Glitch**: Efeito de distorção nos textos principais
- **Metallic**: Superfícies com brilho metálico animado
- **Scan Lines**: Linhas de varredura em elementos específicos

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Framer Motion** - Animações e efeitos 3D
- **Lucide React** - Ícones cyber modernos

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rumon/landing-futuristic.git
   cd landing-futuristic
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a experiência**
   Abra [http://localhost:3000](http://localhost:3000) e mergulhe no futuro!

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css        # Estilos cyber futurísticos
│   ├── layout.tsx         # Layout principal da RUMON
│   └── page.tsx           # Página inicial
├── components/
│   ├── 3D/                # Elementos holográficos
│   │   └── FloatingElements.tsx
│   ├── Animations/        # Efeitos especiais
│   │   ├── CustomCursor.tsx
│   │   └── ScrollProgressBar.tsx
│   ├── Layout/            # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── Sections/          # Seções da landing page
│       ├── HeroSection.tsx
│       └── (outras seções...)
└── hooks/                 # Hooks personalizados
    ├── useWindowSize.ts
    └── useMousePosition.ts
```

## 🎯 Seções da Landing Page

### 1. **Hero Section - "VEM COM A GENTE PARA O FUTURO"**
- Efeito de digitação holográfico
- Elementos 3D flutuantes (hologramas de prédios, usuários, etc.)
- Partículas cyber animadas
- CTAs com efeitos de holograma

### 2. **Sobre a RUMON**
- Informações sobre a associação
- Cards holográficos interativos
- Estatísticas animadas

### 3. **Tour Virtual das Repúblicas**
- Experiência imersiva 3D
- Navegação interativa
- Efeitos sonoros

### 4. **Contato Futurístico**
- Formulário com campos holográficos
- Mapa cyber das repúblicas
- Informações de contato animadas

## 🛠️ Customização

### Cores Cyber
```css
:root {
  --cyber-green: #00ff88;
  --cyber-blue: #00d4ff;
  --metallic: #8b949e;
}
```

### Efeitos Holográficos
```tsx
// Texto holográfico
<div className="holo-text">RUMON</div>

// Botão holográfico
<button className="holo-button">CONECTAR</button>

// Efeito glitch
<div className="glitch" data-text="FUTURO">FUTURO</div>
```

### Elementos Flutuantes
Customize em `src/components/3D/FloatingElements.tsx`:
```tsx
const cyberIcons = [Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond];
```

## 📱 Responsividade Cyber

- **Mobile**: Interface adaptada com efeitos otimizados
- **Tablet**: Experiência intermediária
- **Desktop**: Experiência completa com todos os efeitos

## ⚡ Performance Futurística

- **Lazy Loading**: Elementos 3D carregados dinamicamente
- **Otimização CSS**: Animações com GPU acceleration
- **Deterministic Animations**: Sem hydration mismatch
- **Bundle Otimizado**: Sem dependências desnecessárias

## 🎮 Interações Especiais

### Cursor Cyber
- Efeito de grid ao fazer hover
- Mudança de forma baseada no elemento
- Trail holográfico

### Efeitos Sonoros
- Hover em elementos
- Cliques em botões
- Transições de seção

### Animações 3D
- Rotação de hologramas
- Partículas cyber
- Scan lines animadas

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🎯 Público-Alvo

**Estudantes Universitários** que buscam:
- Moradia moderna e conectada
- Equilíbrio entre vida social e estudos
- Experiência tecnológica inovadora
- Ambiente futurístico e inspirador

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/CyberFeature`)
3. Commit suas mudanças (`git commit -m 'Add some CyberFeature'`)
4. Push para a branch (`git push origin feature/CyberFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Créditos

Desenvolvido pela **RUMON Tech Division** com tecnologia de ponta para conectar estudantes ao futuro da moradia universitária.

## 📞 Suporte

- **Email**: tech@rumon.com.br
- **Discord**: RUMON Community
- **GitHub**: [Issues](https://github.com/rumon/landing-futuristic/issues)

---

**VEM COM A GENTE PARA O FUTURO** 🚀✨

Desenvolvido com ❤️ e tecnologia futurística pela equipe RUMON