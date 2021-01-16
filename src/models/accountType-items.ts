
export interface IAccountTypeItem {
  name: string;
}
export class AccountItem implements IAccountTypeItem {
  constructor(public name: string) {}
}

export const propertyManager = new AccountItem(
    "Property Manager"
);
export const tenant = new AccountItem("Tenant");
export const expert = new AccountItem("Expert");
