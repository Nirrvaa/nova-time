import { createSelector } from 'reselect';

import { getTheme } from '../../../../assets/themes';

const theme = state => state.theme;

export default createSelector(
    [theme],
    getTheme
);