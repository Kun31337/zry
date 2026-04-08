<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoggedIn = ref(false)

// 模拟用户资料数据
const userInfo = {
  name: '张三',
  email: 'zhangsan@example.com',
  phone: '138****8888',
  avatar: '',
  department: '产品研发部',
  position: '产品经理',
  joinDate: '2024-01-15'
}

onMounted(() => {
  // 检查登录状态（模拟）
  const loggedIn = localStorage.getItem('isLoggedIn')
  isLoggedIn.value = loggedIn === 'true'
})
</script>

<template>
  <div class="profile-sub-page">
    <!-- 未登录提示 -->
    <div v-if="!isLoggedIn" class="login-required">
      <div class="login-prompt">
        <div class="prompt-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
          </svg>
        </div>
        <h2 class="prompt-title">请先登录</h2>
        <p class="prompt-text">查看我的资料需要登录账号</p>
        <button class="btn btn-primary" @click="router.push('/profile/login')">立即登录</button>
      </div>
    </div>

    <!-- 已登录内容 -->
    <template v-else>
      <!-- 顶部标题区域 -->
      <header class="hero-section">
        <div class="hero-content">
          <nav class="breadcrumb-nav">
            <span class="breadcrumb-item" @click="router.push('/')">首页</span>
            <span class="separator">/</span>
            <span class="breadcrumb-item" @click="router.push('/profile')">个人中心</span>
            <span class="separator">/</span>
            <span class="breadcrumb-current">我的资料</span>
          </nav>
          
          <h1 class="hero-title">我的资料</h1>
          <p class="hero-subtitle">查看和编辑您的个人信息</p>
        </div>
      </header>

      <!-- 内容区域 -->
      <section class="content-section">
        <div class="container">
          <div class="info-card">
            <div class="info-header">
              <h2 class="info-title">基本信息</h2>
            </div>
            <div class="info-body">
              <div class="info-row">
                <span class="info-label">姓名</span>
                <span class="info-value">{{ userInfo.name }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">邮箱</span>
                <span class="info-value">{{ userInfo.email }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">手机号</span>
                <span class="info-value">{{ userInfo.phone }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">部门</span>
                <span class="info-value">{{ userInfo.department }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">职位</span>
                <span class="info-value">{{ userInfo.position }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">入职时间</span>
                <span class="info-value">{{ userInfo.joinDate }}</span>
              </div>
            </div>
            <div class="info-footer">
              <button class="btn btn-secondary">编辑资料</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 底部区域 -->
      <footer class="profile-footer">
        <p class="footer-text">如有账号相关问题，请联系客服团队获取帮助</p>
        <button class="btn btn-primary" @click="router.push('/contact')">联系客服</button>
      </footer>
    </template>
  </div>
</template>

<style scoped>
.profile-sub-page {
  min-height: 100vh;
  background: #fafafa;
}

/* 未登录提示 */
.login-required {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.login-prompt {
  text-align: center;
  max-width: 400px;
}

.prompt-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 50%;
  color: #666666;
  margin-bottom: 24px;
}

.prompt-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.prompt-text {
  font-size: 16px;
  color: #666666;
  margin-bottom: 32px;
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

/* 内容区域 */
.content-section {
  padding: 80px 24px;
  background: #fafafa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.info-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
}

.info-header {
  padding: 28px 32px;
  border-bottom: 1px solid #e8e8e8;
}

.info-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
}

.info-body {
  padding: 8px 0;
}

.info-row {
  display: flex;
  align-items: center;
  padding: 20px 32px;
  border-bottom: 1px solid #f0f0f0;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  width: 120px;
  font-size: 15px;
  color: #999999;
  flex-shrink: 0;
}

.info-value {
  font-size: 15px;
  color: #1a1a1a;
}

.info-footer {
  padding: 24px 32px;
  border-top: 1px solid #e8e8e8;
  background: #fafafa;
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

.btn-secondary {
  background: #ffffff;
  color: #1a1a1a;
  border: 1px solid #d0d0d0;
}

.btn-secondary:hover {
  background: #f5f5f5;
  border-color: #1a1a1a;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 24px;
  }

  .hero-title {
    font-size: 32px;
  }

  .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .info-label {
    width: auto;
  }
}
</style>
