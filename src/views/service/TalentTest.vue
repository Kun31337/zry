<script setup lang="ts">
import { RouterLink } from 'vue-router'

const breadcrumbs = [
  { name: '首页', path: '/' },
  { name: '服务', path: '/service' },
  { name: '天赋测试', path: '/service/talent-test' }
]

const talents = [
  {
    id: 1,
    name: '掌纹测试',
    subtitle: '解读掌纹中的天赋秘密',
    path: '/service/talent-test/palm-test'
  },
  {
    id: 2,
    name: '指纹测试',
    subtitle: '探索指纹背后的性格密码',
    path: '/service/talent-test/fingerprint-test'
  }
]
</script>

<template>
  <div class="talent-test-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">服务</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">天赋测试</span>
    </nav>
    
    <!-- 页面头部 -->
    <header class="page-header">
      <h1 class="page-title">天赋测试</h1>
      <p class="page-subtitle">选择天赋测评工具，发现你与生俱来的潜能</p>
    </header>

    <!-- 内容区域 -->
    <section class="talents-grid">
      <RouterLink 
        v-for="talent in talents" 
        :key="talent.id"
        :to="talent.path"
        class="talent-card"
      >
        <div class="talent-number">{{ String(talent.id).padStart(2, '0') }}</div>
        <h3 class="talent-title">{{ talent.name }}</h3>
        <p class="talent-subtitle">{{ talent.subtitle }}</p>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.talent-test-page {
  min-height: 100vh;
  background: #ffffff;
  padding: 80px 24px;
}

/* 面包屑导航 */
.breadcrumb-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 40px;
}

.breadcrumb-item {
  color: #666;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb-item:hover {
  color: #1a1a1a;
}

.separator {
  color: #ccc;
  font-size: 14px;
}

.breadcrumb-current {
  color: #1a1a1a;
  font-weight: 600;
  font-size: 14px;
}

/* 页面头部 */
.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.page-subtitle {
  font-size: 18px;
  color: #666666;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* 内容网格 */
.talents-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

/* 卡片样式 */
.talent-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 40px 30px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e8e8e8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.talent-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

.talent-number {
  font-size: 14px;
  font-weight: 600;
  color: #999999;
}

.talent-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.talent-subtitle {
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .talent-test-page {
    padding: 60px 24px;
  }

  .page-title {
    font-size: 32px;
  }

  .talents-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .talent-card {
    padding: 30px 20px;
  }
}
</style>