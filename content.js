document.querySelector('.TitleImage').remove()
document.querySelectorAll('a.external')
  .forEach(link => {
    const href = link.getAttribute('href')

    link.setAttribute('href', decodeURIComponent(href.split('target=')[1]))
  })
