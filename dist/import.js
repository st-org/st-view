import { createImporter } from '@ddu6/importer';
export const { getMod } = createImporter({
    stc: 'https://cdn.jsdelivr.net/gh/st-org/stc@0.19.3/mod.js',
    stui: 'https://cdn.jsdelivr.net/gh/st-org/stui@0.15.4/mod.js',
    ucs: 'https://cdn.jsdelivr.net/gh/st-org/st-std@0.26.0/ucs.js'
});
