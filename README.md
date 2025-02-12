# CraftCV - Criador de Currículos Interativo

[![Next.js](https://img.shields.io/badge/Next.js-15-blue)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## Sobre o Projeto
O **CraftCV** se propõe a ser um criador de currículos interativo, inspirado no poderoso projeto open-source RxResume. O objetivo é fornecer uma plataforma intuitiva e eficiente para criação, personalização e exportação de currículos profissionais.

## Funcionalidades Principais
- **Autenticação**: Login e registro via Google ou GitHub utilizando `Auth.js`.
- **Edição em Tempo Real**: Ferramenta interativa para criar e personalizar currículos.
- **Banco de Dados**: Armazena currículos de usuários com `Drizzle ORM`.
- **IA para Otimização de Conteúdo**: Sugestões automáticas para descrição de experiências profissionais.
- **Planos Premium**: Monetização com funcionalidades avançadas via `Stripe`.
- **Geração de PDF**: Conversão do currículo para PDF utilizando `Puppeteer`.

## Tecnologias Utilizadas
- **[Next.js 15](https://nextjs.org/)** - Framework React para aplicações web modernas.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript que adiciona tipagem estática.
- **[Auth.js (NextAuth)](https://authjs.dev/)** - Solução completa para autenticação de usuários.
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes de UI reutilizáveis e acessíveis.
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de estilização utilitário para um design responsivo.
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno e eficiente para manipulação de dados.
- **[Puppeteer](https://pptr.dev/)** - Biblioteca para automação de navegadores e geração de PDFs.
- **[Stripe](https://stripe.com/)** - Integração para pagamentos e funcionalidades premium.
- **[TanStack Query](https://tanstack.com/query/latest)** - Gerenciamento de estados assíncronos.
- **[React Hook Form](https://react-hook-form.com/)** - Ferramenta para gerenciar formulários.
- **[OpenAI API](https://openai.com/)** - Inteligência artificial para geração de conteúdo.

## Instalação e Uso
1. Clone o repositório:
   ```sh
   git clone https://github.com/gafanhotoalexandre/craft-cv.git
   cd craft-cv
   ```
2. Instale as dependências:
   ```sh
   pnpm install
   ```
3. Configure as variáveis de ambiente:
   ```sh
   cp .env.example .env.local
   # Edite o arquivo .env.local com suas credenciais
   ```
4. Execute o projeto em ambiente de desenvolvimento:
   ```sh
   pnpm dev
   ```
5. Para build e deploy:
   ```sh
   pnpm build && pnpm start
   ```

## Contribuição
Sinta-se à vontade para abrir issues e enviar PRs. Qualquer contribuição será bem-vinda!

## Licença
Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


