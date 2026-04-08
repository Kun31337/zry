<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";

interface NavItem {
  path: string;
  name: string;
  icon?: string;
}

const route = useRoute();
const hoveredIndex = ref<number | null>(null);

const navItems: NavItem[] = [
  { path: "/", name: "首页" },
  { path: "/service", name: "服务" },
  { path: "/profile", name: "个人中心" },
  { path: "/about", name: "关于我们" },
];

const isActive = (path: string): boolean => {
  return route.path === path;
};

const getHoverStyle = (index: number): string => {
  return hoveredIndex.value === index ? "hovered" : "";
};
</script>

<template>
  <nav class="global-nav" role="navigation" aria-label="主导航">
    <div class="nav-container">
      <div class="nav-logo">
        <RouterLink to="/" class="logo-text">ZRY</RouterLink>
      </div>
      
      <ul class="nav-list">
        <li 
          v-for="(item, index) in navItems" 
          :key="item.path"
          class="nav-item-wrapper"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <RouterLink
            :to="item.path"
            :class="{ 'is-active': isActive(item.path), [getHoverStyle(index)]: true }"
            class="nav-link"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            <span class="nav-text">{{ item.name }}</span>
            <span class="nav-indicator"></span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 48px;
}

.nav-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: color 0.2s;
}

.logo-text:hover {
  color: #333;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
}

.nav-item-wrapper {
  position: relative;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  min-height: 48px;
  min-width: 100px;
  text-decoration: none;
  color: #666666;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-link:hover {
  color: #1a1a1a;
  background: #f5f5f5;
}

.nav-link.is-active {
  color: #1a1a1a;
  background: #fafafa;
}

.nav-link.hovered {
  color: #1a1a1a;
  background: #f0f0f0;
}

.nav-text {
  position: relative;
  z-index: 1;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #333 0%, #666 100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link.is-active .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

.nav-link:hover .nav-indicator {
  transform: translateX(-50%) scaleX(1);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0 24px;
  }

  .nav-link {
    padding: 10px 20px;
    font-size: 14px;
    min-width: auto;
  }

  .logo-text {
    font-size: 20px;
  }
}
</style>
