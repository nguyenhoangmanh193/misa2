<template>
  <div id="overlayPopup" class="overlay" v-if="model" @click.self="closePopup">
    <div class="popup-content">
      <!-- Header -->
      <div class="popup_header">
        <span class="font-heading-1">Thêm ứng viên</span>
        <button class="icon icon-exit" @click="closePopup">Đóng</button>
      </div>

      <!-- Form -->
      <div class="popup-form">
        <form class="form" @submit.prevent="handleSave">
          <div class="form-detail">
            <label>Họ và tên <span>*</span></label>
            <MsInput placeholder="Nhập họ và tên" v-model="form.name" :error="errors.name" 
             @blur="validateField('name')"/>
          </div>
          <div class="form-section">
            <div class="form-detail">
              <label>Ngày sinh</label>
              <MsInput type="date" v-model="form.birth" />
            </div>
            <div class="form-detail">
              <label>GIới tính</label>
              <MsInput
                type="select"
                placeholder="Chọn giới tính"
                :options="['Nam', 'Nữ']"
                v-model="form.gender"
              />
            </div>
          </div>

          <div class="form-detail">
            <label>Khu vực</label>
            <MsInput
              type="select"
              placeholder="Chọn khu vực"
              :options="['Cầu Giấy', 'Tây Hồ', 'Thanh Xuân', 'Gia Lâm']"
              v-model="form.area"
            />
          </div>

          <div class="form-section">
            <div class="form-detail">
              <label>Số điện thoại</label>
              <MsInput placeholder="Nhập số điện thoại" v-model="form.phone" />
            </div>
            <div class="form-detail">
              <label>Email</label>
              <MsInput type="email" placeholder="Nhập Email" v-model="form.email"
              :error="errors.email" @blur="validateField('email')" />
            </div>
          </div>

          <div class="form-detail">
            <label>Địa chỉ</label>
            <MsInput placeholder="Nhập địa chỉ" v-model="form.address" />
          </div>

          <span class="uppercase">Học vấn</span>

          <div class="form-section" style="flex-direction: column">
            <div
              class="form-detail"
              style="flex-direction: row; align-items: center; justify-content: space-between"
            >
              <label>• Trình độ đào tạo</label>
              <div class="edu-select-wrapper">
                <MsInput
                  type="select"
                  placeholder="Nhập trình độ đào tạo"
                  :options="['Đại học', 'Cao đẳng', 'Thạc sĩ', 'Tiến sĩ']"
                  v-model="form.educationDegree"
                />
                <span class="icon-plus">+</span>
              </div>
            </div>

            <div
              class="form-detail"
              style="flex-direction: row; align-items: center; justify-content: space-between"
            >
              <label>• Nơi đào tạo</label>
              <div class="edu-select-wrapper">
                <MsInput
                  type="select"
                  placeholder="Nhập nơi đào tạo"
                  :options="['HUST', 'NEU', 'KTA', 'PTIT']"
                  v-model="form.educationPlace"
                />
                <span class="icon-plus">+</span>
              </div>
            </div>

            <div
              class="form-detail"
              style="flex-direction: row; align-items: center; justify-content: space-between"
            >
              <label>• Chuyên ngành</label>
              <div class="edu-select-wrapper">
                <MsInput
                  type="select"
                  placeholder="Nhập chuyên ngành"
                  :options="['Kế toán', 'Marketing', 'Grab']"
                  v-model="form.educationMajor"
                />
                <span class="icon-plus">+</span>
              </div>
            </div>
          </div>

          <hr />

          <button class="btn btn-primary btn-icon btn-form">
            <div class="icon icon-plus"></div>
            <span>Thêm học vấn</span>
          </button>

          <div class="form-section">
            <div class="form-detail">
              <label>Ngày ứng tuyển</label>
              <MsInput type="date" v-model="form.dateApply" />
            </div>
            <div class="form-detail">
              <label>Nguồn ứng viên</label>
              <MsInput
                type="select"
                placeholder="Chọn nguồn ứng viên"
                :options="['Facebook', 'Joko']"
                v-model="form.source"
              />
            </div>
          </div>

          <div class="form-section">
            <div class="form-detail">
              <label>Nhân sự khai thác</label>
              <MsInput type="select" :options="['Đinh Nga', 'Fads']" v-model="form.personnel" />
            </div>
            <div class="form-detail">
              <label>Cộng tác viên</label>
              <MsInput
                type="select"
                placeholder="Chọn cộng tác viên"
                :options="['@@@@@@', 'Khác']"
                v-model="form.collaborator"
              />
            </div>
          </div>

          <div class="form-detail" style="flex-direction: row; align-items: center; gap: 16px">
            <input type="checkbox" />
            <span>Thêm nhanh người tham chiếu vào kho ứng viên</span>
          </div>

          <button class="btn btn-primary btn-icon btn-form">
            <div class="icon icon-plus"></div>
            <span>Thêm người giới thiệu</span>
          </button>

          <div class="form-detail">
            <label>Nơi làm việc gần đây</label>
            <MsInput placeholder="Nhập nơi làm việc gần đây" v-model="form.placeRecent" />
          </div>

          <hr />

          <button class="btn btn-primary btn-icon btn-form">
            <div class="icon icon-plus"></div>
            <span>Thêm kinh nghiệm làm việc</span>
          </button>

          <div class="form-detail">
            <label>Nơi làm việc</label>
            <MsInput placeholder="Nhập nơi làm việc" />
          </div>

          <div class="form-section">
            <div class="form-detail">
              <label>Thời gian </label>
              <div class="form-time">
                <MsInput type="date" />
                <span>-</span>
                <MsInput type="date" />
              </div>
            </div>
          </div>

          <div class="form-detail">
            <label>Vị trí công việc</label>
            <MsInput type="textarea" placeholder="Nhập mô tả công việc" />
          </div>

          <div class="form-detail">
            <label>Mô tả công việc</label>
            <MsInput type="textarea" placeholder="Nhập mô tả công việc" v-model="form.workDesc" />
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div class="popup-footer">
        <button class="btn" @click="closePopup">Hủy</button>
        <button class="btn btn-primary" @click="handleSave">Lưu</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineModel, defineEmits } from 'vue'
