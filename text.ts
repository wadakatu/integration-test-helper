import {randomBytes} from 'crypto'

function getLength(optionArr: string[]): number{
  let length: number = 10;

  if(isIncluded(optionArr,'--length')){
    let index: number = optionArr.indexOf('--length');
    if(0 <= index){
      length = parseInt(optionArr[index + 1]);
    }
  }
  return length;
}

function showHelpPage(): string{
  return [
    '-------------------------------------------------------------\n',
    '/text {option}\n\n',
    'Usage:\n',
    '/text --length <number>    setting string length(default: 10)\n',
    '-------------------------------------------------------------\n',
  ].join('');
}

function generateRandomStr(length: number): string{
  return randomBytes(length).reduce((p, i) => p + (i % 36).toString(36), '')
}

function isIncluded(textArr: Array<string>, option: string): boolean{
  return textArr.includes(option);
}

export {getLength, generateRandomStr, isIncluded, showHelpPage};