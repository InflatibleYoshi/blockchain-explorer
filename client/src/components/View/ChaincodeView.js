/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Chaincodes from '../Lists/Chaincodes';
import {
    getChaincodes,
    getChannelSelector,
    getCountHeader
} from '../../store/selectors/selectors';
import { countHeader } from '../../store/actions/header/action-creators';
import { chaincodes } from '../../store/actions/chaincodes/action-creators';

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 42,
        position: 'relative',
    },
    card: {
        height: 250,
        minWidth: 1290,
        margin: 20,
        textAlign: 'left',
        display: 'inline-block',
    },
    title: {
        fontSize: 16,
        color: theme.palette.text.secondary,
        position: 'absolute',
        left: 40,
        top: 60
    },
    content: {
        fontSize: 12,
        color: theme.palette.text.secondary,
        position: 'absolute',
        left: 40,
        top: 70
    }
});

export class ChaincodeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: 'Network',
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="view-fullwidth" >
                <div className="view-display">
                    <Chaincodes channel={this.props.channel}
                        countHeader={this.props.countHeader}
                        chaincodes={this.props.chaincodes}
                        getChaincodes={this.props.getChaincodes} />
                </div>
            </div>
        );
    }
}


ChaincodeView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect((state) => ({
    channel: getChannelSelector(state),
    countHeader: getCountHeader(state),
    chaincodes: getChaincodes(state)
}),
    {
        getChaincodes: chaincodes,
        getCountHeader: countHeader,
    }))(ChaincodeView);