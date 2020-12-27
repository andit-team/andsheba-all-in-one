<template>
    <q-input class="c-chip-input q-mt-md" v-model="chips" label="Tags">
        <template v-slot:default>
            <div class="chip-container q-mt-lg">
                <div class="chip" v-for="(chip, i) of chips" :key="chip.label">
                    {{chip}}
                    <i class="material-icons" @click="deleteChip(i)">clear</i>
                </div>
                <input v-model="currentInput" @keypress.enter="saveChip" @keydown.delete="backspaceDelete"/>
            </div>
        </template>
    </q-input>


</template>

<script>
export default {
    name: "ChipInput",
    props: ['chips'],
    data() {
        return {
            currentInput: ''
        }
    },
    methods: {
        saveChip() {
            const {chips, currentInput, set} = this;
            ((set && chips.indexOf(currentInput) === -1) || !set) && chips.push(currentInput);
            this.currentInput = '';
        },
        deleteChip(index) {
            this.chips.splice(index, 1);
        },
        backspaceDelete({which}) {
            which == 8 && this.currentInput === '' && this.chips.splice(this.chips.length - 1);
        }
    }
}
</script>

<style lang="scss">
.c-chip-input {
    .q-field__native {
        display: none;
    }
}


.chip-container {
    width: 100%;
    min-height: 36px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;

    .chip {
        margin: 4px;
        background: #e0e0e0;
        padding: 0px 4px;
        border: 1px solid #ccc;
        border-radius: 3px;
        display: flex;
        align-items: center;

        i {
            cursor: pointer;
            opacity: .56;
            margin-left: 8px;
        }
    }

    input {
        flex: 1 1 auto;
        width: 30px;
        border: none;
        outline: none;
        padding: 4px;
    }
}
</style>