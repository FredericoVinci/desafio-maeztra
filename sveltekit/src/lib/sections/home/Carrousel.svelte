<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    let swiperElement;

    onMount(()=>{
        new Swiper(swiperElement, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 500,
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });
    })
</script>

<section class="main-carrousel">
    <div class="swiper" bind:this={swiperElement}>
        <div class="swiper-wrapper">
            {#each {length: 5} as _ }
                <div class="swiper-slide">
                    <div class="image">
                        <picture>
                            <source media="(max-width: 567px)" srcset="{base}/assets/banner-main--mobile.png" />
                            <source media="(min-width: 568px)" srcset="{base}/assets/banner-main.png" />
                            <img src="{base}/assets/banner-main.png" alt="">
                        </picture>
                    </div>
                    <div class="swiper-slide__content">
                        <div class="swiper-slide__content__container max-container">
                            <h2>Promoções de Outono</h2>
                            <p>
                                Confiras os melhores looks para combinar<br />
                                com você nesse Outono
                            </p>
                            <a href="#">Conferir</a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="swiper-navigation">
            <div class="max-container swiper-navigation__container">
                <div class="swiper-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
                        <path d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z" fill="#353535"/>
                    </svg>
                </div>
                <div class="swiper-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none">
                        <path d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z" fill="#353535"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="swiper-pagination" style="--swiper-pagination-bottom: 16px; --swiper-pagination-color: #FAA500; --swiper-pagination-bullet-inactive-color: transparent"></div>
    </div>
</section>

<style lang="scss">
    .main-carrousel{

        .swiper{

            .swiper-wrapper{

                .swiper-slide{
                    display: grid;    
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;

                    .image, .swiper-slide__content{
                        grid-area: 1 / 1 / 2 / 2;
                    }

                    .image{
                        min-height: 300px;
                        @media screen and (max-width: 568px) {
                            min-height: unset;
                        }

                        img{
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                        }
                    }

                    &__content{
                        
                        &__container{
                            height: 100%;
                            padding: 8% 162px 8%;
                            font-family: Montserrat, sans-serif;
                            color: #fff;

                            @media screen and (max-width: 768px) {
                                padding: 20px 36px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                            }

                            h2{
                                font-size: 40px;
                                font-weight: 700;
                                margin-bottom: 40px;
                                @media screen and (max-width: 768px) {
                                    font-size: 30px;
                                    line-height: 37px;
                                    margin-bottom: 24px;
                                }
                            }
                            p{
                                font-size: 20px;
                                margin-bottom: 32px;
                                line-height: 1.2;
                                @media screen and (max-width: 768px) {
                                    font-size: 14px;
                                    line-height: 17px;
                                    margin-bottom: 16px;
                                }
                            }
                            a{
                                margin-top: 32px;
                                display: block;
                                width: 128px;
                                height: 48px;
                                background-color: #FAA500;
                                border-radius: 10px;
                                text-align: center;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 16px;
                                font-weight: 700;

                                @media screen and (max-width: 768px) {
                                    width: 76px;
                                    height: 28px;
                                    font-size: 14px;
                                    margin-top: 16px;
                                    border-radius: 4px;
                                }
                            }
                        }   
                    }
                }
            }


            .swiper-pagination{
                :global(.swiper-pagination-bullet){
                    opacity: 1;
                    width: 16px;
                    height: 16px;
                    box-sizing: border-box;
                    border: 2px solid #FAA500;
                    margin: 0 8px;

                    @media screen and (max-width: 768px) {
                        width: 8px;
                        height: 8px;
                        border-width: 1px;
                    }
                }
            }

            .swiper-navigation{
                position: absolute;
                inset: 0;
                pointer-events: none;
                &__container{
                    height: 100%;
                    position: relative;
                }
                .swiper-prev, .swiper-next{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                    z-index: 1;
                    pointer-events: all;
                }
                .swiper-prev{
                    left: 0;
                }
                .swiper-next{
                    right: 0;
                }
            }
        }
    }
    img {
        display: block;
        max-width: 100%;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
</style>
