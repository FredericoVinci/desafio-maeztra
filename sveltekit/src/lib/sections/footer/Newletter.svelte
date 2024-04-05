<div class="newsletter">
    <div class="max-container">
        <div class="newsletter__container">
            <h2>Recebe Nossa Newsletter</h2>
            <form class="newsletter__form">
                <input type="email" placeholder="Digite seu e-mail" name="email" required>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
</div>

<style lang="scss">
    .newsletter {
        padding: 40px 0;
        @media (max-width: 768px) {
            padding: 24px 0;
        }

        &__container {
            max-width: 952px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 15px;
            @media (max-width: 768px) {
                flex-direction: column;
                align-items: stretch;
                gap: 8px;
            }


            h2{
                min-width: 307px;
                font-size: 24px;
                @media (max-width: 768px) {
                    text-align: center;
                    color: #353535;
                    line-height: 36px;
                    min-width: unset;
                }
            }

            .newsletter__form {
                flex-grow: 1;
                display: flex;
                justify-content: center;
                height: 40px;
                @media (max-width: 768px) {
                    gap: 15px;
                    height: 26px;
                }
                @media (max-width: 320px) {
                    flex-wrap: wrap;
                }

                input{
                    box-sizing: border-box;
                    flex-grow: 1;
                    height: 100%;
                    padding: 0 24px;
                    border: 1px solid #353535;
                    border-right: none;
                    border-radius: 4px 0px 0px 4px;
                    font-size: 14px;
                    line-height: 18px;
                    color: #353535;
                    @media (max-width: 768px) {
                        max-width: 300px;
                        border: 1px solid #353535;
                        border-radius: 4px;
                        flex-shrink: 1;
                    }
                    
                    &::placeholder, &::-moz-placeholder{
                        color: #353535;
                        opacity: 1;

                    }
                }
                button{
                    width: 131px;
                    height: 100%;
                    color: #fff;
                    background-color: #FAA500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    font-weight: 700;
                    position: relative;
                    left: -4px;
                    border-radius: 4px;
                    cursor: pointer;
                    @media (max-width: 768px) {
                        width: 79px;
                        height: 26px;
                        font-size: 14px;
                        left: 0px;
                        flex-shrink: 0;
                    }
                }
            }
        }
    }
</style>