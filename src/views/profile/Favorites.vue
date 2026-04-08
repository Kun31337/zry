<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟收藏数据
const favorites = [
  {
    id: 1,
    name: 'MBTI职业性格测评',
    description: '基于卡尔-荣格心理类型理论的职业性格分析工具',
    category: '职业测评',
    collectDate: '2026-03-12'
  },
  {
    id: 2,
    name: 'Holland职业兴趣测试',
    description: '根据霍兰德的职业兴趣理论进行兴趣倾向分析',
    category: '职业测评',
    collectDate: '2026-03-10'
  },
  {
    id: 3,
    name: '学业规划咨询服务',
    description: '专业规划师一对一学业发展方案定制',
    category: '咨询服务',
    collectDate: '2026-03-08'
  },
  {
    id: 4,
    name: '人才特质指纹测评',
    description: '通过指纹特征分析先天特质与潜在能力',
    category: '人才测评',
    collectDate: '2026-03-05'
  }
]
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
          <span class="breadcrumb-current">收藏夹</span>
        </nav>
        
        <h1 class="hero-title">收藏夹</h1>
        <p class="hero-subtitle">收藏的测评和服务</p>
      </div>
    </header>

    <!-- 内容区域 -->
    <section class="content-section">
      <div class="container">
        <div class="favorites-list">
          <article v-for="item in favorites" :key="item.id" class="favorite-card">
            <div class="favorite-body">
              <div class="favorite-header">
                <span class="category-tag">{{ item.category }}</span>
                <span class="collect-date">收藏于 {{ item.collectDate }}</span>
              </div>
              <h3 class="favorite-name">{{ item.name }}</h3>
              <p class="favorite-description">{{ item.description }}</p>
            </div>
            <div class="favorite-footer">
              <button class="btn btn-primary">立即使用</button>
              <button class="btn btn-icon" title="取消收藏">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/>
                </svg>
              </button>
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

.favorites-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.favorite-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px 28px;
  transition: box-shadow 0.3s ease;
}

.favorite-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.favorite-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.category-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: #666666;
  background: #f0f0f0;
  padding: 4px 10px;
  border-radius: 4px;
}

.collect-date {
  font-size: 13px;
  color: #999999;
}

.favorite-name {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.favorite-description {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.favorite-footer {
  display: flex;
  gap: 12px;
  align-items: center;
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
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
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

.btn-icon {
  background: #ffffff;
  color: #666666;
  border: 1px solid #e0e0e0;
  padding: 10px;
}

.btn-icon:hover {
  color: #1a1a1a;
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

  .favorite-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .favorite-footer {
    flex-direction: column;
  }

  .favorite-footer .btn {
    width: 100%;
  }
}
</style>
