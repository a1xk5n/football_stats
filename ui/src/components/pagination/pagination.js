import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import paginator from 'paginator';

import Page from './page';

import './pagination.scss';

export default class Pagination extends React.PureComponent {
    static propTypes = {
        totalItemsCount: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired,
        activePage: PropTypes.number,
        itemsCountPerPage: PropTypes.number,
        pageRangeDisplayed: PropTypes.number,
        prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        innerClass: PropTypes.string,
        itemClass: PropTypes.string,
        activeClass: PropTypes.string,
        disabledClass: PropTypes.string,
    };

    static defaultProps = {
        itemsCountPerPage: 10,
        pageRangeDisplayed: 5,
        activePage: 1,
        prevPageText: '«',
        nextPageText: '»',
        innerClass: 'pagination',
        itemClass: undefined,
    };

    buildPages() {
        const pages = [];
        const {
            itemsCountPerPage,
            pageRangeDisplayed,
            activePage,
            prevPageText,
            nextPageText,
            totalItemsCount,
            onChange,
            activeClass,
            itemClass,
            disabledClass,
        } = this.props;

        const paginationInfo = new paginator(itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

        if (paginationInfo.first_page !== paginationInfo.last_page) {
            for (let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
                pages.push(
                    <Page
                        isActive={i === activePage}
                        key={i}
                        pageNumber={i}
                        pageText={`${i}`}
                        onClick={onChange}
                        itemClass={itemClass}
                        activeClass={activeClass}
                    />,
                );
            }
        }
        pages.unshift(
            <Page
                key={`prev${paginationInfo.previous_page}`}
                pageNumber={paginationInfo.previous_page}
                onClick={onChange}
                pageText={prevPageText}
                isDisabled={!paginationInfo.has_previous_page}
                itemClass={itemClass}
                disabledClass={disabledClass}
            />,
        );

        pages.push(
            <Page
                key={`next${paginationInfo.next_page}`}
                pageNumber={paginationInfo.next_page}
                onClick={onChange}
                pageText={nextPageText}
                isDisabled={!paginationInfo.has_next_page}
                itemClass={itemClass}
                disabledClass={disabledClass}
            />,
        );

        return pages;
    }

    render() {
        const pages = this.buildPages();
        return <ul className={this.props.innerClass}>{pages}</ul>;
    }
}
