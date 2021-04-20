# Examples

::: v-pre
`{{ This will be displayed as-is }}`
:::

<button v-on:click="openModal">Click </button>

<teleport to='body'>
<Modal name='test'>
<p>Test modal</p>
</Modal> 
</teleport>


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
