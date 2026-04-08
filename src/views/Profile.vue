<script setup lang="ts">
import { RouterLink } from 'vue-router'

// 个人中心的服务项目
const services = [
  {
    id: 1,
    name: '我的资料',
    icon: '👤',
    description: '查看和编辑个人信息',
    path: '/profile/info'
  },
  {
    id: 2,
    name: '我的订单',
    icon: '📦',
    description: '查看所有服务订单记录',
    path: '/profile/orders'
  },
  {
    id: 3,
    name: '收藏夹',
    icon: '❤️',
    description: '收藏的测评和服务',
    path: '/profile/favorites'
  },
  {
    id: 4,
    name: '设置',
    icon: '⚙️',
    description: '账号和隐私设置',
    path: '/profile/settings'
  }
]
</script>

<template>
  <div class="page-container">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <RouterLink to="/" class="breadcrumb-item">🏠 首页</RouterLink>
      <span class="separator">/</span>
      <span class="breadcrumb-current">我的</span>
    </nav>
    
    <h1 class="title">👤 个人中心</h1>
    <p class="subtitle">管理您的账号和服务</p>

    <div class="services-grid">
      <RouterLink 
        v-for="service in services" 
        :key="service.id"
        :to="service.path"
        class="service-card"
      >
        <div class="icon">{{ service.icon }}</div>
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
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
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 40px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.service-card {
  background: #fff;
  border-radius: 12px;
  padding: 30px 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  cursor: pointer;
}

.service-card:hover {
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