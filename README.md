# Vue 2 + Vercel 项目

基于 Vue 2 + Vite + Vue Router 的示例项目，可直接部署到 Vercel。

## 本地开发

```bash
npm install
npm run dev
```

浏览器访问 http://localhost:5173

## 构建

```bash
npm run build
```

产物在 `dist/` 目录。

## 部署到 Vercel

1. 将项目推送到 Git（GitHub / GitLab / Bitbucket）。
2. 在 [Vercel](https://vercel.com) 中 **Import** 该仓库。
3. 若项目在仓库子目录，在 Vercel 项目设置里设置 **Root Directory** 为该项目目录（如 `vue2-vercel`）。
4. 构建配置（一般可自动识别，无需改）：
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. 部署即可。

`vercel.json` 中已配置 `rewrites`，所有路径会回退到 `index.html`，保证 Vue Router 的 history 模式在 Vercel 上正常工作。

## 若子路径部署

若站点不在根路径（例如 `https://xxx.vercel.app/my-app/`），需在 `vite.config.js` 中设置：

```js
base: '/my-app/',
```

并确保 Vue Router 的 `base` 与之一致（在 `src/router/index.js` 里已使用 `base: '/'`，改为 `/my-app/` 即可）。
