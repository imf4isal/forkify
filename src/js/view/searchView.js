class SearchView {
  #parelEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parelEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parelEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parelEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
