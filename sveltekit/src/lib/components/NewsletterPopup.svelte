<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    let closed = false
    let open = false

    onMount(()=>{
      setTimeout(()=>{
          open = true
      },3000)
    })

    const closePopup = () => {
        open = false
        setTimeout(()=>{
            closed = true
      },300)
    }

</script>

{#if !closed}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="popup-overlay" class:open on:click={closePopup}></div>
<div class="popup-wrapper">
    <div class="popup-container">
        <div class="popup" class:open >
            <div class="close"  on:click={closePopup}>FECHAR</div>
            <div class="left">
                <img src="{base}/assets/bg-newsletter.png" alt="">
            </div>
            <div class="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="31" viewBox="0 0 28 31" fill="none">
                    <path d="M4.66659 5.30493H23.3333C24.6166 5.30493 25.6666 6.4172 25.6666 7.77664V22.6069C25.6666 23.9663 24.6166 25.0786 23.3333 25.0786H4.66659C3.38325 25.0786 2.33325 23.9663 2.33325 22.6069V7.77664C2.33325 6.4172 3.38325 5.30493 4.66659 5.30493Z" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.6666 7.77661L13.9999 16.4276L2.33325 7.77661" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2>Bem Vindo à MAEZTRA</h2>
                <p>
                    Receba em Primeira mão<br/>
                    <strong>desconto e ofertas exclusivas</strong>
                </p>
                <form>
                    <input type="email" name="email" placeholder="Digite seu e-mail" required>
                    <button type="submit">
                        Enviar
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path d="M11.3125 0.802261C11.5703 0.661636 11.8516 0.638199 12.1328 0.708511C12.4141 0.778824 12.625 0.919449 12.7891 1.15382C12.9531 1.3882 13.0234 1.66945 12.9766 1.9507L11.5938 11.0444C11.5234 11.4194 11.3359 11.6773 11.0312 11.8413C10.8438 11.9351 10.6797 11.9819 10.4922 11.9819C10.3281 11.9819 10.1875 11.9585 10.0469 11.9116L7.42188 10.8101L6.41406 12.2163C6.17969 12.4976 5.92188 12.6382 5.59375 12.6616C5.26562 12.6851 4.98438 12.5913 4.75 12.3804C4.49219 12.1694 4.375 11.8882 4.375 11.5366V9.56789L1.70312 8.44289C1.42188 8.34914 1.21094 8.16164 1.09375 7.88039C0.976562 7.62257 0.953125 7.36476 1.04688 7.08351C1.11719 6.80226 1.28125 6.59132 1.5625 6.42726L11.3125 0.802261ZM5.5 11.5366L6.36719 10.3648L5.5 10.0132V11.5366ZM10.4922 10.8569L11.875 1.78664L2.125 7.41164L4.65625 8.46632L9.60156 4.13039C9.69531 4.03664 9.8125 4.0132 9.95312 4.06007C10.0703 4.10695 10.1641 4.17726 10.2109 4.29445C10.2578 4.41164 10.2344 4.52882 10.1641 4.62257L6.88281 9.38039L10.4922 10.8569Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
{/if}

<style lang="scss">
    .popup-overlay {
        position: fixed;
        inset: 0;
        background-color: #000000;
        opacity: 0;
        z-index: 98;
        pointer-events: none;
        &.open{
            opacity: 0.7;
            pointer-events: all;
        }
    }

    .popup-wrapper {
        position: fixed;
        inset: 0;
        z-index: 99;
        pointer-events: none;

        .popup-container {
            width: 848px;
            max-width: calc(100dvw - 64px);
            margin: 0 auto;
            height: 100%;
            display: flex;
            align-items: center;

            .popup{
                background-color: #fff;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                position: relative;
                pointer-events: none;
                opacity: 0;
                transform: scale(0.8);
                transition: 0.3s ease-out;

                @media screen and (max-width: 768px) {
                    grid-template-columns: 1fr;
                    width: 100%;
                }

                &.open{
                    transform: scale(1);
                    pointer-events: all;
                    opacity: 1;

                }

                .close{
                    position: absolute;
                    bottom: calc(100% + 6px);
                    right: 0;
                    color: #fff;
                    font-family: "Lato", sans-serif;
                    font-size: 12px;
                    cursor: pointer;
                }

                .left{
                    img{
                        display: block;
                        max-width: 100%;
                        width: 100%;
                        height: auto;
                    }
                    @media screen and (max-width: 768px) {
                        display: none;
                    }
                }

                .right{
                    padding: 120px 52px 20px;

                    @media screen and (max-width: 768px) {  
                        padding: 40px 20px 24px;
                    }

                    >svg{
                        display: block;
                        margin: 0 auto 13px;
                    }

                    h2{
                        font-size: 12px;
                        line-height: 20px;
                        font-weight: 400;
                        text-align: center;
                        margin-bottom: 12px;
                        text-transform: uppercase;
                        color: #464B54;
                    }

                    p{
                        font-size: 20px;
                        line-height: 23px;
                        text-align: center;
                        color: #787D83;
                        margin-bottom: 25px;

                        @media screen and (max-width: 768px) {
                            font-size: 16px;                            
                        }
                    }

                    form{
                        width: 100%;
                        max-width: 100%;

                        input{
                            width: 100%;
                            max-width: 100%;
                            height: 40px;
                            border: 1px solid #D8D8D8;
                            border-radius: 10px;
                            padding: 0 13px;
                            color: #787D83;
                            margin-bottom: 10px;
                            @media screen and (max-width: 768px) {
                                border-radius: 5px;                                
                            }

                            &::placeholder, &::-moz-placeholder{
                                color: #787D83;
                                opacity: 1;
                            }
                        }

                        button{
                            width: 100%;
                            max-width: 100%;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background-color: #FAA500;
                            color: #fff;
                            font-size: 12px;
                            line-height: 20px;
                            gap: 8px;
                            font-weight: 700;
                            border-radius: 10px;
                            text-transform: uppercase;
                            cursor: pointer;
                        }

                    }
                }
            }
        }
    }
</style>
