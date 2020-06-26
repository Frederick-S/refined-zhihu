const titleImage = document.querySelector('.TitleImage')

if (titleImage) {
  titleImage.remove()
}

document.querySelectorAll('a.external, a.LinkCard')
  .forEach(link => {
    const href = link.getAttribute('href')

    if (href.startsWith('https://link.zhihu.com/?target=')) {
      link.setAttribute('href', decodeURIComponent(href.split('target=')[1]))
    }
  })
