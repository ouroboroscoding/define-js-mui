/**
 * Define Node Datetime
 *
 * Handles a single datetime define element
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-02-17
 */
// NPM modules
import React from 'react';
// Material UI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// Local components
import DefineNodeBase from './Base';
/**
 * Node Datetime
 *
 * Handles values that represent a date with a time
 *
 * @name DefineNodeDatetime
 * @access public
 * @extends DefineNodeBase
 */
export default class DefineNodeDatetime extends DefineNodeBase {
    /**
     * Constructor
     *
     * Creates a new instance
     *
     * @name DefineNodeDatetime
     * @access public
     * @param props Properties passed to the component
     * @returns a new instance
     */
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
    }
    /**
     * Change
     *
     * Called when the node value changes
     *
     * @name change
     * @access public
     * @param part The part of the date/time
     * @param value The new value
     */
    change(part, value) {
        // Init the new value
        let newDatetime;
        // If we got the date part
        if (part === 'date') {
            newDatetime = value + ' ' + this.state.value.substring(11, 19);
        }
        else {
            newDatetime = this.state.value.substring(0, 10) + ' ' + value;
        }
        // Check if it's valid
        let error = false;
        if (this.props.validation && !this.props.node.valid(newDatetime)) {
            error = this.props.node.validationFailures[0][1];
        }
        // If there's a callback
        if (this.props.onChange) {
            this.props.onChange(newDatetime, this.state.value);
        }
        // Update the state
        this.setState({
            error,
            value: newDatetime
        });
    }
    /**
     * Render
     *
     * Generates the actual DOM elements of the component
     *
     * @name render
     * @access public
     */
    render() {
        // If there's an error, and we have custom error messages, and the error
        //	is in the list, use it instead of the default string
        let sError = this.state.error;
        if (typeof this.state.error === 'string') {
            sError = this.props.display.errors && this.state.error in this.props.display.errors ?
                this.props.display.errors[this.state.error] :
                this.state.error;
        }
        // Render
        return (React.createElement(Box, { className: `field_${this.props.name} node_datetime` },
            this.props.label === 'above' &&
                React.createElement(Typography, null, this.props.display.title),
            React.createElement(Box, { className: "flexColumns" },
                React.createElement(TextField, { error: this.state.error !== false, helperText: sError, label: this.props.label === 'placeholder' ? this.props.display.title : '', onChange: ev => this.change('date', ev.target.value), onKeyPress: this.keyPressed, type: "date", value: this.state.value.substring(0, 10), variant: this.props.variant }),
                "\u00A0\u00A0",
                React.createElement(TextField, { error: this.state.error !== false, onChange: ev => this.change('time', ev.target.value), onKeyPress: this.keyPressed, type: "time", value: this.state.value.substring(11, 19), variant: this.props.variant }))));
    }
}
// Register with Node
DefineNodeBase.pluginAdd('datetime', DefineNodeDatetime);
