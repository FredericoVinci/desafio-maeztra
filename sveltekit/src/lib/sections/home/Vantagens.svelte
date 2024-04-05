<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    let swiperElement;

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
                    slidesPerView: 2,
                },
                768 : {
                    slidesPerView: 3,
                },
                992 : {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                }
            }
        })
    })
</script>

<section class="vantagens">
    <div class="max-container">
        <h2 class="vantagens__title">Por que comprar na Maeztra?</h2>
        
        <div class="swiper" bind:this={swiperElement}>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="{base}/assets/icon-globe.png" alt="">
                    <div>
                        <h3>Produtos importados</h3>
                        <p>Produto de Alta Qualidade</p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <img src="{base}/assets/icon-wharehouse.png" alt="">
                    <div>
                        <h3>Estoque no Brazil</h3>
                        <p>Produtos mais perto de você!</p>
                    </div>
                </div>
                
                <div class="swiper-slide">
                    <img src="{base}/assets/icon-return.png" alt="">
                    <div>
                        <h3>Trocas Garantidas</h3>
                        <p>Trocas em até 48 horas, vejas as regras</p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <img src="{base}/assets/icon-discount.png" alt="">
                    <div>
                        <h3>Ganhe 5% off</h3>
                        <p>Pagando à vista no Cartão</p>
                    </div>
                </div>

                <div class="swiper-slide">
                    <img src="{base}/assets/icon-truck.png" alt="">
                    <div>
                        <h3>Frete Grátis</h3>
                        <p>Em compras acima de R$ 499,00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .vantagens{
        margin-top: 24px;
        margin-bottom: 80px;

        &__title{
            text-align: center;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 21px;
            color: #353535;
        }
        .swiper{
            .swiper-slide{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 22px;
                padding: 11px 15px 14px;
                box-sizing: border-box;

                img{
                    display: block;
                    height: auto;
                }

                >div{
                    h3{
                        font-size: 14px;
                        color: #353535;
                        line-height: 21px;
                    }
                    p{
                        font-size: 12px;
                        line-height: 18px;
                    }
                }

            }
        }
    }
</style>