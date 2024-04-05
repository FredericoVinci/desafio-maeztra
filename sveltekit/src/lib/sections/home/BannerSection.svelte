<script>
    import { base } from '$app/paths';
</script>

<section class="banner-section">
    <div class="max-container banner-section__container">
        <div class="left">
            <h2>Lorem ipsum </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
        </div>
        <div class="right">
            <a href="#">
                <img src="{base}/assets/banner01.png" alt="">
            </a>
        </div>
    </div>
</section>
           
<style lang="scss">
    .banner-section{
        margin-bottom: 80px;
        &__container{
            display: grid;
            grid-template-columns: 1fr 2.3fr;
            align-items: center;

            .left{
                padding-right: 64px;
                h2{
                    font-size: 24px;
                    line-height: 37px;
                    margin-bottom: 16px;
                }
                p{
                    font-size: 14px;
                    line-height: 21px;
                }

            }
            .right{
                a{
                    display: block;
                }
                img{
                    max-width: 100%;
                    width: 100%;
                    height: auto;
                    display: block;
                }
            }
        }
    }
</style>
                