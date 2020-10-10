export function render($: cheerio.Root) {
  return $('body').children().text()

  // return staticMarkup
  //   .replace(/&#x27;/g, "'")
  //   .replace(/<style>[\s\S]+<\/style>/g, '')
  //   .replace(/<li>/g, '- ')
  //   .replace(/<span data-plain-txt="(.+?)">/g, '$1')
  //   .replace(/<span data-plain-txt-newline="true">/g, '\n')
  //   .replace(/<a.+?href="(.+?)">[\s\S]+?<\/a>/g, '$1\n')
  //   .replace(/<\/h[1-6]>/g, '\n\n')
  //   .replace(/<\/p>/g, '\n\n')
  //   .replace(/<\/li>/g, '\n')
  //   .replace(/<\/ul>/g, '\n')
  //   .replace(/<br>/g, '\n')
  //   .replace(/<.+?>/g, '')
}
