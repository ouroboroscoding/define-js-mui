/**
 * Define Node Password
 *
 * Handles a single string define element
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-02-17
 */
import React from 'react';
import DefineNodeBase from './Base';
import { DefineNodeBaseProps } from './Base';
/**
 * Node Password
 *
 * Handles values that are strings or string-like
 *
 * @name DefineNodePassword
 * @access public
 * @extends DefineNodeBase
 */
export default class DefineNodePassword extends DefineNodeBase {
    /**
     * Constructor
     *
     * Creates a new instance
     *
     * @name DefineNodePassword
     * @access public
     * @param props Properties passed to the component
     * @return a new instance
     */
    constructor(props: DefineNodeBaseProps);
    /**
     * Change
     *
     * Called when the node value changes
     *
     * @name change
     * @access public
     * @param event The event triggered by the change
     */
    change(event: React.ChangeEvent<HTMLInputElement>): void;
    /**
     * Render
     *
     * Generates the actual DOM elements of the component
     *
     * @name render
     * @access public
     */
    render(): React.JSX.Element;
}
