<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import ShelfItem from '$lib/components/ShelfItem.svelte';

    let products = [
        {
            name: "Faux Suede Mini Skirt",
            imageUrl: `${base}/assets/product-1.png`,
            description: "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
            price: "R$ 500,00",
            colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
        },
        {
            name: "Ruched Rose Print Mini Skirt",
            imageUrl: `${base}/assets/product-2.png`,
            description: "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
            price: "R$ 320,00",
            colors: ["#1C1A19", "#D84E4B", "#CFC9B0"],
        },
    ]

    let swiperElement;
    onMount(()=>{
        new Swiper(swiperElement, {
            loop: true,
            slidesPerView: 1.1,
            spaceBetween: 15,
            speed: 500,
            breakpoints: {
                576 : {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768 : {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992 : {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                }
            },
            autoplay: {
                delay: 2500,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
        });
    })

</script>

<section class="vitrine">
    <div class="max-container vitrine__container">
        <h2 class="vitrine__title">
            As Mais Pedidas
        </h2>
        
        <div class="swiper" bind:this={swiperElement}>
            <div class="swiper-wrapper">
                {#each {length: 3} as _}
                    {#each products as product}
                        <div class="swiper-slide">
                            <ShelfItem {product}/>
                        </div>
                    {/each}
                {/each}
            </div>
            <div class="swiper-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
                    <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="#000"/>
                </svg>
            </div>
            <div class="swiper-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
                    <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="#000"/>
                </svg>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .vitrine{
        margin-bottom: 64px;
        @media (max-width: 768px) {
            margin-bottom: 7px;
        }

        .vitrine__container{
            @media (max-width: 768px) {
                width: 100%;
            }
        }

        &__title{
            text-align: center;
            font-size: 32px;
            line-height: 49px;
            margin-bottom: 24px;
            color: #353535;
            @media (max-width: 768px) {
                font-size: 24px;
                line-height: 36px;
                margin-bottom: 16px;
            }
        }

        .swiper{

            .swiper-wrapper{

                .swiper-slide{
                    align-self: stretch;
                    height: auto;

                }

            }

            .swiper-prev, .swiper-next{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
                z-index: 1;
                pointer-events: all;
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .swiper-prev{
                left: 0;
            }
            .swiper-next{
                right: 0;
            }
        }
    }
</style>