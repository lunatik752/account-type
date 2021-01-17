import React from 'react';
import {useInstance} from 'react-ioc';
import * as AccountItems from "../../models/accountType-items";
import {AccountStore} from '../../store/accountStore';
import {observer} from "mobx-react";
import {Button, Container, Grid, Typography, withStyles} from '@material-ui/core';
import {useStyles} from './styles';
import {images} from "../../assets/images";
import {AccountTypeItem} from "./account-type-item/AccountTypeItem";


const {wixfi, expertise, propertyManager, tenant} = images;


export const AccountType = withStyles(useStyles)(observer((props: { classes: any }) => {
    const classes = props.classes

    const accountStore = useInstance(AccountStore);

    const selectAccount = (name: string) => {
        accountStore.setSelectedAccountItem(name)
    }

    const handleConfirm = () => {
        console.log(accountStore.selectedAccountItem)
    }

    const iconMap: Map<string, any> = new Map([
        [AccountItems.expert.name, expertise],
        [AccountItems.propertyManager.name, propertyManager],
        [AccountItems.tenant.name, tenant],
    ]);


    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <img src={wixfi} alt="wixfi" className={classes.logo}/>
            <Typography component="h4" variant="h5" className={classes.caption}>
                Choose a type of your account
            </Typography>
            <Grid container justify="center" className={classes.accountsContainer} spacing={2}>
                {accountStore.accountTypeItems.map((item: AccountItems.IAccountTypeItem) =>
                    <AccountTypeItem
                        key={item.name}
                        item={item}
                        icon={iconMap.get(item.name)}
                        selectAccount={selectAccount}
                        selectedAccountItem={accountStore.selectedAccountItem}
                    />)}
            </Grid>
            <Button
                disabled={!accountStore.selectedAccountItem}
                variant="contained"
                color="primary"
                className={classes.confirm}
                onClick={handleConfirm}
            >confirm</Button>
        </Container>
    )
}))

