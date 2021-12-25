import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resutlPerPage
    );

    // page 1,and other pages
    if (currPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
    }

    // Last page
    if (currPage === numPages && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <span>Page ${currPage - 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
          </button>
      `;
    }

    // other pages
    if (currPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
            <span>Page ${currPage - 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
        </button>
        <button class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    // only one page

    return 'no more item left';

    console.log(numPages);
  }
}

export default new PaginationView();
