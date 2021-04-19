# Examples

::: v-pre
`{{ This will be displayed as-is }}`
:::

<button v-on:click="openModal">Click </button>

<Modal name='test'></Modal>


<script>
export default {
    inject: ['$modal'],
    methods: {
        openModal: function() {
            this.$modal.show('test')
        }
    }
};
</script>
