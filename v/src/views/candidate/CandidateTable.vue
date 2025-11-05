<template>
  <div class="content-detail">
    <!-- Filter / Search / Buttons -->
    <div class="content-detail-filter">
      <div class="content-search">
        <i class="icon icon-search"></i>
        <input type="text" v-model="searchText" placeholder="Tìm kiếm nhanh trong danh sách" />
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

    <!-- Table -->
    <div class="content-detail-table">
      <MSTable
        :fields="fields"
        :rows="pagedRows"
        :showCheckbox="true"
        @update:selected="emitSelected"
      />
    </div>

    <!-- Footer / Pagination -->
    <div class="content-detail-footer">
      <span class="font-caption">Tổng {{ filteredRows.length }} bản ghi </span>
      <div class="content-detail-right">
        <span class="font-caption">Số bản ghi/trang</span>
        <div class="dropdown">
          <select v-model.number="pageSize">
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div class="pagination">
          <span>{{ startRecord }} - {{ endRecord }} bản ghi</span>
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="icon icon-sidebar-left"
          ></button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="icon icon-sidebar-right"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import MSTable from '@/components/common/MsTable.vue'

const props = defineProps({
  rows: Array,
})

const emit = defineEmits(['update:selected'])

const searchText = ref('')
const currentPage = ref(1)
const pageSize = ref(15)


const fields = [
  { key: 'CandidateName', label: 'Họ và tên', style: { minWidth: '200px' } },
  { key: 'Email', label: 'Email', style: { minWidth: '200px' } },
  { key: 'RecruitmentName', label: 'Chiến dịch tuyển dụng', style: { minWidth: '200px' } },
  { key: 'ApplyDate', label: 'Ngày ứng tuyển', style: { minWidth: '200px' } },
  { key: 'ChannelName', label: 'Nguồn ứng viên', style: { minWidth: '200px' } },
  { key: 'AreaName', label: 'Khu vực', style: { minWidth: '200px' } },
  { key: 'Address', label: 'Địa chỉ', style: { minWidth: '200px' } },
  { key: 'Gender', label: 'Giới tính', style: { minWidth: '200px' } },
]

// Filter rows
const filteredRows = computed(() => {
  if (!searchText.value) return props.rows
  return props.rows.filter((row) => {
    return ['CandidateName', 'Mobile', 'Email'].some(key =>
      String(row[key]).toLowerCase().includes(searchText.value.toLowerCase())
    )
  })
})

const totalPages = computed(() => Math.ceil(filteredRows.value.length / pageSize.value))

const pagedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredRows.value.slice(start, start + pageSize.value)
})

const startRecord = computed(() =>
  filteredRows.value.length ? (currentPage.value - 1) * pageSize.value + 1 : 0,
)
const endRecord = computed(() =>
  Math.min(currentPage.value * pageSize.value, filteredRows.value.length),
)

watch([searchText, pageSize], () => {
  currentPage.value = 1
})

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

function emitSelected(rows) {
  emit('update:selected', rows)
}
</script>

<style scoped>
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
