
export enum SortFieldsType {
    Name = 'name',
    Price = 'price',
    Quantity = 'qty',
}
export enum SortFields {
    Name = 'Название',
    Price = 'Цена',
    Quantity = 'Количество',
}

export const sortSelectOptions = () => [
    { type: SortFieldsType.Name, option: SortFields.Name },
    { type: SortFieldsType.Price, option: SortFields.Price },
    { type: SortFieldsType.Quantity, option: SortFields.Quantity },
];
