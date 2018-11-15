function getRoute() {
  const pages = getCurrentPages()
  if (pages.length === 0) return {}
  const nowPage = pages[pages.length - 1]
  return {
    path: nowPage.route,
    query: this.$root.$mp.query,
    pages
  }
}

export default getRoute
