import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Page extends PureComponent {
    static propTypes = {
        pageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        pageNumber: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        isActive: PropTypes.bool.isRequired,
        isDisabled: PropTypes.bool,
        activeClass: PropTypes.string,
        itemClass: PropTypes.string,
        disabledClass: PropTypes.string,
    };

    static defaultProps = {
        activeClass: 'active',
        disabledClass: 'disabled',
        itemClass: undefined,
        isActive: false,
        isDisabled: false,
    };

    handleClick = (e) => {
        const { isDisabled, pageNumber } = this.props;
        e.preventDefault();
        if (isDisabled) {
            return;
        }
        this.props.onClick(pageNumber);
    };

    render() {
        const { pageText, activeClass, itemClass, disabledClass, isActive, isDisabled } = this.props;

        const css = classnames('pagination__item', itemClass, {
            [activeClass]: isActive,
            [disabledClass]: isDisabled,
        });

        return (
            <li className={css} onClick={this.handleClick}>
                {pageText}
            </li>
        );
    }
}
