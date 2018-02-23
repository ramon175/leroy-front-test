export const addDescription = ({
    description = '',
} = {}) => ({
    type: 'ADD_DESCRIPTION',
    description: description
});