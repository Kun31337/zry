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
    path: '/service/study-planning/self-awareness'
  },
  {
    id: 2,
    name: '过程管理篇',
    subtitle: '评估学习动力与计划性',
    path: '/service/study-planning/process-management'
  },
  {
    id: 3,
    name: '外部探索与决策篇',
    subtitle: '收集信息与匹配',
    path: '/service/study-planning/external-exploration'
  },
  {
    id: 4,
    name: '专业测评工具推荐',
    subtitle: '科学测评辅助决策',
    path: '/service/study-planning/tools-recommendation'
  }
]
</script>

<template>
  <div class="study-planning-page">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">首页</RouterLink>
      <span class="separator">/</span>
      <RouterLink to="/service" class="breadcrumb-item">服务</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">学业规划</span>
    </nav>
    
    <!-- 页面头部 -->
    <header class="page-header">
      <h1 class="page-title">学业规划</h1>
      <p class="page-subtitle">全方位了解你的学习与未来发展方向</p>
    </header>

    <!-- 内容区域 -->
    <section class="sections-grid">
      <RouterLink 
        v-for="section in sections" 
        :key="section.id"
        :to="section.path"
        class="section-card"
      >
        <div class="section-number">{{ String(section.id).padStart(2, '0') }}</div>
        <h3 class="section-title">{{ section.name }}</h3>
        <p class="section-subtitle">{{ section.subtitle }}</p>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.study-planning-page {
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
.sections-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

/* 卡片样式 */
.section-card {
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

.section-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

.section-number {
  font-size: 14px;
  font-weight: 600;
  color: #999999;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.section-subtitle {
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .study-planning-page {
    padding: 60px 24px;
  }

  .page-title {
    font-size: 32px;
  }

  .sections-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-card {
    padding: 30px 20px;
  }
}
</style>