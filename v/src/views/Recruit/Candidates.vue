<template>
  <div class="page-content">
    <div class="page-container">
      <div class="content-header">
        <div class="content-header-name">
          <span class="text-title">Ứng viên</span>
        </div>
        <div class="content-header-button btn-group" id="btnCreate">
          <button class="btn btn-primary btn-icon" id="addUser">
            <div class="icon icon-plus"></div>
            <span>Thêm ứng viên</span>
          </button>

          <button class="btn-button btn-primary dropdown-btn">
            <i class="icon icon-dropdown"></i>
          </button>
        </div>
      </div>

      <div class="content-detail">
        <div class="content-detail-filter">
          <div class="content-search">
            <i class="icon icon-search"></i>
            <input type="text" id="searchInput" placeholder="Tìm kiếm nhanh trong danh sách" />
          </div>

          <button class="content-profile-user">
            <span class="icon icon-filter"></span>
          </button>

          <button class="content-profile-user">
            <span class="icon icon-export"></span>
          </button>

          <button class="content-profile-user">
            <span class="icon icon-chart"></span>
          </button>

          <button class="content-profile-user">
            <span class="icon icon-setting"></span>
          </button>
        </div>

        <div class="content-detail-table">
          <table class="user-table" id="candidateTable">
            <thead>
              <tr>
                <th class="text-align-center" style="min-width: 48px">
                  <input type="checkbox" id="selectAll" />
                </th>
                <th class="text-align-left" style="min-width: 250px">Họ và tên</th>
                <th class="text-align-left" style="min-width: 200px">Số điện thoại</th>
                <th class="text-align-left" style="min-width: 200px">Email</th>
                <th class="text-align-left" style="min-width: 200px">Chiến dịch tuyển dụng</th>
                <th class="text-align-left" style="min-width: 200px">Vị trí tuyển dụng</th>
                <th class="text-align-left" style="min-width: 200px">Tin tuyển dụng</th>
                <th class="text-align-left" style="min-width: 200px">Vòng tuyển dụng</th>
                <th class="text-align-left" style="min-width: 200px">Đánh giá</th>
                <th class="text-align-left" style="min-width: 200px">Ngày ứng tuyển</th>
                <th class="text-align-left" style="min-width: 200px">Nguồn ứng viên</th>
                <th class="text-align-left" style="min-width: 200px">Trình độ đào tạo</th>
                <th class="text-align-left" style="min-width: 200px">Nơi đào tạo</th>
                <th class="text-align-left" style="min-width: 200px">Chuyên ngành</th>
                <th class="text-align-left" style="min-width: 200px">Nơi làm việc gần đây</th>
                <th class="text-align-left" style="min-width: 200px">Nhân sự khai thác</th>
                <th class="text-align-left" style="min-width: 200px">Đơn vị sử dụng</th>
                <th class="text-align-left" style="min-width: 200px">Phù hợp với chân dung</th>
                <th class="text-align-left" style="min-width: 200px">Khu vực</th>
                <th class="text-align-left" style="min-width: 200px">Người giới thiệu</th>
                <th class="text-align-left" style="min-width: 200px">Thông tin tiếp nhận</th>
                <th class="text-align-left" style="min-width: 200px">Thuộc kho tiềm năng</th>
                <th class="text-align-left" style="min-width: 200px">Tài khoản cổng ứng viên</th>
                <th class="text-align-left" style="min-width: 200px">Thẻ</th>
                <th class="text-align-left" style="min-width: 200px">Trạng thái</th>
                <th class="text-align-left" style="min-width: 200px">Giới tính</th>
                <th class="text-align-center" style="min-width: 200px">Ngày sinh</th>
                <th class="text-align-left" style="min-width: 200px">Địa chỉ</th>
                <th class="text-align-left" style="min-width: 200px">Lý do loại</th>
                <th class="text-align-left" style="min-width: 200px">Cộng tác viên</th>
                <th class="text-align-left" style="min-width: 200px">Ngày tiếp nhận</th>
                <th class="text-align-left" style="min-width: 200px">Trạng thái mời nhận việc</th>

                <th style="width: 50px"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div class="content-detail-footer">
          <span class="font-caption">Tổng <span id="totalCount">0</span> số bản ghi </span>
          <div class="content-detail-right">
            <span class="font-caption">Số bản ghi/trang</span>
            <div class="dropdown">
              <select id="recordsPerPage">
                <option value="15" selected>15</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

            <div class="pagination">
              <span>1 - 25 bản ghi</span>
              <button class="icon icon-sidebar-left"></button>
              <button class="icon icon-sidebar-right"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.page-content {
  background-color: #ebecef;
  flex: 1;
  padding: 16px 16px 24px 24px;
}
.page-container {
  background-color: transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.content-header {
  display: flex;
  justify-content: space-between;
}

.content-header-name {
  height: 36px;
}
.content-header-name span {
  font-size: 20px;
  font-weight: 700;
}

.content-detail {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
}

.content-detail-filter {
  background-color: #ffffff;
  height: 68px;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  border-radius: 4px 4px 0 0;
}
.content-search {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px 0 8px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid var(--color-border-primary);
  height: 100%;
}

.content-search input {
  height: 30px;
  padding: 1px 0;
  background: none;
  border: none;
  width: 250px;
}

.content-search input::placeholder {
  color: var(--color-disabled-light);
  letter-spacing: 0.5px;
}

.content-search i {
  background-color: var(--color-disabled-light);
}

.content-profile-user {
  height: 100%;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border-primary);
  padding: auto;
  border-radius: 4px;
  margin-left: 12px;
  box-sizing: border-box;
  background: none;
  cursor: pointer;
}

.content-detail-table {
  overflow-x: auto;
  overflow-y: auto;
  max-width: calc(100vw - 270px);
  width: min-content;
  flex: 1;
  max-height: calc(100vh - 270px);
}

.content-detail-table.collapsed {
  max-width: calc(100vw - 109px);
}

/* overflow-x: auto;
    overflow-y: auto;
    max-width: calc(100vw - 250px);
    width: min-content;
    flex: 1; */

.content-detail-footer {
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #F5F6F8; */
  padding: 0 16px;
  border-radius: 0 0 4px 4px;
}

.content-detail-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.pagination {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.pagination button {
  cursor: pointer;
}

/* dropdown */
.dropdown {
  position: relative;
  width: 72px;
  margin: 12px 0;
}

.dropdown select {
  width: 100%;
  height: 36px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid var(--color-border-primary);
  background-color: white;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s ease;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown select:focus {
  border-color: #3c75de;
}

/*  */
.pagination .icon-sidebar-left.disabled,
.pagination .icon-sidebar-right.disabled {
  background-color: var(--color-disabled-light);
}
</style>
