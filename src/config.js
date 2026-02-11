// 后端 progress-image-server 的地址（与 vue2-vercel 配合使用）
// 生产：https://progress-image-server.vercel.app  本地开发可改为 http://localhost:3000
export const API_BASE =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE
    ? import.meta.env.VITE_API_BASE
    : 'https://progress-image-server.vercel.app'

export function getProgressImageUrl(params = {}) {
  const search = new URLSearchParams(params).toString()
  return `${API_BASE}/api/progress.png${search ? `?${search}` : ''}`
}
