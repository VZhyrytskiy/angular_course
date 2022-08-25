export enum UserRole {
    User = 'user',
    Admin = 'admin',
}

export const userRadioButtonsOptions = () => [
    { type: UserRole.User, option: 'User', url: 'products-list' },
    { type: UserRole.Admin, option: 'Administrator', url: 'admin' },
];
