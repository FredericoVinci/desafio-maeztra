<script>
    import { base } from '$app/paths';
    import HeaderMenu from './HeaderMenu.svelte';
    import Navbar from './Navbar.svelte';

    let searchbarOpen = false;
    const toggleSearchbar = (e) => {
        searchbarOpen = !searchbarOpen;
    }

    let menuOpen = false;
    const toggleMenu = (e) => {
        menuOpen = !menuOpen;
    }
    const closeMenu = (e) => {
        menuOpen = false
    }
</script>

<header>
    <div class="top-bar">
        <div class="max-container top-bar__container">
            <a href="#">
                Acompanhe as melhores promoções disponíveis aqui na Maeztra.
            </a>
        </div>
    </div>

    <div class="main-header">
        <div class="max-container main-header__container">
            <button class="menu-toggler" on:click={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23.0625 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H23.0625C23.5803 12.9375 24 12.5178 24 12C24 11.4822 23.5803 11.0625 23.0625 11.0625Z" fill="black"/>
                    <path d="M23.0625 3.5625H0.9375C0.419719 3.5625 0 3.98222 0 4.5C0 5.01778 0.419719 5.4375 0.9375 5.4375H23.0625C23.5803 5.4375 24 5.01778 24 4.5C24 3.98222 23.5803 3.5625 23.0625 3.5625Z" fill="black"/>
                    <path d="M23.0625 18.5625H0.9375C0.419719 18.5625 0 18.9822 0 19.5C0 20.0178 0.419719 20.4375 0.9375 20.4375H23.0625C23.5803 20.4375 24 20.0178 24 19.5C24 18.9822 23.5803 18.5625 23.0625 18.5625Z" fill="black"/>
                </svg>
            </button>

            <div class="logo">
                <a href="{base}/">
                    <img src="{base}/assets/logo-maeztra.png" alt="Maeztra">
                </a>
            </div>
    
            <form class="searchbar" class:open={searchbarOpen}>
                <input type="text" placeholder="O Que Você Busca?" name="search">
                <button type="submit">
                    Buscar
                </button>
            </form>
    
            <div class="controls">
                <a href="#" class="control">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.8 9.5C8.90312 9.5 8.47188 10 7 10C5.52812 10 5.1 9.5 4.2 9.5C1.88125 9.5 0 11.3813 0 13.7V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.7C14 11.3813 12.1187 9.5 9.8 9.5ZM12.5 14.5H1.5V13.7C1.5 12.2125 2.7125 11 4.2 11C4.65625 11 5.39687 11.5 7 11.5C8.61563 11.5 9.34062 11 9.8 11C11.2875 11 12.5 12.2125 12.5 13.7V14.5ZM7 9C9.48438 9 11.5 6.98438 11.5 4.5C11.5 2.01562 9.48438 0 7 0C4.51562 0 2.5 2.01562 2.5 4.5C2.5 6.98438 4.51562 9 7 9ZM7 1.5C8.65312 1.5 10 2.84687 10 4.5C10 6.15312 8.65312 7.5 7 7.5C5.34688 7.5 4 6.15312 4 4.5C4 2.84687 5.34688 1.5 7 1.5Z" fill="#353535"/>
                    </svg>
                    <span>Minha Conta</span>
                </a>
    
                <a href="#" class="control">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.367 1.15404C14.3033 -0.581202 11.1148 -0.320559 9.14037 1.68961C7.16591 -0.320559 3.97749 -0.584772 1.91377 1.15404C-0.771215 3.41414 -0.378464 7.09885 1.5353 9.05189L7.79788 15.4323C8.15493 15.7965 8.63337 16 9.14037 16C9.65095 16 10.1258 15.8001 10.4829 15.4359L16.7454 9.05546C18.6556 7.10242 19.0555 3.41771 16.367 1.15404ZM15.5244 7.84865L9.26177 14.2291C9.17608 14.3147 9.10467 14.3147 9.01898 14.2291L2.7564 7.84865C1.45318 6.52044 1.18897 4.00683 3.01704 2.46797C4.40595 1.30043 6.54822 1.47538 7.89071 2.84287L9.14037 4.11752L10.39 2.84287C11.7397 1.46824 13.8819 1.30043 15.2637 2.4644C17.0882 4.00326 16.8169 6.53115 15.5244 7.84865Z" fill="#353535"/>
                    </svg>
                    <span>Minha Lista</span>
                </a>
    
                <a href="#" class="control control--cart">
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3755 15.4741L13.1128 3.89368C13.0864 3.65125 12.8742 3.46716 12.6211 3.46716H10.248V2.94604C10.248 1.32166 8.8757 0 7.18914 0C5.50244 0 4.1302 1.32166 4.1302 2.94604V3.46716H1.75706C1.50395 3.46716 1.29179 3.65125 1.2653 3.89368L0.00268441 15.4741C-0.011891 15.6083 0.0333562 15.7422 0.127019 15.8425C0.220809 15.9427 0.354396 16 0.494447 16H13.8836C14.0237 16 14.1573 15.9427 14.251 15.8425C14.3449 15.7422 14.39 15.6083 14.3755 15.4741ZM5.11904 2.94604C5.11904 1.8468 6.04769 0.952393 7.18914 0.952393C8.33046 0.952393 9.2591 1.8468 9.2591 2.94604V3.46716H5.11904V2.94604ZM1.0435 15.0476L2.20231 4.41956H4.1302V5.46899C4.1302 5.73193 4.35161 5.94519 4.62462 5.94519C4.89762 5.94519 5.11904 5.73193 5.11904 5.46899V4.41956H9.2591V5.46899C9.2591 5.73193 9.48052 5.94519 9.75353 5.94519C10.0265 5.94519 10.248 5.73193 10.248 5.46899V4.41956H12.1758L13.3346 15.0476H1.0435Z" fill="#353535"/>
                    </svg>
                    <span>Meu Carrinho</span>
                </a>
            </div>
            <div class="controls-mobile">
                <button class="search-toggle control" on:click="{toggleSearchbar}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M23.8535 22.4395L16.8817 15.4677C18.204 13.8351 19 11.7597 19 9.50004C19 4.26175 14.7383 0 9.49999 0C4.2617 0 0 4.26175 0 9.50004C0 14.7383 4.26175 19.0001 9.50004 19.0001C11.7597 19.0001 13.8351 18.204 15.4677 16.8817L22.4395 23.8536C22.6348 24.0488 22.9513 24.0488 23.1467 23.8536L23.8536 23.1466C24.0488 22.9513 24.0488 22.6347 23.8535 22.4395ZM9.50004 17.0001C5.3643 17.0001 2.00002 13.6358 2.00002 9.50004C2.00002 5.3643 5.3643 2.00002 9.50004 2.00002C13.6358 2.00002 17.0001 5.3643 17.0001 9.50004C17.0001 13.6358 13.6358 17.0001 9.50004 17.0001Z" fill="black"/>
                    </svg>
                </button>
                <a href="#" class="cart control">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                        <path d="M20.7682 23.2112L18.9441 5.84052C18.9059 5.47687 18.5993 5.20074 18.2337 5.20074H14.8052V4.41907C14.8052 1.98248 12.8227 0 10.3861 0C7.94937 0 5.96689 1.98248 5.96689 4.41907V5.20074H2.53842C2.17276 5.20074 1.86624 5.47687 1.82797 5.84052L0.00387816 23.2112C-0.017179 23.4124 0.0481897 23.6133 0.183505 23.7638C0.319003 23.9141 0.511996 24 0.714327 24H20.0576C20.2601 24 20.4531 23.9141 20.5884 23.7638C20.7241 23.6133 20.7893 23.4124 20.7682 23.2112ZM7.39548 4.41907C7.39548 2.7702 8.73709 1.42859 10.3861 1.42859C12.035 1.42859 13.3766 2.7702 13.3766 4.41907V5.20074H7.39548V4.41907ZM1.50754 22.5714L3.18167 6.62933H5.96689V8.20349C5.96689 8.5979 6.28678 8.91779 6.68119 8.91779C7.07559 8.91779 7.39548 8.5979 7.39548 8.20349V6.62933H13.3766V8.20349C13.3766 8.5979 13.6965 8.91779 14.0909 8.91779C14.4853 8.91779 14.8052 8.5979 14.8052 8.20349V6.62933H17.5904L19.2646 22.5714H1.50754Z" fill="black"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <Navbar />

</header>
<HeaderMenu isOpen={menuOpen} {closeMenu} />

<style lang="scss">
    header {
       background-color: #fff;

       .top-bar {
           background-color: #353535;
           color: #fff;

           &__container {
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 12px;
               line-height: 2;

               @media screen and (max-width: 768px) {
                   font-size: 10px;
                   line-height: 18px;
                   padding: 3px 0;
               }

               a{
                text-align: center;
               }
           }
       }

       .main-header {
            padding: 21px 0;
            position: relative;
            @media (max-width: 991px) {
                padding: 27px 0;
            }


           &__container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                @media (max-width: 991px) {
                    gap: 15px;
                    width: calc(100% - 32px);
                }

                button.menu-toggler{
                        display: none;
                        @media (max-width: 991px) {
                            flex-shrink: 0;
                            display: block;
                            padding: 5px;
                            cursor: pointer;
                        }

                        svg{
                            display: block;
                        }
                }

                .logo {
                        flex-shrink: 0;
                        flex-grow: 0;
                        padding-top: 2px;
                        @media (max-width: 991px) {
                            padding-top: 0;
                            width: 110px;
                            margin-right: auto;
                        }
                        a{
                            display: block;
                            img{
                                width: 100%;
                                max-width: 100%;
                                display: block;
                                height: auto;
                            }
                        }
                }

                form.searchbar{
                    flex-basis: 791px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 60px;
                    @media screen and (max-width: 991px) {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 100%;
                        z-index: 10;
                        width: 100%;
                        background-color: #fff;
                        padding: 10px 20px;
                        height: 60px;
                        margin-right: 0;
                        box-sizing: border-box;
                        display: none;
                        &.open{
                            display: flex;
                        }
                    }

                    input{ 
                        height: 100%;
                        border: none;
                        padding: 0 24px;
                        //border: 1px solid transparent;
                        border-radius: 8px 0px 0px 8px;
                        border-right: none;
                        width: 100%;
                        font-size: 12px;
                        line-height: 18px;
                        color: #353535;
                        @media (max-width: 991px) {
                            max-width: 500px;
                        }
                        
                        &::placeholder, &::-moz-placeholder{
                            color: #353535;
                            opacity: 1;

                        }

                        &:focus{
                            //border-color: #cccccccc;
                        }
                    }
                    button{
                        background-color: #FAA500;
                        width: 119px;
                        border-radius: 8px;
                        height: 100%;
                        font-size: 14px;
                        color: #fff;
                        flex-shrink: 0;
                        cursor: pointer;
                    }
               }

               .controls {
                    display: flex;
                    align-items: center;
                    justify-content: end;
                    gap: 40px;
                    color: #353535;
                    flex-shrink: 0;
                    @media screen and (max-width: 991px) {
                        display: none;
                    }
                    .control{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        flex-shrink: 0;

                        >svg{
                            display: block;
                        }
                        >span{
                            font-size: 14px;
                            line-height: 20px;
                            padding-bottom: 1px;
                        }

                        &--cart{
                            border: 1px solid #FAA500;
                            border-radius: 8px;
                            padding: 11px 14px 12px 16px;
                            margin-left: 8px;
                        }
                    }
                }
                .controls-mobile{
                    display: none;
                    @media (max-width: 991px) {
                        display: flex;
                        align-items: center;
                        gap: 30px;

                        .control{
                            padding: 5px;
                            &.search-toggle{
                                cursor: pointer;
                            }
                        }
                        svg{
                            display: block;
                        }
                    }
                }
            }
        }
    }
</style>