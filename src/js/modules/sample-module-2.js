// grab the uniq function from lodash
import { uniq } from 'lodash';

const sampleArray = [ 1, 2, 3, 4, 3, 2, 1, 3, 5, 6, 7, 8 ];

// export the array after unique has run
export const uniqueArray = uniq( sampleArray );
