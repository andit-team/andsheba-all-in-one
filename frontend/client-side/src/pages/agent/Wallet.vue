<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <q-card class="wallet full-height q-mx-md">
                    <q-card-section class="bg-warning text-white text-center">
                        <div class="text-h5">My Wallet</div>
                        <div class="text-subtitle2">©Andsheba</div>
                    </q-card-section>
                    <q-card-section class="row justify-around items-center">
                        <q-card-section>
                            <span class="text-h6 text-weight-bold">Balance</span>
                            <span class="text-h4 block text-orange">$3,885</span>
                        </q-card-section>
                        <q-card-section>
                            <q-card-section>
                                <span class="text-h6 text-weight-bold">Total Credit</span>
                                <span class="text-h4 block text-red">$7,258</span>
                            </q-card-section>
                            
                            <q-card-section>
                                <span class="text-h6 text-weight-bold">Total Debit</span>
                                <span class="text-h4 block text-green">$7,258</span>
                            </q-card-section>
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="wallet full-height q-mx-md" >
                    <q-card-section class="bg-primary text-white text-center">
                        <div class="text-h5">Amount to Withdraw</div>
                        <div class="text-subtitle2">©SSLCommerse</div>
                    </q-card-section>
                    <div class="text-h6 text-center block q-pa-lg">Custom Amount</div>
                    <div class="q-px-lg">
                        <q-input>
                            <template v-slot:prepend>
                                <q-icon name="fa fa-dollar-sign" />
                            </template>
                        </q-input>
                        <div class="text-center text-h6 q-pa-sm">OR</div>
                        <div class="text-center">
                            <q-btn class="q-ma-sm bg-primary text-white">$50</q-btn>
                            <q-btn class="q-ma-sm bg-secondary text-white">$100</q-btn>
                            <q-btn class="q-ma-sm bg-warning text-white">$150</q-btn>
                        </div>
                        <div class="text-center q-mt-md q-pb-lg">
                            <q-btn class="q-ma-sm bg-green text-white q-px-lg" style="font-size: 18px">Withdraw</q-btn>
                        </div>
                    </div>
                </q-card>
            </div>
        </div>
        <q-card class="q-mx-md">
            <q-card-section class="bg-secondary text-white text-center q-mt-md">
                <div class="text-h5">My Recent Transactions</div>
            </q-card-section>
            <q-table  :data="data" row-key="name"/>
        </q-card>
    </div>
</template>

<script>
export default {
    name: "Wallet",
    data () {
        return {
            columns: [
                {name: 'S.No', label: 'Fat (g)', field: 'fat', sortable: true, headerClasses: 'bg-grey text-white'},
                {name: 'carbs', label: 'Carbs (g)', field: 'carbs', headerClasses: 'bg-grey text-white'},
                {name: 'protein', label: 'Protein (g)', field: 'protein', headerClasses: 'bg-grey text-white'},
                {name: 'sodium', label: 'Sodium (mg)', field: 'sodium', headerClasses: 'bg-grey text-white'},
                {
                    name: 'calcium',
                    label: 'Calcium (%)',
                    field: 'calcium',
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
                    headerClasses: 'bg-grey text-white'
                },
                {
                    name: 'iron',
                    label: 'Iron (%)',
                    field: 'iron',
                    sortable: true,
                    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
                    headerClasses: 'bg-grey text-white'
                }
            ],
            data: [
                {
                    '#': 1,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                },
                {
                    '#': 2,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                },
                {
                    '#': 3,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                },
                {
                    '#': 4,
                    date: '22/04/2020',
                    wallet: '$7484',
                    credit: '$676',
                    debit: '$5898',
                    available: '$974',
                    reason: 'Complete the Service',
                    status: 'credit'
                }
            ]
        }
    }
}
</script>
