const themePickerList = 'themePickerList';

export default theme => ({
    [themePickerList]: {
        background: 'green'
    },
    [`${themePickerList}__item`]: {
        background: 'blue'
    },
    [`${themePickerList}__item_picked`]: {
        extend: `${themePickerList}__item`,
        background: 'green'
    }

});