<script>
    import Carrousel from "$lib/sections/home/Carrousel.svelte";
    import Vantagens from "$lib/sections/home/Vantagens.svelte";
    import MarcasParceiras from "$lib/sections/home/MarcasParceiras.svelte";
    import Shelf from "$lib/sections/home/Shelf.svelte";
    import BannerSection from "$lib/sections/home/BannerSection.svelte";
    import NewsletterPopup from "$lib/components/NewsletterPopup.svelte";
</script>

<main>
    <Carrousel />
    <Vantagens />
    <MarcasParceiras />
    <Shelf />
    <BannerSection />
</main>

<NewsletterPopup />