<template>
  <div id="overlayPopup" class="overlay"  v-if="model" @click.self="closePopup">
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
                        <input v-model="form.name" type="text" name="name" class="required" id="name" placeholder="Nhập họ và tên">
                    </div>
                    <div class="form-section">
                        <div class="form-detail">
                            <label>Ngày sinh</label>
                            <input v-model="form.birth" type="date" name="birth" id="birth">
                        </div>
                        <div class="form-detail">
                            <label>GIới tính</label>
                            <select v-model="form.gender" name="gender" id="gender">
                                <option value="" disabled selected hidden>Chọn giới tính</option>
                                <option value="">Nam</option>
                                <option value="">Nữ</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-detail">
                        <label>Khu vực</label>
                        <select v-model="form.area" name="area" id="area">
                            <option value="" disabled selected hidden>Chọn khu vực</option>
                            <option value="">Cầu giấy</option>
                            <option value="">Tây Hồ</option>
                            <option value="">Thanh Xuân</option>
                            <option value="">Gia Lâm</option>
                            <option value="">Tây Hồ</option>
                        </select>
                    </div>

                    <div class="form-section">
                        <div class="form-detail">
                            <label>Số điện thoại</label>
                            <input v-model="form.phone" type="text" name="phone" id="phone" placeholder="Nhập số điện thoại">
                        </div>
                        <div class="form-detail">
                            <label>Email</label>
                            <input v-model="form.email" type="email" name="email" id="email" placeholder="Nhập Email">
                        </div>
                    </div>

                    <div class="form-detail">
                        <label>Địa chỉ</label>
                        <input v-model="form.address" type="text" name="address" id="address" placeholder="Nhập địa chỉ">
                    </div>

                    <span class="uppercase">Học vấn</span>

                    <div class="form-section" style="flex-direction: column;">
                        <div class="form-detail"
                            style="flex-direction: row; align-items: center; justify-content: space-between;">
                            <label>• Trình độ đào tạo</label>
                            <div class="edu-select-wrapper">
                                <select v-model="form.educationDegree" style="height: 36px;" id="education-degreeName">
                                    <option value="" hidden>Nhập trình độ đào tạo</option>
                                    <option>Đại học</option>
                                    <option>Cao đẳng</option>
                                    <option>Thạc sĩ</option>
                                    <option>Tiến sĩ</option>
                                </select>
                                <span class="icon-plus">+</span>
                            </div>
                        </div>


                        <div class="form-detail "
                            style="flex-direction: row; align-items: center; justify-content: space-between;">
                            <label >• Nơi đào tạo</label>
                            <div class="edu-select-wrapper">
                                <select v-model="form.educationPlace" id="education-placeName">
                                    <option value="" hidden>Nhập nơi đào tạo</option>
                                    <option>HUST</option>
                                    <option>NEU</option>
                                    <option>KTA</option>
                                    <option>PTIT</option>
                                </select>
                                <span class="icon-plus">+</span>
                            </div>
                        </div>


                        <div class="form-detail"
                            style="flex-direction: row; align-items: center; justify-content: space-between;">
                            <label>• Chuyên ngành</label>
                            <div class="edu-select-wrapper" >
                                <select v-model="form.educationMajor" id="education-majorName">
                                    <option value="" hidden>Nhập chuyên ngành</option>
                                    <option>Kế toán</option>
                                    <option>Marketing</option>
                                    <option>Grab</option>
                                </select>
                                <span class="icon-plus">+</span>
                            </div>
                        </div>
                    </div>

                    <hr>

                    <button class=" btn btn-primary btn-icon btn-form">
                        <div class="icon icon-plus"></div>
                        <span>Thêm học vấn</span>
                    </button>

                    <div class="form-section">
                        <div class="form-detail">
                            <label>Ngày ứng tuyển</label>
                            <input v-model="form.dateApply" type="date" name="date-apply" id="date-apply">
                        </div>
                        <div class="form-detail">
                            <label>Nguồn ứng viên</label>
                            <select v-model="form.source" name="candidate-source" id="candidate-source">
                                <option value="" disabled selected hidden>Chọn nguồn ứng viên</option>
                                <option value="">Facebook</option>
                                <option value="">Joko</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-section">
                        <div class="form-detail">
                            <label>Nhân sự khai thác</label>
                            <select name="personnel" id="personnel">
                                <option value="" selected>Đinh Nga</option>
                                <option value="">Fads</option>
                            </select>
                        </div>
                        <div class="form-detail">
                            <label>Cộng tác viên</label>
                            <select name="collaborator" id="collaborator">
                                <option value="" disabled selected hidden>Chọn cộng tác viên</option>
                                <option value="">@@@@@@</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-detail" style="flex-direction: row; align-items: center; gap: 16px;">
                        <input type="checkbox">
                        <span>Thêm nhanh người tham chiếu vào kho ứng viên</span>
                    </div>


                    <button class=" btn btn-primary btn-icon btn-form">
                        <div class="icon icon-plus"></div>
                        <span>Thêm người giới thiệu</span>
                    </button>

                    <div class="form-detail">
                        <label >Nơi làm việc gần đây</label>
                        <input v-model="form.placeRecent" type="text" name="place-recent" id="place-recent"
                            placeholder="Nhập nơi làm việc gần đây">
                    </div>

                    <hr>

                    <button class=" btn btn-primary btn-icon btn-form">
                        <div class="icon icon-plus"></div>
                        <span>Thêm kinh nghiệm làm việc</span>
                    </button>

                    <div class="form-detail">
                        <label>Nơi làm việc</label>
                        <input type="text" name="place-present" id="place-present" placeholder="Nhập nơi làm việc">
                    </div>

                    <div class="form-section">
                        <div class="form-detail">
                            <label>Thời gian </label>
                            <div class="form-time">
                                <input type="date" name="date-start" id="date-start">
                                <span>-</span>
                                <input type="date" name="date-end" id="date-end">
                            </div>
                        </div>
                    </div>

                    <div class="form-detail">
                        <label>Vị trí công việc</label>
                        <input type="text" name="possition-recent" id="possition-recent" placeholder="Nhập vị trí công việc">
                    </div>

                    <div class="form-detail">
                        <label>Mô tả công việc</label>
                        <textarea name="work-des" id="work-des" placeholder="Nhập mô tả công việc" rows="5"></textarea>
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
  workDesc: ''
})

