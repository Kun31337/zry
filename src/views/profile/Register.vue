<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const isLoading = ref(false)
const errorMessage = ref('')

const handleRegister = async () => {
  if (!form.value.username || !form.value.email || !form.value.password || !form.value.confirmPassword) {
    errorMessage.value = '请填写所有必填项'
    return
  }

  if (form.value.password !== form.value.confirmPassword) {
    errorMessage.value = '两次输入的密码不一致'
    return
  }

  if (form.value.password.length < 6) {
    errorMessage.value = '密码长度至少为6位'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  // 模拟注册请求
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // 注册成功后跳转登录
    router.push('/profile/login')
  } catch {
    errorMessage.value = '注册失败，请稍后重试'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <header class="auth-header">
      <nav class="breadcrumb-nav">
        <span class="breadcrumb-item" @click="router.push('/')">首页</span>
        <span class="separator">/</span>
        <span class="breadcrumb-item" @click="router.push('/profile')">个人中心</span>
        <span class="separator">/</span>
        <span class="breadcrumb-current">注册</span>
      </nav>
    </header>

    <main class="auth-container">
      <div class="auth-card">
        <div class="auth-header-section">
          <h1 class="auth-title">注册账号</h1>
          <p class="auth-subtitle">创建新账号，开始您的专业服务体验</p>
        </div>

        <form class="auth-form" @submit.prevent="handleRegister">
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <div class="form-group">
            <label for="username" class="form-label">用户名</label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              class="form-input"
              placeholder="请输入用户名"
              autocomplete="username"
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">邮箱</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="请输入邮箱"
              autocomplete="email"
            />
          </div>

          <div class="form-group">
            <label for="password" class="form-label">密码</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="form-input"
              placeholder="请输入密码（至少6位）"
              autocomplete="new-password"
            />
          </div>

          <div class="form-group">
            <label for="confirmPassword" class="form-label">确认密码</label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              class="form-input"
              placeholder="请再次输入密码"
              autocomplete="new-password"
            />
          </div>

          <button type="submit" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? '注册中...' : '注册' }}
          </button>
        </form>

        <div class="auth-footer">
          <p class="footer-text">
            已有账号？
            <span class="link" @click="router.push('/profile/login')">立即登录</span>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: #fafafa;
}

.auth-header {
  padding: 100px 24px 40px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}

.breadcrumb-nav {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
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

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 40px 24px;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 48px 40px;
}

.auth-header-section {
  text-align: center;
  margin-bottom: 40px;
}

.auth-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.auth-subtitle {
  font-size: 16px;
  color: #666666;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.error-message {
  padding: 12px 16px;
  background: #fff5f5;
  border: 1px solid #ffdddd;
  border-radius: 8px;
  color: #d93025;
  font-size: 14px;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a1a;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  color: #1a1a1a;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.form-input::placeholder {
  color: #999999;
}

.form-input:focus {
  outline: none;
  border-color: #1a1a1a;
  box-shadow: 0 0 0 3px rgba(26, 26, 26, 0.08);
}

.btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #1a1a1a;
  color: #ffffff;
}

.btn-primary:hover:not(:disabled) {
  background: #333333;
}

.btn-primary:disabled {
  background: #999999;
  cursor: not-allowed;
}

.auth-footer {
  margin-top: 32px;
  text-align: center;
}

.footer-text {
  font-size: 15px;
  color: #666666;
}

.link {
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.link:hover {
  color: #333333;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .auth-header {
    padding: 60px 24px 32px;
  }

  .auth-card {
    padding: 32px 24px;
  }

  .auth-title {
    font-size: 24px;
  }
}
</style>
