<script setup lang="ts">
import { RouterLink } from 'vue-router'

const breadcrumbs = [
  { name: '首页', path: '/' },
  { name: '服务', path: '/service' },
  { name: '学业规划', path: '/service/study-planning' }
]

const sections = [
  {
    id: 1,
    name: '自我认知篇',
    subtitle: '探索兴趣、性格与能力',
    icon: '🧭',
    path: '/service/study-planning/self-awareness'
  },
  {
    id: 2,
    name: '过程管理篇',
    subtitle: '评估学习动力与计划性',
    icon: '⏱️',
    path: '/service/study-planning/process-management'
  },
  {
    id: 3,
    name: '外部探索与决策篇',
    subtitle: '收集信息与匹配',
    icon: '🔍',
    path: '/service/study-planning/external-exploration'
  },
  {
    id: 4,
    name: '专业测评工具推荐',
    subtitle: '科学测评辅助决策',
    icon: '🛠️',
    path: '/service/study-planning/tools-recommendation'
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
      <span class="breadcrumb-current">学业规划</span>
    </nav>
    
    <h1 class="title">📚 学业规划</h1>
    <p class="description">全方位了解你的学习与未来发展方向</p>

    <div class="sections-grid">
      <RouterLink 
        v-for="section in sections" 
        :key="section.id"
        :to="section.path"
        class="section-card"
      >
        <div class="icon">{{ section.icon }}</div>
        <h3>{{ section.name }}</h3>
        <p>{{ section.subtitle }}</p>
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

.sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.section-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  cursor: pointer;
}

.section-card:hover {
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