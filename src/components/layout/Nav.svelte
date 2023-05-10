<script>
  export let selectedPageIndex = -1
  let navPageButtons = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Projects',
      link: '/projects'
    }
    // {
    //   name: 'Useful links',
    //   link: '/links'
    // }
  ]
</script>

<header>
  <nav
    className="fixed z-50 top-0 w-full border-b border-neutral-200 backdrop-blur-md"
  >
    <div className="page_width_wide relative mx-auto h-12">
      <div
        className="relative h-full w-auto text-center text-sm font-semibold text-black"
      >
        {#if navPageButtons}
          {#each navPageButtons as { name, link }, index}
            <a href={link}>
              <div className="nav_page_button">
                <div className="inline-block text-sm font-normal">{name}</div>
                {#if selectedPageIndex === index}
                  <div className="mx-auto arrow-up" />
                {/if}
              </div>
            </a>
          {/each}
        {/if}
      </div>
    </div>
  </nav>
</header>
