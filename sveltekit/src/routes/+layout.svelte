<script>
  import "../app.scss";
  import Header from "$lib/sections/header/Header.svelte";
  import { onMount } from "svelte";
  import Footer from "$lib/sections/footer/Footer.svelte";
  onMount(()=>{
    console.log("Developed with care by Frederico Bazano");
  })
</script>

<svelte:head>
  <title>Maeztra</title>
</svelte:head>

<Header />

<slot />

<Footer />