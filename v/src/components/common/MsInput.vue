<template>
  <!-- Input -->
  <input
    v-if="type === 'text' || type === 'email' || type === 'date'"
    :type="type"
    :placeholder="placeholder"
    :name="name"
    v-model="model"
    class="ms-input"
  />

  <!-- Select -->
  <select
    v-else-if="type === 'select'"
    :name="name"
    v-model="model"
    class="ms-input"
  >
    <option value="" hidden>{{ placeholder }}</option>
    <option
      v-for="(opt, i) in options"
      :key="i"
      :value="opt"
    >
      {{ opt }}
    </option>
  </select>

  <!-- Textarea -->
  <textarea
    v-else-if="type === 'textarea'"
    :placeholder="placeholder"
    v-model="model"
    class="ms-textarea"
    rows="5"
  ></textarea>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'

const props = defineProps({
  placeholder: String,
  name: String,
  type: {
    type: String,
    default: 'text' // text, email, date, select, textarea
  },
  options: {
    type: Array,
    default: () => []
  }
})

// Cho phép dùng v-model ngoài component
const model = defineModel()
</script>

<style scoped>
.ms-input {
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 16px;
  font-size: 14px;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

/* Textarea */
.ms-textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border-primary, #ccc);
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

/* Trạng thái focus */
.ms-input:focus,
.ms-textarea:focus {
  border-color: #007bff;
  outline: none;
}

/* Select trong education wrapper (nếu dùng trong AddCandidatePopup) */
.edu-select-wrapper select {
  width: 287px;
}

/* Cấu trúc thời gian (nếu input date dùng trong form-time) */
.form-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-time input {
  width: 200px;
}
</style>