const closePopup = () => {
  model.value = false
}

const handleSave = () => {
  try {
    const newCandidate = {
      id: Date.now(),
      ...form.value
    }

    // 🔹 Gửi dữ liệu lên component cha
    emit('save', newCandidate)

    // Cũng có thể lưu localStorage tại đây nếu bạn muốn song song
    const existing = JSON.parse(localStorage.getItem('candidates') || '[]')
    existing.push(newCandidate)
    localStorage.setItem('candidates', JSON.stringify(existing))

    alert('Đã lưu ứng viên (kể cả dữ liệu trống).')

    Object.keys(form.value).forEach(key => (form.value[key] = ''))
    closePopup()
  } catch (err) {
    console.error('Lỗi khi lưu localStorage:', err)
    alert('Có lỗi khi lưu ứng viên!')
  }
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
  background-color: #F1F2F5;
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
  ;
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

.popup-form .form-detail input,
.popup-form .form-detail select {
  height: 32px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 16px;
}

.popup-form label,
.popup-form span {
  font-size: 14px;
  font-weight: 500;
}


.edu-select-wrapper select {
  width: 287px ;
}

.form-detail .form-time{
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.form-detail .form-time input{
  width: 200px;
}

.form-detail textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border-primary);
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
}

.form-detail textarea:focus {
  border-color: #007bff;
  outline: none;
}

.overlay {
  animation: fadeIn 0.3s ease;
}

.popup-content {
  animation: slideUp 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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
