<script>
	// @ts-nocheck
  import { onMount } from 'svelte';
	import IntroCard from './IntroCard.svelte';
	export let data;

	let selectedYear = null;

	function selectYear(year) {
		  selectedYear = year;
	}
  function removePopUp() {
      selectedYear = null;
  }

</script>

<div class="year-card">
		<IntroCard />

		{#each Object.entries(data) as [year, details]}
				<button
					class="year-card__wrapper"
					on:click={() => selectYear(year)}
					style="background-color: {details.color.hex};"
				>
						<div class="year-card__inner-wrapper">
								<span class="year-card__label">{year}</span>
								<h1 class="year-card__title">{details.title}</h1>

								<button class="year-card__button-main-site"
									><a class="year-card__link" target="_blank" href={details.link} aria-label="hover over">hover or click</a>
								</button>
						</div>

						<div class="pop-over">
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

	<!-- {#if selectedYear !== null}
  {console.log(selectedYear)}
      <div class="year-card__pop-up">
          <h2>Sprekers van {selectedYear}:</h2>

          <ul>
              {#each data[selectedYear].speakers as speaker}
                  <li>{speaker.name}</li>
              {/each}
          </ul>

          <button on:click={removePopUp} tabindex="1">
            <svg class="year-card__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g><g id="SVGRepo_iconCarrier">
                <path
                  d="M19 5L4.99998 19M5.00001 5L19 19"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g></svg
            >
          </button>
      </div>
	{/if} -->
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

	.year-card__wrapper:hover, .year-card__wrapper:active  .pop-over {
			opacity: 1;
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
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			border-radius: 1rem;
			opacity: 0;
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
