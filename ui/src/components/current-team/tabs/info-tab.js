import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../pagination/pagination';
import { ItemsPerPage, PageRangeDisplayed } from '../../../constants/current-team-constants';

import Player from '../player/player';

import './info-tab.scss';

class InfoTab extends PureComponent {
    static propTypes = {
        onChangeSelectedPage: PropTypes.func,
        selectedPage: PropTypes.number,
    };

    getTeamSquadContent = () =>
        (this.props.players.count() ? (
            <div className='info-tab__block-container'>
                <div className='info-tab__title'>Team Squad</div>
                <Pagination
                    totalItemsCount={this.props.delaultPlayersCount}
                    onChange={this.props.onChangeSelectedPage}
                    activePage={this.props.selectedPage}
                    itemsCountPerPage={ItemsPerPage}
                    pageRangeDisplayed={PageRangeDisplayed}
                />
                <div className='info-tab__players'>
                    {this.props.players.map((player, index) => <Player key={index} playerInfo={player} />)}
                </div>
                <Pagination
                    totalItemsCount={this.props.delaultPlayersCount}
                    onChange={this.props.onChangeSelectedPage}
                    activePage={this.props.selectedPage}
                    itemsCountPerPage={ItemsPerPage}
                    pageRangeDisplayed={PageRangeDisplayed}
                />
            </div>
        ) : null);

    getTwitterComments = () => (
        <div className='info-tab__block-container'>
            <div className='info-tab__title'>
                Twitter are not available <br /> (coming soon)
            </div>
        </div>
    );

    render() {
        return (
            <div>
                {this.getTeamSquadContent()}
                {this.getTwitterComments()}
            </div>
        );
    }
}

export default InfoTab;
