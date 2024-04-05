<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    let swiperElement;
    const brands = ["comma", "melissa", "forever21", "zara", "ann_taylor", ]

    onMount(()=>{
        new Swiper(swiperElement, {
            loop: true,
            
            speed: 500,
            autoplay: {
                delay: 1500,
                pauseOnMouseEnter: true,
            },
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {

                576 : {
                    slidesPerView: 3,
                },
                768 : {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                }
            }
        })
    })
</script>
<section class="marcas-parceiras">
    <div class="max-container">
        <h2 class="marcas-parceiras__title">Marcas Parceiras</h2>
        <div class="swiper" bind:this={swiperElement}>
            <div class="swiper-wrapper">
                {#each brands as brand }
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="{base}/assets/logo-{brand}.png" alt="">
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .marcas-parceiras{
        margin-top: 74px;
        margin-bottom: 80px;

        &__title{
            text-align: center;
            font-size: 32px;
            line-height: 49px;
            margin-bottom: 17px;
            color: #353535;
        }
        .swiper{
            .swiper-slide{
                a{
                    display: block;
                    img{
                        display: block;
                        width: 100%;
                        max-width: 100%;
                        height: auto;
                    }
                }
            }
        }
    }
</style>