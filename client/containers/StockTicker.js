import React, { Component } from 'react'

module.exports = React.createClass({
    render() {
        var hyperlink = 'https://www.google.com/finance?q=';
        var stock = this.props.stock;
        return (<li className="list-item">
            <h3>
                <a id="a-sym" href={ hyperlink + stock.t }
                    target="_blank">
                    { stock.t }
                </a>
                <i className={"angle fa fa-angle-double-" +(stock.c.indexOf('-') > -1 ?
                    'down angle-red' :
                    'up angle-green')}>
                </i>
            </h3>
            <div id="d-sym">
                <div>Exchange: { stock.e }</div>
                <div>Price: { stock.l }</div>
                <div>Change: { stock.c } ({  stock.cp }%)</div>
            </div>
        </li>);
    }
});
