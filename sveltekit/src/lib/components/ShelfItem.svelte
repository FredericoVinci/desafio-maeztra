<script>
    export let product;
    const {name, imageUrl, description, price, colors} = product
</script>

<article class="shelf-item">
    <div class="product-image">
        <a href="#" title={name}>
            <img src={imageUrl} alt={name}>
        </a>
    </div>
    <div class="info">
        <fieldset class="colors">
            {#each colors as color}
                <input type="radio" name="color" value={color} style="--color: {color}">
            {/each}
        </fieldset>
        <p class="price">
            {price}
        </p>
        <h3 class="name">
            <a href="#" title={name}>
                {name}
            </a>
        </h3>
        <p class="description">
            {description}
        </p>
        <button class="add-to-cart">
            Adicionar
        </button>
    </div>
</article>

<style lang="scss">
    .shelf-item{
        height: 100%;   
        display: grid;
        grid-template-rows: auto 1fr;
        .product-image{
            width: 100%;
            img{
                height: auto;
                display: block;
                max-width: 100%;
                width: 100%;
            }
        }
        .info{
            padding: 8px  27px  16px;
            display: flex;
            align-items: stretch;
            flex-direction: column;


            .colors{
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 8px;
    
                input{
                    border-radius: 4px;
                    appearance: none;
                    width: 27px;
                    height: 27px;
                    background-color: var(--color);
                    display: block;
                    border: 1px solid transparent;
                    box-sizing: border-box;
                    cursor: pointer;
                    margin: 0;
    
                    &:checked{
                        border-color: #353535;
                    }
                }
            }
            .price{
                color: #353535;
                font-size: 20px;
                line-height: 24px;
                font-weight: 700;
                margin-bottom: 8px;
            }
            .name{
                font-size: 16px;
                line-height: 24px;
                font-weight: 400;
                margin-bottom: 8px;
            }
            .description{
                font-size: 12px;
                line-height: 18px;
                opacity: 50%;
                margin-bottom: 8px;
                min-height: 54px;
                max-width: 247px;
                margin-top: auto;
            }
            .add-to-cart{
                background-color: #FAA500;
                color: #fff;
                border: none;
                border-radius: 4px;
                width: 100%;
                height: 35px;
                font-size: 16px;
                cursor: pointer;
                margin-top: auto;
            }
        }

    }
</style>