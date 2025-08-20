# Digital Money Front

💰 Aplicação frontend moderna para sistema de dinheiro digital e transações financeiras.

## 📋 Descrição

**Digital Money Front** é uma interface web avançada para sistema de dinheiro digital, oferecendo uma experiência bancária moderna e intuitiva. A aplicação permite gestão de carteiras digitais, transferências, pagamentos e monitoramento de transações em tempo real, tudo com segurança e usabilidade de nível bancário.

## ✨ Principais Funcionalidades

### 💳 Gestão de Carteira Digital
- **Dashboard Financeiro**: Visão geral do saldo e movimentações
- **Múltiplas Moedas**: Suporte a diferentes moedas digitais
- **Histórico Completo**: Timeline detalhado de todas as transações
- **Extratos**: Relatórios financeiros personalizáveis

### 🔄 Transações
- **Transferências P2P**: Envio instantâneo entre usuários
- **Pagamentos QR Code**: Pagamentos via código QR
- **Agendamentos**: Transações programadas
- **Recorrências**: Pagamentos automáticos

### 🛡️ Segurança Avançada
- **Autenticação 2FA**: Duplo fator de autenticação
- **Biometria**: Login por impressão digital (PWA)
- **Criptografia**: Comunicação segura end-to-end
- **Audit Trail**: Rastreamento completo de ações

### 📊 Analytics e Relatórios
- **Gastos por Categoria**: Análise inteligente de despesas
- **Gráficos Interativos**: Visualização de dados financeiros
- **Metas Financeiras**: Controle de orçamento pessoal
- **Insights**: Recomendações baseadas em IA

## 🚀 Tecnologias Utilizadas

- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces reativas
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rápida
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática (recomendado)
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[React Query](https://tanstack.com/query)** - Gerenciamento de estado servidor
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos
- **[Chart.js](https://www.chartjs.org/)** - Gráficos interativos
- **[Socket.io](https://socket.io/)** - Comunicação em tempo real
- **[PWA](https://web.dev/progressive-web-apps/)** - Aplicação web progressiva

## 🔒 Segurança e Compliance

### Padrões de Segurança
- **PCI DSS**: Compliance para dados de cartão
- **ISO 27001**: Gestão de segurança da informação
- **LGPD**: Conformidade com Lei Geral de Proteção de Dados
- **Open Banking**: Padrões do sistema financeiro aberto

### Recursos de Proteção
- **CSP**: Content Security Policy
- **HTTPS**: Comunicação criptografada
- **Rate Limiting**: Proteção contra ataques
- **Session Management**: Gerenciamento seguro de sessões

## 📦 Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** ou **pnpm**

## 🛠️ Instalação e Configuração

### Setup Rápido

```bash
# 1. Clone o repositório
git clone https://github.com/feliciocavalcante/digital-money-front.git

# 2. Navegue até o diretório
cd digital-money-front

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.example .env.local

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

## ⚙️ Configuração do Ambiente

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# API Configuration
VITE_API_BASE_URL=https://api.digitalmoney.com
VITE_API_VERSION=v1
VITE_APP_NAME=Digital Money

# Environment
VITE_NODE_ENV=development

# Authentication
VITE_AUTH_DOMAIN=auth.digitalmoney.com
VITE_AUTH_CLIENT_ID=your-auth-client-id
VITE_AUTH_AUDIENCE=digitalmoney-api

# Payment Gateways
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_PAYPAL_CLIENT_ID=your-paypal-client-id

# Real-time Updates
VITE_WEBSOCKET_URL=wss://ws.digitalmoney.com
VITE_PUSHER_KEY=your-pusher-key
VITE_PUSHER_CLUSTER=us2

# Security
VITE_ENCRYPTION_KEY=your-encryption-key
VITE_CSP_NONCE=your-csp-nonce

# Analytics
VITE_GA_TRACKING_ID=GA-XXXXXXXXX
VITE_HOTJAR_ID=your-hotjar-id

# Feature Flags
VITE_ENABLE_2FA=true
VITE_ENABLE_BIOMETRIC=true
VITE_ENABLE_QR_PAYMENTS=true
VITE_ENABLE_CRYPTO=true
VITE_ENABLE_INVESTMENT=true

# Development
VITE_DEBUG_MODE=false
VITE_MOCK_API=false
```

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento com HMR
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Testes unitários
npm run test

# Testes E2E
npm run test:e2e

# Coverage de testes
npm run test:coverage

# Lint do código
npm run lint

# Formatação de código
npm run format

# Verificação de tipos
npm run type-check

# Análise de bundle
npm run analyze

# Auditoria de segurança
npm audit
```

## 🏗️ Estrutura do Projeto

```
digital-money-front/
├── public/                      # Arquivos estáticos
│   ├── icons/                  # Ícones PWA
│   ├── images/                 # Imagens públicas
│   └── manifest.json           # Manifesto PWA
├── src/                        # Código fonte
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                # Componentes base
│   │   ├── forms/             # Formulários financeiros
│   │   ├── charts/            # Gráficos e visualizações
│   │   ├── security/          # Componentes de segurança
│   │   └── layout/            # Layout e navegação
│   ├── pages/                 # Páginas da aplicação
│   │   ├── dashboard/         # Dashboard principal
│   │   ├── wallet/            # Gestão de carteira
│   │   ├── transactions/      # Transações
│   │   ├── payments/          # Pagamentos
│   │   ├── investments/       # Investimentos
│   │   ├── cards/             # Gestão de cartões
│   │   ├── settings/          # Configurações
│   │   └── auth/              # Autenticação
│   ├── hooks/                 # Custom hooks
│   │   ├── useAuth.js         # Hook de autenticação
│   │   ├── useWallet.js       # Hook da carteira
│   │   ├── useTransactions.js # Hook de transações
│   │   └── useRealTime.js     # Hook tempo real
│   ├── services/              # Serviços e APIs
│   │   ├── api.js             # Cliente API base
│   │   ├── auth.service.js    # Serviços de auth
│   │   ├── wallet.service.js  # Serviços da carteira
│   │   ├── payment.service.js # Serviços de pagamento
│   │   └── websocket.js       # Cliente WebSocket
│   ├── stores/                # Gerenciamento de estado
│   │   ├── authStore.js       # Estado de autenticação
│   │   ├── walletStore.js     # Estado da carteira
│   │   └── uiStore.js         # Estado da UI
│   ├── utils/                 # Utilitários
│   │   ├── currency.js        # Formatação de moeda
│   │   ├── validation.js      # Validações
│   │   ├── crypto.js          # Criptografia
│   │   └── constants.js       # Constantes
│   ├── types/                 # Definições TypeScript
│   ├── styles/                # Estilos globais
│   └── tests/                 # Testes
├── docs/                      # Documentação
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 💎 Componentes Principais

### Dashboard Financeiro

```jsx
import { useState, useEffect } from 'react'
import { useWallet } from '@/hooks/useWallet'
import { BalanceCard } from '@/components/wallet/BalanceCard'
import { TransactionHistory } from '@/components/transactions/TransactionHistory'
import { QuickActions } from '@/components/ui/QuickActions'

function Dashboard() {
  const { balance, transactions, isLoading } = useWallet()

  return (
    <div className="dashboard-container">
      <BalanceCard balance={balance} loading={isLoading} />
      <QuickActions />
      <TransactionHistory transactions={transactions} />
    </div>
  )
}
```

### Sistema de Pagamentos

```jsx
import { useForm } from 'react-hook-form'
import { usePayment } from '@/hooks/usePayment'
import { QRScanner } from '@/components/payments/QRScanner'
import { PaymentForm } from '@/components/forms/PaymentForm'

function PaymentPage() {
  const { processPayment, isProcessing } = usePayment()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    await processPayment(data)
  }

  return (
    <div className="payment-container">
      <QRScanner onScan={handleQRScan} />
      <PaymentForm 
        onSubmit={handleSubmit(onSubmit)}
        loading={isProcessing}
        errors={errors}
      />
    </div>
  )
}
```

## 🔐 Autenticação e Segurança

### Sistema de Autenticação

```jsx
// hooks/useAuth.js
import { useState, useEffect } from 'react'
import { authService } from '@/services/auth.service'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)

  const login = async (credentials) => {
    const response = await authService.login(credentials)
    
    if (response.requires2FA) {
      return { requires2FA: true }
    }
    
    setUser(response.user)
    return response
  }

  const verify2FA = async (code) => {
    const response = await authService.verify2FA(code)
    setUser(response.user)
    return response
  }

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  return {
    user,
    isLoading,
    is2FAEnabled,
    login,
    verify2FA,
    logout
  }
}
```

### Proteção de Rotas

```jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

function ProtectedRoute({ children, requiresAuth = true }) {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (requiresAuth && !user) {
    return <Navigate to="/login" replace />
  }

  return children
}
```

## 📊 Gráficos e Analytics

### Configuração de Gráficos

```jsx
import { Line, Doughnut, Bar } from 'react-chartjs-2'
import { useTransactions } from '@/hooks/useTransactions'

function FinancialCharts() {
  const { analytics } = useTransactions()

  const expenseData = {
    labels: analytics.categories,
    datasets: [{
      label: 'Gastos por Categoria',
      data: analytics.amounts,
      backgroundColor: [
        '#FF6384', '#36A2EB', '#FFCE56',
        '#4BC0C0', '#9966FF', '#FF9F40'
      ]
    }]
  }

  return (
    <div className="charts-grid">
      <Line data={analytics.balanceHistory} />
      <Doughnut data={expenseData} />
      <Bar data={analytics.monthlySpending} />
    </div>
  )
}
```

## 🌐 Integração com APIs

### Cliente API Configurado

```javascript
// services/api.js
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Interceptor para autenticação
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Interceptor para refresh token
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Implementar refresh token
      const refreshToken = localStorage.getItem('refreshToken')
      if (refreshToken) {
        try {
          const response = await authService.refreshToken(refreshToken)
          localStorage.setItem('accessToken', response.accessToken)
          // Retry original request
          return apiClient.request(error.config)
        } catch (refreshError) {
          // Redirect to login
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  }
)

export default apiClient
```

## 📱 PWA e Recursos Mobile

### Service Worker

```javascript
// public/sw.js
const CACHE_NAME = 'digital-money-v1'
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/offline.html'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
      })
  )
})
```

### Notificações Push

```javascript
// utils/notifications.js
export class NotificationService {
  static async requestPermission() {
    const permission = await Notification.requestPermission()
    return permission === 'granted'
  }

  static async showTransactionNotification(transaction) {
    if ('serviceWorker' in navigator && 'Notification' in window) {
      const registration = await navigator.serviceWorker.ready
      
      registration.showNotification('Nova Transação', {
        body: `${transaction.type}: ${transaction.amount}`,
        icon: '/icons/icon-192.png',
        badge: '/icons/badge-72.png',
        tag: 'transaction',
        requireInteraction: true,
        actions: [
          {
            action: 'view',
            title: 'Ver Detalhes',
            icon: '/icons/view.png'
          }
        ]
      })
    }
  }
}
```

## 🧪 Testes

### Configuração de Testes

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.js'],
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
})
```

### Exemplo de Teste

```javascript
// src/tests/components/BalanceCard.test.jsx
import { render, screen } from '@testing-library/react'
import { BalanceCard } from '@/components/wallet/BalanceCard'

describe('BalanceCard', () => {
  it('should display formatted balance', () => {
    render(<BalanceCard balance={1234.56} />)
    
    expect(screen.getByText('R$ 1.234,56')).toBeInTheDocument()
  })

  it('should show loading state', () => {
    render(<BalanceCard loading={true} />)
    
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
```

## 🚀 Deploy e Produção

### Build Otimizada

```bash
# Build para produção
npm run build

# Análise do bundle
npm run analyze

# Preview local
npm run preview
```

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    depends_on:
      - api
      - redis

  api:
    image: digital-money-api:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/digitalmoney

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: digitalmoney
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 📊 Monitoramento e Analytics

### Error Tracking

```javascript
// utils/errorTracking.js
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_NODE_ENV,
  tracesSampleRate: 1.0,
})

export const captureException = (error, context) => {
  Sentry.captureException(error, {
    tags: { section: 'financial' },
    extra: context
  })
}
```

### Performance Monitoring

```javascript
// utils/performance.js
export const trackUserAction = (action, data) => {
  if (window.gtag) {
    window.gtag('event', action, {
      custom_parameter: data,
      event_category: 'financial_action'
    })
  }
}
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

### Padrões de Código

```bash
# Verificações obrigatórias antes do commit
npm run lint           # ESLint
npm run type-check     # TypeScript
npm run test           # Testes unitários
npm run test:e2e       # Testes E2E
npm audit              # Auditoria de segurança
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Felício Cavalcante**
- GitHub: [@feliciocavalcante](https://github.com/feliciocavalcante)

## 🆘 Suporte

1. **Issues**: [GitHub Issues](https://github.com/feliciocavalcante/digital-money-front/issues)
2. **Documentação**: [Wiki do Projeto](https://github.com/feliciocavalcante/digital-money-front/wiki)
3. **Security**: Para questões de segurança, envie email para security@digitalmoney.com

## 🗺️ Roadmap

### 🎯 Próximas Funcionalidades

- [ ] **Criptomoedas**: Suporte a Bitcoin, Ethereum e outras
- [ ] **Open Banking**: Integração com bancos tradicionais
- [ ] **IA Financial**: Assistente financeiro inteligente
- [ ] **Investimentos**: Plataforma de investimentos integrada
- [ ] **Cartões Virtuais**: Geração de cartões temporários
- [ ] **Split Bills**: Divisão de contas entre usuários

### 🔮 Visão de Longo Prazo

- **Blockchain Integration**: DeFi e smart contracts
- **Global Expansion**: Suporte multi-país e multi-moeda
- **Marketplace**: Plataforma de pagamentos para e-commerce
- **Corporate Banking**: Soluções para empresas
- **Robo-Advisor**: Investimentos automatizados

---

💰 **Construindo o futuro das finanças digitais!**

🚀 **Pronto para revolucionar seus pagamentos? Comece agora!**
