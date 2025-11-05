<template>
  <div class="page-content">
    <div class="page-container">
      <div class="content-header">
        <div class="content-header-name">
          <span class="text-title">Ứng viên</span>
        </div>
        <div class="content-header-button btn-group" id="btnCreate">
          <button class="btn btn-primary btn-icon" id="addUser" @click="showPopup = true">
            <div class="icon icon-plus"></div>
            <span>Thêm ứng viên</span>
          </button>

          <button class="btn-button btn-primary dropdown-btn">
            <i class="icon icon-dropdown"></i>
          </button>
        </div>
      </div>

      <!--  filter + table + pagination  -->
      <CandidateTable
        :fields="fields"
        :rows="candidates"
        @update:selected="selectedCandidates = $event"
      />
    </div>

    <AddCandidatePopup v-model:open="showPopup" @save="addCandidate" />
  </div>

   
</template>

<script setup>
// import '@/assets/styles/components/table.scss'
import { ref, onMounted } from 'vue'
import CandidateTable from './CandidateTable.vue'
import AddCandidatePopup from './AddCandidatePopup.vue'

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
const showPopup = ref(false)
const candidates = ref([])

const addCandidate = (newCandidate) => {
  const item = {
    CandidateName: newCandidate.name,
    Email: newCandidate.email,
  }

  candidates.value.push(item)
  localStorage.setItem('candidates', JSON.stringify(candidates.value))
}


onMounted(() => {
  const stored = localStorage.getItem('candidates')
  if (stored) {
    candidates.value = JSON.parse(stored)
  } else {
    console.warn('Chưa có dữ liệu trong localStorage')
  }
})
</script>

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
</style>
