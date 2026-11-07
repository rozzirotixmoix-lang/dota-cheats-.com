import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const dir=path.resolve('public/images/showcase');
for(const name of ['dota-gameplay','interface-world','interface-targeting','interface-settings']){
 for(const width of [320,640]){
 await sharp(path.join(dir,name+'.webp')).resize({width,withoutEnlargement:true}).webp({quality:80}).toFile(path.join(dir,name+'-'+width+'.webp'));
 }
}
console.log('Updated responsive image variants without cropping.');
