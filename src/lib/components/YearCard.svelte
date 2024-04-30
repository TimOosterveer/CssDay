<script>
	// @ts-nocheck
  import { onMount } from 'svelte';
	import IntroCard from './IntroCard.svelte';
	export let data;

  function removePopUp(e) {
		e.target.closest('.year-card__wrapper').querySelector('.pop-over').style.display = 'none';
  }

	function showPopup(e) {
		e.target.closest('.year-card__wrapper').querySelector('.pop-over').style.display = 'block';
	}

</script>

<div class="year-card">
		<IntroCard />

		{#each Object.entries(data) as [year, details]}
				<button
					class="year-card__wrapper"
					style="background-color: {details.color.hex};"
				>
						<div class="year-card__inner-wrapper">
								<span class="year-card__label">{year}</span>
								<h1 class="year-card__title">{details.title}</h1>

								<button on:click={showPopup} class="year-card__button-main-site">hover or click</button>
						</div>

						<div class="pop-over">
								<button on:click={removePopUp}>Close</button>
								{#each details.speakers as speaker}
										<div class="pop-over__wrapper">
												<p>{speaker.name}</p>
												<img src={speaker.avatar} alt="picture of person">
												<a target="_blank" class="pop-over__link" href={speaker.talk.video['youtube-link']} aria-label="youtube video"/>
										</div>
								{/each}
						</div>
				</button>

		{/each}
</div>

<style>
	.year-card {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
	}

	.year-card__wrapper {
			position: relative;
			display: flex;
			align-items: end;
			flex-grow: 1;
			min-width: calc(100% / 5);
			min-height: 40vh;
			padding: 4rem;
			border-radius: 1rem;
			color: white;
			border: 2px dotted white;
	}

	.year-card__wrapper:hover .pop-over {
			display: block;
	}

	.year-card__inner-wrapper {
			display: flex;
			flex-direction: column;
			align-items: baseline;
			gap: 1rem;
	}

	.year-card__button-main-site {
			padding: 0.5rem 3rem 0.5rem 3rem;
			width: fit-content;
			border-radius: 1rem;
			border: 1px solid white;
			background-color: transparent;
			color: white;
	}

	.year-card__link {
			text-decoration: none;
			color: white;
	}

	.pop-over {
			display: none;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			border-radius: 1rem;
			transition: .5s;
			overflow-y: scroll;
			background-color: rgba(0, 0, 0, 0.899);
			padding: 1rem;
	}

	.pop-over__wrapper {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			padding: 1rem;
	}

	.pop-over__link {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
	}

	.pop-over img {
			width: 5rem;
			height: 5rem;
	}

</style>
