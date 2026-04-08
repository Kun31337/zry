<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 设置项
const settings = [
  {
    id: 'account',
    title: '账号设置',
    items: [
      { label: '修改密码', description: '定期更换密码可以保护账号安全' },
      { label: '绑定手机', description: '已绑定 138****8888' },
      { label: '绑定邮箱', description: '已绑定 zhangsan@example.com' }
    ]
  },
  {
    id: 'privacy',
    title: '隐私设置',
    items: [
      { label: '个人信息可见性', description: '控制他人查看您的个人信息' },
      { label: '消息通知', description: '管理推送和邮件通知' }
    ]
  },
  {
    id: 'security',
    title: '安全设置',
    items: [
      { label: '登录设备管理', description: '查看并管理已登录设备' },
      { label: '安全日志', description: '查看账号安全操作记录' }
    ]
  }
]

const handleLogout = () => {
  if (confirm('确定要退出登录吗？')) {
    router.push('/')
  }
}
</script>

<template>
  <div class="profile-sub-page">
    <!-- 顶部标题区域 -->
    <header class="hero-section">
      <div class="hero-content">
        <nav class="breadcrumb-nav">
          <span class="breadcrumb-item" @click="router.push('/')">首页</span>
          <span class="separator">/</span>
          <span class="breadcrumb-item" @click="router.push('/profile')">个人中心</span>
          <span class="separator">/</span>
          <span class="breadcrumb-current">设置</span>
        </nav>
        
        <h1 class="hero-title">设置</h1>
        <p class="hero-subtitle">账号和隐私设置</p>
      </div>
    </header>

    <!-- 内容区域 -->
    <section class="content-section">
      <div class="container">
        <div class="settings-list">
          <div v-for="group in settings" :key="group.id" class="settings-group">
            <h2 class="group-title">{{ group.title }}</h2>
            <div class="settings-items">
              <div v-for="(item, index) in group.items" :key="index" class="settings-item">
                <div class="item-content">
                  <span class="item-label">{{ item.label }}</span>
                  <span class="item-description">{{ item.description }}</span>
                </div>
                <svg class="item-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>

          <div class="logout-section">
            <button class="btn btn-logout" @click="handleLogout">退出登录</button>
          </div>
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
.profile-sub-page {
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

/* 内容区域 */
.content-section {
  padding: 80px 24px;
  background: #fafafa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.settings-group {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
}

.group-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  padding: 20px 24px;
  border-bottom: 1px solid #e8e8e8;
  background: #fafafa;
}

.settings-items {
  display: flex;
  flex-direction: column;
}

.settings-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.2s ease;
}

.settings-item:last-child {
  border-bottom: none;
}

.settings-item:hover {
  background: #fafafa;
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-label {
  font-size: 15px;
  color: #1a1a1a;
}

.item-description {
  font-size: 13px;
  color: #999999;
}

.item-arrow {
  color: #cccccc;
  flex-shrink: 0;
}

.logout-section {
  padding: 16px 0;
}

.btn-logout {
  width: 100%;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 500;
  color: #d32f2f;
  background: #ffffff;
  border: 1px solid #d32f2f;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-logout:hover {
  background: #ffebee;
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
}
</style>
