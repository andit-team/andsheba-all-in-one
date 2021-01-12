<template>
    <div>
        <div class="row q-mx-lg q-gutter-lg justify-around">
            <div class="col-md-4 col-sm-12">
                <!-- <div class="text-h5 q-my-md text-center">Current Plan</div> -->
                <q-card class="my-card" flat bordered>
                    <q-img
                        src="https://image.freepik.com/free-vector/big-sale-special-offer-banner-template_7547-308.jpg"
                    />

                    <q-card-section>
                        <div class="text-overline text-orange-9">Current Plan</div>
                        <div class="text-h5 q-mt-sm q-mb-xs">Standard Plan</div>
                        <div class="text-caption text-grey">
                        Lorem ipsum dolor sit amet, consectetur.
                        </div>
                        <div class="text-caption text-grey text-weight-bold">
                        (03-04-2020 TO 03-04-2021)
                        </div>
                        <q-list>
                            <q-item>
                                <q-item-section avatar>
                                    <q-icon color="green" name="check_circle_outline" />
                                </q-item-section>

                                <q-item-section>
                                    <q-item-label>10% Commission per Sale</q-item-label>
                                </q-item-section>
                            </q-item>
                            
                            <q-item>
                                <q-item-section avatar>
                                    <q-icon color="green" name="check_circle_outline" />
                                </q-item-section>

                                <q-item-section>
                                    <q-item-label>2% Cashback On Deposite</q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-item>
                            <q-item-section avatar>
                                <q-icon color="green" name="check_circle_outline" />
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>2 Withdrawn per Week</q-item-label>
                            </q-item-section>
                            </q-item>

                            <q-item>
                            <q-item-section avatar>
                                <q-icon color="green" name="check_circle_outline" />
                            </q-item-section>
                            <q-item-section>
                                <q-item-label>Dashboard Report Access</q-item-label>
                            </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>

                </q-card>
            </div>
            <div class="col-md-6 col-sm-12">
                <q-card>
                    <q-card-section class="bg-secondary text-white text-center">
                        <div class="text-h5">My Subscription History</div>
                    </q-card-section>
                    <q-table  :data="data" row-key="name"/>
                </q-card>
            </div>
        </div>
    </div>

</template>

<script>
import SubscriptionCard from "components/common/SubscriptionCard";
export default {
    name: "Subscription",
    components: {SubscriptionCard},

    data() {
        return {
            data: [
                {
                    plan: 'Basic',
                    'start date': '03-04-2020',
                    'end date': '03-04-2020',
                    amount: '0',
                    status: 'paid'
                },
                {
                    plan: 'Standard',
                    'start date': '03-04-2020',
                    'end date': '03-04-2020',
                    amount: '0',
                    status: 'paid'
                },
                {
                    plan: 'Enterprice',
                    'start date': '03-04-2020',
                    'end date': '03-04-2020',
                    amount: '0',
                    status: 'paid'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
