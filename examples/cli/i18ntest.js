'use strict';

const i18n = require('../../i18n')();
const path = require('path');

console.log('I18N:', JSON.stringify(i18n));

i18n.configure({
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'es',
    directory: path.join(__dirname, 'dir1'),
    additionalDirectories: [path.join(__dirname, 'dir2'), path.join(__dirname, 'dir3')],
    updateFiles: false
});

function t(s) {console.log('\t"' + s + '" --> "' + i18n.__(s) + '"')}

function locale(loc) {
    i18n.setLocale(loc);
    console.log('locale =', i18n.getLocale());
}

locale('en');
t('CAR');

locale('es');
t('CAR');

locale('fr');
t('CAR');

locale('de');
t('CAR');