import MsInput from '@/components/common/MsInput.vue'

const model = defineModel('open', { type: Boolean, required: true })
const emit = defineEmits(['save']) // 🧩 thêm dòng này

const form = ref({
  name: '',
  birth: '',
  gender: '',
  area: '',
  phone: '',
  email: '',
  address: '',
  educationDegree: '',
  educationPlace: '',
  educationMajor: '',
  dateApply: '',
  source: '',
  personnel: '',
  collaborator: '',
  placeRecent: '',
  positionRecent: '',
  workDesc: '',
})

const errors = ref({
  name: '',
  birth: '',
  email: ''
})

// Hàm validate thủ công
const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.value.name = form.value.name.trim() ? '' : 'Họ và tên không được để trống'
      break
   case 'email':
  if (form.value.email.trim() && !/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = 'Email không hợp lệ'
  } else {
    errors.value.email = ''
  }
      break
  }
}

// Hàm validate toàn bộ form
const validate = () => {
  validateField('name')
  validateField('birth')
  validateField('email')

  return !errors.value.name && !errors.value.birth && !errors.value.email
}

const closePopup = () => {
  model.value = false
}

const handleSave = () => {
  if (!validate()) return

  const newCandidate = { id: Date.now(), ...form.value }
  emit('save', newCandidate)

  // Lưu localStorage
  const existing = JSON.parse(localStorage.getItem('candidates') || '[]')
  existing.push(newCandidate)
  localStorage.setItem('candidates', JSON.stringify(existing))

  alert('Đã lưu ứng viên.')

  // Reset form
  Object.keys(form.value).forEach((k) => (form.value[k] = ''))
  closePopup()
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  width: 560px;
  height: calc(100vh - 32px);
  background-color: #fff;
  border-radius: 8px;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.popup_header {
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
}

.popup-form {
  padding: 48px;
  background-color: none;
  flex: 1;
  overflow: auto;
}

.popup-footer {
  height: 56px;
  background-color: #f1f2f5;
  padding: 9px 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

.form {
  background-color: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-section {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.popup-form .form-detail {
  flex: 1;
  display: flex;
  flex-direction: column;
}



.popup-form label,
.popup-form span {
  font-size: 14px;
  font-weight: 500;
}

.edu-select-wrapper select {
  width: 287px;
}

.form-detail .form-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-detail .form-time input {
  width: 200px;
}


.overlay {
  animation: fadeIn 0.3s ease;
}

.popup-content {
  animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
