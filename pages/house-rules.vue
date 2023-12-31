<template>
  <div class="wrapper">
    <div class="top">
      <h1>House Rules</h1>
      <ButtonComponent outlined @callback="edit.modal = true">
        Register
      </ButtonComponent>
    </div>

    <div>
      <b-table
        striped
        :items="houseRules.entities"
        :fields="tableFields"
        :per-page="houseRules?.pagination?.per_page"
        fixed
        outlined
        :busy="isBusy"
      >
        <template #table-busy>
          <div class="text-center my-2">
            <b-spinner class="align-middle" /> <strong>Loading...</strong>
          </div>
        </template>

        <template #cell(actions)="data">
          <div class="action-buttons">
            <ButtonComponent
              outlined
              @callback="handleRemoveOrEdit(data.item.id, 'edit')"
            >
              <b-icon icon="pencil" />
            </ButtonComponent>
            <ButtonComponent
              outlined
              @callback="handleRemoveOrEdit(data.item.id, 'remove')"
            >
              <b-icon icon="trash" />
            </ButtonComponent>
          </div>
        </template>
      </b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="houseRules?.pagination?.total"
        :per-page="houseRules?.pagination?.per_page"
        align="right"
      />
    </div>

    <ModalEdit
      :visible="edit.modal"
      :id="edit.id"
      @close="modalClose('edit')"
    />

    <ModalRemove
      :visible="remove.modal"
      :id="remove.id"
      @close="modalClose('remove')"
    />
  </div>
</template>

<script>
export default {
  name: 'HouseRulesPage',
  middleware: ['auth'],
  data: () => ({
    tableFields: [
      { key: 'id', sortable: true },
      { key: 'name', sortable: true },
      {
        key: 'active',
        sortable: true,
        formatter: (value) => (value === 1 ? 'Active' : 'Inactive'),
      },
      { key: 'actions' },
    ],
    houseRules: {},
    currentPage: 1,
    isBusy: false,
    edit: { modal: false, id: undefined },
    remove: { modal: false, id: undefined },
  }),

  watch: {
    currentPage() {
      this.loadHouseRules()
    },
  },

  async mounted() {
    await this.loadHouseRules()
  },

  methods: {
    async loadHouseRules() {
      this.isBusy = true
      const { data } = await this.$axios.$get('/house_rules', {
        params: { page: this.currentPage },
        headers: { Authorization: this.$store.state.user.token },
      })
      this.houseRules = data
      this.isBusy = false
    },
    handleRemoveOrEdit(id, field) {
      this[field].modal = true
      this[field].id = id
    },
    modalClose(field) {
      this[field].modal = false
      this[field].id = undefined
      this.loadHouseRules()
    },
  },
}
</script>

<style scoped>
.wrapper {
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 36px;
}
.wrapper .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.wrapper .top h1 {
  font-size: 28px;
  font-weight: bold;
}
.action-buttons {
  display: flex;
  gap: 1rem;
}
</style>
