# 管理后台

一个使用 Next.js 15、NextUI 和 Tailwind CSS 构建的现代化响应式管理后台。

## 功能特点

- 🚀 基于 Next.js 15 App Router 构建
- 💅 使用 NextUI 和 Tailwind CSS 设计
- 🔒 集成 NextAuth.js 身份认证
- 🌙 支持暗色/亮色主题切换
- 📱 完全响应式设计
- 🎯 清晰直观的界面
- 🔍 简便的侧边栏导航
- 📊 数据可视化支持
- 🛡️ TypeScript 类型支持
- 🔄 使用 Prisma 作为 ORM

## 技术栈

- **框架**: [Next.js 15](https://nextjs.org/)
- **UI 组件**: [NextUI](https://nextui.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **认证**: [NextAuth.js](https://next-auth.js.org/)
- **数据库 ORM**: [Prisma](https://www.prisma.io/)
- **开发语言**: [TypeScript](https://www.typescriptlang.org/)

## 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn
- Git

### 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/dLight1996/dashboard.git
   ```

2. 安装依赖：
   ```bash
   cd dashboard
   npm install
   # 或
   yarn install
   ```

3. 配置环境变量：
   在根目录创建 `.env` 文件并添加以下内容：
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. 初始化数据库：
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. 启动开发服务器：
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

6. 在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

```
dashboard/
├── prisma/                # 数据库模型和迁移
├── public/               # 静态资源文件
├── src/
│   ├── app/             # Next.js 页面路由
│   ├── components/      # 可复用组件
│   ├── config/          # 配置文件
│   ├── lib/             # 工具函数和库
│   └── types/           # TypeScript 类型定义
├── .env                 # 环境变量
└── package.json         # 项目依赖
```

## 开发说明

- **路由**: 使用 Next.js 15 App Router 基于文件系统的路由
- **状态管理**: 使用 React 内置的 hooks 进行本地状态管理
- **数据库**: 使用 Prisma ORM，默认 SQLite（可切换至 PostgreSQL、MySQL 等）
- **认证**: 使用 NextAuth.js，支持自定义认证提供者
- **样式**: 结合 NextUI 组件使用 Tailwind CSS

## 贡献指南

欢迎提交 Pull Request 来改进项目！

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。
