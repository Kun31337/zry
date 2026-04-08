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
    icon: '📋',
    path: '/service/personality-test/mbti'
  },
  {
    id: 2,
    name: '大五人格测试',
    subtitle: '探索你的五大人格特质',
    icon: '🧠',
    path: '/service/personality-test/big-five'
  },
  {
    id: 3,
    name: 'DISC 性格测试',
    subtitle: '识别你的行为风格类型',
    icon: '⚡',
    path: '/service/personality-test/disc'
  },
  {
    id: 4,
    name: '九型人格测试',
    subtitle: '发现你的基本人格类型',
    icon: '🔮',
    path: '/service/personality-test/enneagram'
  }
]
</script>

<template>
  <div class="page-container">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">🏠 首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">⚙️ 服务</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">性格测试</span>
    </nav>
    
    <h1 class="title">💭 性格测试</h1>
    <p class="description">通过科学的测评，深入了解自己的性格特点和行为模式。</p>

    <div class="tests-grid">
      <RouterLink 
        v-for="test in tests" 
        :key="test.id"
        :to="test.path"
        class="test-card"
      >
        <div class="icon">{{ test.icon }}</div>
        <h3>{{ test.name }}</h3>
        <p>{{ test.subtitle }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  text-align: center;
  padding: 90px 20px;
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
}

.description {
  color: #666;
  font-size: 16px;
  margin-bottom: 50px;
}

.tests-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.test-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  cursor: pointer;
}

.test-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.icon {
  font-size: 48px;
  margin-bottom: 15px;
}

h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 8px;
}

p {
  color: #999;
  font-size: 14px;
}
</style>