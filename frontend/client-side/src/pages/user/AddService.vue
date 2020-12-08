<template>
    <div>
        <div class="text-h5 q-ma-lg">Add Service</div>
        <q-tabs
            v-model="tab"
            dense
            class="text-grey q-ma-sm"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
        >
            <q-tab name="overview" label="Overview" />
            <q-tab name="description" label="Description and FAQs" />
            <q-tab name="units" label="Units and Pricing" />
            <q-tab name="gallery" label="Gallery" />
            <q-tab name="publish" label="Publish" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="overview">
                <q-card class="my-card q-ma-sm">
                    <q-card-section class="q-pa-lg">
                        <q-input
                            v-model="name"
                            label="Service Name"
                        />
                        <q-select
                            v-model="category"
                            :options="categories"
                            option-value="_id"
                            option-label="name"
                            label="Category"
                            @input="handleCategorySelect"
                            />

                        <q-select
                            v-model="sub_category"
                            :options="sub_categories"
                            option-value="_id"
                            option-label="name"
                            label="Sub Category"
                        />


                    </q-card-section>
                </q-card>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
export default {
    name: "AddService",
    data() {
        return {
            tab: "overview",
            name: null,
            category: null,
            sub_category: null,
            tags: null,
        }
    },
    created() {
        this.$store.dispatch('service/fetchCategories');
    },
    computed: {
        categories: {
            get() {
                return this.$store.getters["service/getCategories"]
            }
        },
        sub_categories: {
            get() {
                return this.$store.getters["service/getSubCategories"]
            }
        }
    },
    methods: {
        handleCategorySelect(value) {
            this.$store.dispatch('service/fetchSubCategories', value._id);
        }
    }
}
</script>

<style scoped>

</style>
