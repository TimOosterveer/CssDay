<script>
    import pic from '$lib/assets/cssdaypic.jpeg'
</script>

<section class="intro-card">
    <div class="intro-card__inner-wrapper">
        <span class="intro-card__label">Css day</span>
        <h1 class="intro-card__title">CSS Day is a focused, advanced CSS conference</h1>
        <button class="intro-card__button-main-site"><a class="intro-card__link" target="_blank" href="https://cssday.nl/">main site</a></button>
    </div>

    <div class="intro-card__img-wrapper">
        <img class="intro-card__image" src={pic} alt="picture off css day">
    </div>
</section>

<style>

.intro-card {
    position: relative;
    display: flex;
    align-items: end;
    flex-shrink: 3;
    width: calc(100% / 1.5);
    height: 70vh;
    padding: 4rem;
    border-radius: 1rem;
    color: white;
}

.intro-card__inner-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.intro-card__title {
    font-size: 4rem;
}

.intro-card__link {
    text-decoration: none;
    color: white;
}

.intro-card__button-main-site {
    padding: .5rem 3rem .5rem 3rem;
    width: fit-content;
    border-radius: 1rem;
    border: 1px solid white;
    background-color: transparent;
    color: white;
}

.intro-card__img-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
    z-index: -1;
}

.intro-card__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    z-index: -1;
}


</style>