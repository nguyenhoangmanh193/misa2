<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <div class="sidebar-top">
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-news"></i>
            <span>Tin tuyển dụng</span>
          </a>
        </div>

        <div class="sidebar-items">
          <a href="" class="link-item active">
            <i class="icon icon-sidebar-candidate"></i>
            <span>Ứng viên</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-calendar"></i>
            <span>Lịch</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-ware"></i>
            <span>Kho tiềm năng</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-marketing"></i>
            <span>Chiến dịch tuyển dụng</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-task"></i>
            <span>Công việc</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-mail"></i>
            <span>aiMarketing</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-mes"></i>
            <span>Trao đổi với ứng viên</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-report"></i>
            <span>Báo cáo</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-setting"></i>
            <span>Thiết lập</span>
          </a>
        </div>
        <div class="sidebar-items">
          <a href="" class="link-item">
            <i class="icon icon-sidebar-other"></i>
            <span>Khác</span>
          </a>
        </div>
      </div>

      <div class="sidebar-bottom">
        <div class="sidebar-items">
          <button class="link-item btn-toggle-sidebar">
            <i class="icon icon-sidebar-left"></i>
            <span>Thu gọn</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: #0f1114;
  background-image:
    linear-gradient(rgba(15, 17, 20, 0.2), rgba(15, 17, 20, 0.2)),
    url('@/assets/images/sidebar-background.svg');
  width: var(--sidebar-width);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 32px 12px 16px 12px;
}
.sidebar-container {
  height: 100%;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-top,
.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sidebar-top .link-item,
.sidebar-bottom .link-item {
  height: 100%;
  width: 100%;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  text-decoration: none;
  border-radius: 4px;
}
.sidebar-items {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.sidebar-items span {
  color: var(--color-primary-text-dark);
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.025em;
}

.sidebar-bottom .link-item {
  background-color: #ba918e;
  border: none;
  cursor: pointer;
}

.sidebar-top .link-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-top .link-item.active {
  background-color: var(--color-primary-web);
}

.link-item.active i,
.sidebar-bottom i {
  background-color: var(--color-title-dark);
}

.link-item.active span,
.sidebar-bottom span {
  color: var(--color-title-dark);
}

/* Thu gọn */

.sidebar.collapsed {
  width: 72px;
}

.sidebar.collapsed .link-item span {
  display: none;
}
</style>
