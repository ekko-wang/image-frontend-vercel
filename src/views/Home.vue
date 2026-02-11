<template>
  <div class="page">
    <h1>首页</h1>
    <p>欢迎使用 Vue 2 项目，已配置可在 Vercel 上部署。</p>
    <p class="badge">✨ 本次更新由自动部署发布</p>
    <button class="btn-day" @click="openDayImage">打开 Day 模式进度图</button>
    <button class="btn-range" @click="openRangeImage">打开起止日期模式（测试 2026 全年）</button>
  </div>
</template>

<script>
import { getProgressImageUrl } from '../config'

export default {
  name: 'Home',
  methods: {
    openDayImage() {
      const url = getProgressImageUrl({ viewType: 'day' })
      window.open(url, '_blank', 'noopener,noreferrer')
    },
    openRangeImage() {
      const url = getProgressImageUrl({
        viewType: 'range',
        startDate: '20260101',
        endDate: '20261231',
      })
      window.open(url, '_blank', 'noopener,noreferrer')
    },
  },
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
.btn-day {
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-day:hover {
  background: #359268;
}
.btn-range {
  margin-top: 0.75rem;
  margin-left: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-range:hover {
  background: #5568d3;
}
</style>
