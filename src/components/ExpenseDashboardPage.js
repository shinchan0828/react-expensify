import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { connect } from 'react-redux';

const ExpenseDashboardPage=()=>(
    <div>
    <ExpenseListFilters/>
    <ExpenseList/>
    </div>
);

export default connect()(ExpenseDashboardPage);