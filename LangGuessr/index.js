import {franc, francAll} from 'franc'
import langs from 'langs';
const arg = process.argv[2];
const errormsg = 'Could not match a language. Please try again with a larger sample';
if (arg != undefined){
  const langCode = franc(arg);
  const language = langs.where('3', langCode);
  try{
    console.log(language.name);
  } catch {
    console.log(errormsg);
  }
} else {
  console.log(errormsg);
}