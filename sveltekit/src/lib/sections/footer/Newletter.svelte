<div class="newsletter">
    <div class="max-container">
        <div class="newsletter__container">
            <h2>Recebe Nossa Newsletter</h2>
            <form class="newsletter__form">
                <input type="text" placeholder="Digite seu e-mail">
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
</div>

<style lang="scss">
    .newsletter {
        padding: 40px 0;

        &__container {
            max-width: 952px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 15px;


            h2{
                min-width: 307px;
                font-size: 24px;
            }

            .newsletter__form {
                flex-grow: 1;
                display: flex;
                height: 40px;

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
                }
            }
        }
    }
</style>