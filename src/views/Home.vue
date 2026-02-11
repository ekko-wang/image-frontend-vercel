<template>
  <div class="page">
    <h1>首页</h1>
    <p>欢迎使用 Vue 2 项目，已配置可在 Vercel 上部署。</p>
    <p class="badge">✨ 本次更新由自动部署发布</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.page {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
p {
  color: #666;
  line-height: 1.6;
}
.badge {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 6px;
  font-size: 0.9rem;
}
</style>
