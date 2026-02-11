<template>
  <div class="page">
    <h1>关于</h1>
    <p>这是一个基于 Vue 2 + Vite 的示例项目，部署于 Vercel。</p>
    <p class="badge">🚀 推送代码后 Vercel 会自动重新部署</p>
  </div>
</template>

<script>
export default {
  name: 'About',
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
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  color: #fff;
  border-radius: 6px;
  font-size: 0.9rem;
}
</style>
