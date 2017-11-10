import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './checkbox.scss';

export default class Checkbox extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        className: PropTypes.string,
        isSelected: PropTypes.bool,
    };

    static defaultProps = {
        className: '',
    };

    onClick = () => {
        this.props.onChange(this.props.item);
    };

    render() {
        const checkBoxClasses = classNames('checkbox-container__checkbox fa', {
            'fa-star': this.props.isSelected,
            'fa-star-o': !this.props.isSelected,
        });
        const containerClasses = classNames('checkbox-container', this.props.className);

        return (
            <div className={containerClasses}>
                <div className={checkBoxClasses} onClick={this.onClick} />
            </div>
        );
    }
}
