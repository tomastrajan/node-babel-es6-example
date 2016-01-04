'use strict';

import { a, counter, increment } from './module/module';

console.log('It imports value: ', a);

increment();
increment();

console.log('It shows counter\'s value: ', counter);

