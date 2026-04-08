<script setup lang="ts">
import { RouterLink } from 'vue-router'

const title = '过程管理篇'
const subtitle = '评估学习动力与计划性'
</script>

<template>
  <div class="page-container">
    <!-- 面包屑导航 - 与指纹测试页面一致 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">🏠 首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">⚙️ 服务</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service/study-planning" class="breadcrumb-item">📚 学业规划</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">{{ title }}</span>
    </nav>

    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
    <div class="placeholder">⏱️ 内容加载中...</div>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%);
  min-height: 100vh;
}

/* 面包屑导航 - 与指纹测试页面一致 */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.breadcrumb-item {
  color: #666;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #42b883;
}

.separator {
  color: #ccc;
  font-size: 14px;
}

.breadcrumb-current {
  color: #42b883;
  font-weight: 600;
  font-size: 14px;
}

.title {
  font-size: 32px;
  color: #35495e;
  margin-bottom: 15px;
  text-align: center;
}

.subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 50px;
  text-align: center;
}

.placeholder {
  text-align: center;
  display: inline-block;
  width: 100%;
  padding: 60px 40px;
  background: white;
  border-radius: 12px;
  color: #999;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* 响应式 */
@media (max-width: 768px) {
  .page-container {
    padding: 60px 15px 30px;
  }

  .title {
    font-size: 26px;
  }

  .placeholder {
    padding: 40px 20px;
    font-size: 16px;
  }
}
</style>