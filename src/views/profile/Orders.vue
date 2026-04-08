<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟订单数据
const orders = [
  {
    id: 'ORD20260315001',
    service: '职业性格测评',
    date: '2026-03-15',
    status: '已完成',
    amount: '299.00'
  },
  {
    id: 'ORD20260310002',
    service: '学业规划咨询',
    date: '2026-03-10',
    status: '已完成',
    amount: '599.00'
  },
  {
    id: 'ORD20260305003',
    service: '人才特质测评',
    date: '2026-03-05',
    status: '已完成',
    amount: '199.00'
  },
  {
    id: 'ORD20260228004',
    service: 'MBTI职业测评',
    date: '2026-02-28',
    status: '已取消',
    amount: '0.00'
  }
]

const getStatusClass = (status: string) => {
  return status === '已完成' ? 'status-completed' : 'status-cancelled'
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
          <span class="breadcrumb-current">我的订单</span>
        </nav>
        
        <h1 class="hero-title">我的订单</h1>
        <p class="hero-subtitle">查看所有服务订单记录</p>
      </div>
    </header>

    <!-- 内容区域 -->
    <section class="content-section">
      <div class="container">
        <div class="orders-list">
          <article v-for="order in orders" :key="order.id" class="order-card">
            <div class="order-header">
              <span class="order-id">订单号：{{ order.id }}</span>
              <span class="order-status" :class="getStatusClass(order.status)">{{ order.status }}</span>
            </div>
            <div class="order-body">
              <h3 class="order-service">{{ order.service }}</h3>
              <div class="order-meta">
                <span class="order-date">{{ order.date }}</span>
                <span class="order-amount">￥{{ order.amount }}</span>
              </div>
            </div>
            <div class="order-footer">
              <button class="btn btn-outline">查看详情</button>
              <button v-if="order.status === '已完成'" class="btn btn-outline">再次购买</button>
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

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.order-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px 28px;
  transition: box-shadow 0.3s ease;
}

.order-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.order-id {
  font-size: 14px;
  color: #999999;
}

.order-status {
  font-size: 14px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 4px;
}

.status-completed {
  background: #e8f5e9;
  color: #2e7d32;
}

.status-cancelled {
  background: #f5f5f5;
  color: #999999;
}

.order-body {
  margin-bottom: 20px;
}

.order-service {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.order-meta {
  display: flex;
  gap: 24px;
}

.order-date {
  font-size: 14px;
  color: #666666;
}

.order-amount {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
}

.order-footer {
  display: flex;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
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

.btn-outline {
  background: #ffffff;
  color: #1a1a1a;
  border: 1px solid #d0d0d0;
}

.btn-outline:hover {
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

  .order-meta {
    flex-direction: column;
    gap: 4px;
  }

  .order-footer {
    flex-direction: column;
  }

  .order-footer .btn {
    width: 100%;
  }
}
</style>
