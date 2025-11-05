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
           <Field name="name" v-slot="{ field, errors: fieldErrors }">
              <MsInput v-bind="field" placeholder="Nhập họ và tên" :error="fieldErrors[0]" />
            </Field>
          </div>

          <div class="form-detail">
            <label>Email</label>
             <Field name="email" v-slot="{ field, errors: fieldErrors }">
              <MsInput v-bind="field" type="email" placeholder="Nhập Email" :error="fieldErrors[0]" />
            </Field>
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
import { Form, Field, useForm } from 'vee-validate'
import * as yup from 'yup'

const model = defineModel('open', { type: Boolean, required: true })
const emit = defineEmits(['save']) // 🧩 thêm dòng này

// Schema validation
const schema = yup.object({
  name: yup.string().required('Họ và tên không được để trống'),
  email: yup.string().email('Email không hợp lệ'),
})

// Form submit
const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
  },
})




const closePopup = () => {
  model.value = false
}

const handleSave = handleSubmit((values) => {
  const newCandidate = { id: Date.now(), ...values }
  emit('save', newCandidate)

  // Lưu localStorage
  const existing = JSON.parse(localStorage.getItem('candidates') || '[]')
  existing.push(newCandidate)
  localStorage.setItem('candidates', JSON.stringify(existing))

  alert('Đã lưu ứng viên.')
  resetForm()
  closePopup()
})
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
