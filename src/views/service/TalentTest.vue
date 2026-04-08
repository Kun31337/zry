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
    icon: '🤚',
    path: '/service/talent-test/palm-test'
  },
  {
    id: 2,
    name: '指纹测试',
    subtitle: '探索指纹背后的性格密码',
    icon: '👆',
    path: '/service/talent-test/fingerprint-test'
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
      <span class="breadcrumb-current">天赋测试</span>
    </nav>
    
    <h1 class="title">⭐ 天赋测试</h1>
    <p class="description">选择天赋测评工具，发现你与生俱来的潜能</p>

    <div class="talents-grid">
      <RouterLink 
        v-for="talent in talents" 
        :key="talent.id"
        :to="talent.path"
        class="talent-card"
      >
        <div class="icon">{{ talent.icon }}</div>
        <h3>{{ talent.name }}</h3>
        <p>{{ talent.subtitle }}</p>
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

.talents-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.talent-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  cursor: pointer;
}

.talent-card:hover {
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
