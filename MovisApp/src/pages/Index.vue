<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue"></div>
          </div>
          <div class="col">
            <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Data Transaksi</div>
              <div>Data Transaksi Pembelian Dan Pemesanan</div>
            </q-banner>
          </div>
        </div>
      </div>    
    </div>
    <q-card class="bg-grey-8" flat>
      <q-table
        :data="data"
        flat
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="calories" :props="props">
              <q-badge color="green">
                {{ props.row.calories }}
              </q-badge>
            </q-td>
            <q-td key="fat" :props="props">
              <q-badge color="purple">
                {{ props.row.fat }}
              </q-badge>
            </q-td>
            <q-td key="carbs" :props="props">
              <q-badge color="orange">
                {{ props.row.carbs }}
              </q-badge>
            </q-td>
            <q-td key="protein" :props="props">
              <q-badge color="primary">
                {{ props.row.protein }}
              </q-badge>
            </q-td>
            <q-td key="sodium" :props="props">
              <q-badge color="teal">
                {{ props.row.sodium }}
              </q-badge>
            </q-td>
            <q-td key="calcium" :props="props">
              <q-badge color="accent">
                {{ props.row.calcium }}
              </q-badge>
            </q-td>
            <q-td key="iron" :props="props">
              <q-badge color="amber">
                {{ props.row.iron }}
              </q-badge>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
       columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        }
      ]
    }
  }
}
</script>
<style scoped>
.left {
  width: 3px;
  height: 100%;
  background-color: aqua(251, 251, 251);
}
</style>
