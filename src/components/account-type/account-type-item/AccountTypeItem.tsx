import {IAccountTypeItem} from "../../../models/accountType-items";
import React from "react";
import {withStyles} from "@material-ui/core";
import {observer} from "mobx-react";

import {images} from "../../../assets/images"
import {useStyles} from "./styles";

const {checkbox} = images

interface IProps {
    item: IAccountTypeItem
    selectAccount: (value: string) => void
    selectedAccountItem: string
    icon: any
    classes: any
}

export const AccountTypeItem = withStyles(useStyles)(observer((
    {
        item,
        selectAccount,
        selectedAccountItem,
        icon,
        classes
    }: IProps) => {

        const selectAccountHandle = () => {
            selectAccount(item.name)
        }

        const isChecked = item.name === selectedAccountItem


        const activeClass = isChecked ? classes.active : '';
        const classForCheckbox = isChecked ? classes.open : classes.close;


        return (
            <div onClick={selectAccountHandle}
                 className={`${classes.container} ${activeClass}`}>
                <div className={classes.wrapper}>
                    <div className={classes.imageContainer}>
                        <img src={icon} alt={item.name}/>
                    </div>
                    <span className={classes.title}>{item.name}</span>
                </div>

                <div className={`${classes.activeImg} ${classForCheckbox}`}>
                    <img src={checkbox} alt='checkbox'/>
                </div>
            </div>
        )
    }))
;
