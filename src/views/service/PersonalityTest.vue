<script setup lang="ts">
import { RouterLink } from 'vue-router'

const breadcrumbs = [
  { name: '首页', path: '/' },
  { name: '服务', path: '/service' },
  { name: '性格测试', path: '/service/personality-test' }
]

const tests = [
  {
    id: 1,
    name: 'MBTI 职业性格测试',
    subtitle: '了解你的性格特征与职业匹配',
    path: '/service/personality-test/mbti'
  },
  {
    id: 2,
    name: '大五人格测试',
    subtitle: '探索你的五大人格特质',
    path: '/service/personality-test/big-five'
  },
  {
    id: 3,
    name: 'DISC 性格测试',
    subtitle: '识别你的行为风格类型',
    path: '/service/personality-test/disc'
  },
  {
    id: 4,
    name: '九型人格测试',
    subtitle: '发现你的基本人格类型',
    path: '/service/personality-test/enneagram'
  }
]
</script>

<template>
  <div class="personality-test-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">服务</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">性格测试</span>
    </nav>
    
    <!-- 页面头部 -->
    <header class="page-header">
      <h1 class="page-title">性格测试</h1>
      <p class="page-subtitle">通过科学的测评，深入了解自己的性格特点和行为模式。</p>
    </header>

    <!-- 内容区域 -->
    <section class="tests-grid">
      <RouterLink 
        v-for="test in tests" 
        :key="test.id"
        :to="test.path"
        class="test-card"
      >
        <div class="test-number">{{ String(test.id).padStart(2, '0') }}</div>
        <h3 class="test-title">{{ test.name }}</h3>
        <p class="test-subtitle">{{ test.subtitle }}</p>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.personality-test-page {
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
.tests-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

/* 卡片样式 */
.test-card {
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

.test-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

.test-number {
  font-size: 14px;
  font-weight: 600;
  color: #999999;
}

.test-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.test-subtitle {
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .personality-test-page {
    padding: 60px 24px;
  }

  .page-title {
    font-size: 32px;
  }

  .tests-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .test-card {
    padding: 30px 20px;
  }
}
</style>