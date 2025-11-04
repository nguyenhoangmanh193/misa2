<template>
  <div class="header">
    <div class="header-left">
      <div class="header-title">
        <button class="icon icon-menu"></button>
        <div class="header-title-icon">
          <div class="icon-1 icon-logo"></div>
          <div class="icon-1 icon-logo-2"></div>
        </div>
        <div class="header-title-text">
          <a href="" class="font-heading-2">Tuyển dụng</a>
        </div>
      </div>
      <div class="header-search">
        <i class="icon icon-search"></i>
        <input type="text" placeholder="Tìm kiếm tin tuyển dụng, ứng viên, nhân tài..." />
      </div>
    </div>

    <div class="header-right">
      <a href="" class="header-recuit">
        <i class="icon icon-global"></i>
        <span class="">Website tuyển dụng</span>
      </a>

      <button class="icon-voice"></button>
      <div class="header-store">
        <div class="icon-store"></div>
      </div>
      <div class="header-profile">
        <a href="" class="icon-link">
          <i class="icon-1 icon-message"></i>
        </a>

        <button class="header-profile-user">
          <span class="icon icon-nofi"></span>
        </button>
        <button class="header-profile-user">
          <span class="icon icon-question"></span>
        </button>
        <button class="header-profile-user">
          <span class="icon icon-detail"></span>
        </button>
        <button class="header-profile-user">
          <span class="icon icon-book"></span>
        </button>

        <div class="header-user-menu">
          <button class="avatar-btn">
            <img
              src="https://amisplatform.misacdn.net/APIS/PlatformAPI/api/Avatar/77b8feac-dfe5-4b47-b1ff-ac9a2eaced5a/LT0YJBOP.jpg?avatarID=03762a31-c8c5-45ae-887b-17bcdc47043b&width=64&height=64"
              alt="User Avatar"
            />
          </button>

          <div class="menu-dropdown">
            <a href="#">Trang cá nhân</a>
            <a href="#">Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 48px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
}

.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-title-icon {
  position: relative;
  width: 80px;
  height: 46px;
}

.header-title-icon .icon-logo {
  position: absolute;
  top: -8px;
  left: 14px;
}

.header-title-icon .icon-logo-2 {
  position: absolute;
  top: -19px;
  right: -10px;
}

.header-title-text {
  background-color: transparent;
}

.header-title-text a {
  background: none;
  background-color: transparent;
  text-decoration: none;
  color: var(--color-primary-text-light);
}

.header-search {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px 0 8px;
  background-color: #f2f2f2;
  border-radius: 4px;
}

.header-search input {
  height: 30px;
  padding: 1px 0;
  background: none;
  border: none;
  width: 315px;
}

.header-search input::placeholder {
  color: var(--color-disabled-light);
  letter-spacing: 0.5px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-recuit {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  margin-right: 8px;
}

.header-recuit span {
  color: var(--color-primary-text-light);
}

.header-store {
  display: inline-flex;
  align-items: center;
}

.header-profile {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-profile .icon-link,
.header-profile .header-profile-user {
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.header-profile .icon-link:hover,
.header-profile .header-profile-user:hover {
  background-color: #e4e6e5;
}

.header-user-menu {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.avatar-btn {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.avatar-btn img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.menu-dropdown {
  display: none;
  position: absolute;
  right: 0;
  top: 48px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  min-width: 160px;
}

.menu-dropdown.active {
  display: block;
}
</style>
