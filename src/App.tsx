import React, {useEffect} from 'react';
import './App.css';
import {AccountType} from './components/account-type/AccountType';
import {observer} from "mobx-react";
import {AccountStore} from './store/accountStore';
import {provider, useInstance} from 'react-ioc';
import {Loading} from './common/loading/loading';
import {createStyles, Theme, withStyles} from "@material-ui/core";

const useStyles = (theme: Theme) =>
    createStyles({
        appContainer: {
            height: "100vh",
        },
    })


export const App = withStyles(useStyles)(provider(AccountStore)(observer((props: { classes: any }) => {

    const accountStore = useInstance(AccountStore);

    useEffect(() => {
        accountStore.init();
    }, [accountStore])

    if (accountStore.isLoading) {
        return <Loading/>;
    }

    return (
        <div className={props.classes.appContainer}>
            <AccountType/>
        </div>
    );
})));


