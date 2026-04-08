<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 个人中心服务项目
const services = [
  {
    id: 1,
    name: '我的资料',
    description: '查看和编辑个人信息',
    path: '/profile/info'
  },
  {
    id: 2,
    name: '我的订单',
    description: '查看所有服务订单记录',
    path: '/profile/orders'
  },
  {
    id: 3,
    name: '设置',
    description: '账号和隐私设置',
    path: '/profile/settings'
  },
  {
    id: 4,
    name: '登录',
    description: '登录您的账号',
    path: '/profile/login'
  },
  {
    id: 5,
    name: '注册',
    description: '创建新账号',
    path: '/profile/register'
  }
]
</script>

<template>
  <div class="profile-page">
    <!-- 顶部标题区域 -->
    <header class="hero-section">
      <div class="hero-content">
        <nav class="breadcrumb-nav">
          <span class="breadcrumb-item" @click="router.push('/')">首页</span>
          <span class="separator">/</span>
          <span class="breadcrumb-current">个人中心</span>
        </nav>
        
        <h1 class="hero-title">个人中心</h1>
        <p class="hero-subtitle">管理您的账号和服务</p>
      </div>
    </header>

    <!-- 功能卡片区域 -->
    <section class="services-section">
      <div class="container">
        <div class="services-grid">
          <article 
            v-for="service in services" 
            :key="service.id"
            class="service-card"
            @click="router.push(service.path)"
          >
            <h3 class="card-title">{{ service.name }}</h3>
            <p class="card-description">{{ service.description }}</p>
            <div class="card-action">
              <span class="action-text">进入管理</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l6 4-6 4V4z" fill="currentColor"/>
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 底部区域 -->
    <footer class="profile-footer">
      <p class="footer-text">如有账号相关问题，请联系客服团队获取帮助</p>
      <button class="btn btn-primary" @click="router.push('/contact')">联系客服</button>
    </footer>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #fafafa;
}

/* 顶部区域 */
.hero-section {
  padding: 100px 24px 80px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);
  border-bottom: 1px solid #e8e8e8;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}

.breadcrumb-item {
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
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

.hero-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 20px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 0;
}

/* 卡片列表 */
.services-section {
  padding: 80px 24px;
  background: #fafafa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.service-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 32px 28px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
  border-color: #d0d0d0;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.card-description {
  font-size: 15px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.card-action {
  display: flex;
  align-items: center;
  gap: 6px;
}

.action-text {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
}

/* 底部 */
.profile-footer {
  padding: 60px 24px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
  text-align: center;
}

.footer-text {
  font-size: 15px;
  color: #666666;
  margin-bottom: 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: #1a1a1a;
  color: #ffffff;
}

.btn-primary:hover {
  background: #333333;
  transform: translateY(-1px);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 24px;
  }

  .hero-title {
    font-size: 32px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>