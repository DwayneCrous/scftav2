<script lang="ts">
  const slides = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original.svg",
    },
  ];
</script>

<main>
  <!-- Header Section -->
  <div class="header">
    <div class="left-text">
      <h1 class="text">SCFTA V2</h1>
      <p class="text">A new version of the coolest finance tracker</p>
    </div>
    <div class="center-text">
      <div class="links">
        <a href="">Home</a>
        <a href="">Tech Stack</a>
        <a href="">Features</a>
        <a href="">FAQ's</a>
        <a href="">About Us</a>
      </div>
    </div>
    <div class="right-buttons">
      <a href="" class="get-started-button button">Get started</a>
      <a href="" class="sign-in-button button">Sign In</a>
    </div>
  </div>

  <!-- Hero Section -->
  <div class="hero-section">
    <h1 class="hero-header">Welcome to a better way to track your finances</h1>
  </div>
  <div class="hero-section-buttons">
    <a href="" class="button">Get started</a>
    <a href="" class="button">Sign In</a>
  </div>

  <!-- Tech Stack Carousel -->
  <div class="carousel">
    <div class="slide-track">
      {#each slides as slide}
        <div class="slide">
          <img src={slide.src} height="100" width="250" alt="" />
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  :root {
    --shadow-s: inset 0 1px 2px #ffffff30, 0 1px 2px #00000030,
      0 2px 4px #00000015;

    --shadow-m: inset 0 1px 2px #ffffff50, 0 2px 4px #00000030,
      0 4px 8px #00000015;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;

    background: rgba(34, 34, 34, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    position: sticky;
    top: 0;
  }

  .left-text {
    color: white;
    margin: 0;
  }

  .links a {
    padding: 5px 12px;
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: opacity 0.2s ease;
  }

  .links a:hover {
    opacity: 0.7;
  }

  .right-buttons {
    display: flex;
    gap: 10px;
  }

  .right-buttons a,
  a {
    text-decoration: none;
    color: white;
  }

  .get-started-button,
  .sign-in-button,
  .button {
    padding: 12px 20px;
    border-radius: 12px;
    border: none;
    background: #444;
    color: white;

    box-shadow: var(--shadow-s);

    transition:
      box-shadow 0.25s ease,
      transform 0.2s ease;
  }

  .get-started-button:hover,
  .sign-in-button:hover,
  .button:hover {
    box-shadow: var(--shadow-m);
    transform: translateY(-2px);
  }

  .get-started-button:active,
  .sign-in-button:active,
  .button:active {
    transform: translateY(0);
    box-shadow: var(--shadow-s);
  }

  .hero-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
  }

  .hero-header {
    color: white;
    font-size: clamp(2.5rem, 5vw, 4rem);
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-section-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 80px;
  }

  .carousel {
    position: relative;
    width: min(900px, 95vw);
    height: 100px;
    margin: 0 auto 60px auto;
    overflow: hidden;

    border-radius: 16px;

    background: rgba(34, 34, 34, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    box-shadow: var(--shadow-s);
  }

  .carousel::before,
  .carousel::after {
    content: "";
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
    pointer-events: none;

    background: linear-gradient(
      to right,
      rgba(34, 34, 34, 1) 0%,
      rgba(34, 34, 34, 0) 100%
    );
  }

  .carousel::after {
    right: 0;
    transform: rotateZ(180deg);
  }

  .carousel::before {
    left: 0;
  }

  .slide-track {
    display: flex;
    width: calc(250px * 14);
    animation: scroll 40s linear infinite;
  }

  .slide {
    width: 250px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;
  }

  .slide img {
    height: 80px;
    padding-bottom: 20px;
    width: auto;

    filter: brightness(0.85) contrast(1.1);
    transition:
      transform 0.2s ease,
      filter 0.2s ease;
  }

  .slide img:hover {
    transform: translateY(-2px);
    filter: brightness(1) contrast(1.15);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
</style>
