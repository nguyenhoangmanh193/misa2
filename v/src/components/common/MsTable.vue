<template>
  <div class="ms-table">
    <table class="user-table" :class="{ 'has-checkbox': showCheckbox }">
      <thead>
        <tr>
          <!-- Checkbox đầu bảng nếu cần -->
          <th v-if="showCheckbox" class="text-align-center" style="min-width: 48px">
            <input type="checkbox" v-model="allSelected" @change="toggleAll" />
          </th>

          <th v-for="field in fields" :key="field.key" :class="['text-align-left', field.class]" :style="field.style">
            {{ field.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <!-- Checkbox mỗi dòng -->
          <td v-if="showCheckbox" class="text-align-center">
            <input type="checkbox" v-model="selectedRows" :value="row" />
          </td>

          <td v-for="field in fields" :key="field.key">
            <template v-if="field.type === 'custom'">
              <slot :name="field.key" :row="row" :value="row[field.key]">
                {{ row[field.key] }}
              </slot>
            </template>
            <template v-else>
              {{ row[field.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import '@/assets/styles/components/table.scss'
import { ref, watch } from 'vue'

const props = defineProps({
  fields: { type: Array, required: true }, // [{ key, label, type, class, style }]
  rows: { type: Array, required: true },
  showCheckbox: { type: Boolean, default: false },
})

const emit = defineEmits(['update:selected'])

const selectedRows = ref([])
const allSelected = ref(false)

// Khi toggle all checkbox
const toggleAll = () => {
  if (allSelected.value) {
    selectedRows.value = [...props.rows]
  } else {
    selectedRows.value = []
  }
}

// Watch thay đổi selectedRows, emit ra ngoài
watch(selectedRows, (newVal) => {
  emit('update:selected', newVal)
})
</script>

<style scoped>
.user-table.has-checkbox th:first-child,
.user-table.has-checkbox td:first-child {
  position: sticky;
  left: 0;
  background-color: #fff;
  z-index: 3;
  box-shadow: 2px 0 5px -2px rgba(0, 0, 0, 0.2);
}
</style>
