<script>
    export let data;

    import IntroCard from "$lib/components/IntroCard.svelte";
    import YearCard from "$lib/components/YearCard.svelte";
</script>

<div class="wrapper">
    <YearCard {data} />
</div>

<style>
    .wrapper {
        display: flex;
    }
</style>