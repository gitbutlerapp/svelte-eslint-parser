<script lang="typescript">
    import Component from 'foo.svelte' // Component: ComponentType
</script>
<button on:click="{e=>{}}"></button> <!-- e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; } -->
<Component on:click="{e=>{}}"></Component> <!-- Component: ComponentType, e: CustomEvent<any> -->
