import { Injectable } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { BTObjectUtils } from './BTObjectUtils';
import { BTStringUtils } from './BTStringUtils';
import { BTRoundUtils } from './BTRoundUtils';

export enum TypePosition {
  left,
  right
}

export enum DataType {
  any,
  string,
  number,
  boolean,
  date
}

declare var $: any;

@Injectable()
export class VpUtilsService {

  constructor() {
  }

  public getValue(object : any, propertyName : string, propertyValue : any) : any {
    this.verifyProperty(object, propertyName, propertyValue);

    return object[propertyName];
  }

  public verifyProperty(object : any, propertyName : string, propertyValue : any){
    BTObjectUtils.verifyProperty(object, propertyName, propertyValue);
  }

  public verifyPropertyArray(array : any[], propertyNames : string[], propertyValue : any){
    BTObjectUtils.verifyPropertyArray(array, propertyNames, propertyValue);
  }

  public selectValue(name: string) {
    let selectOption = <HTMLSelectElement>document.getElementById(name);
    if (selectOption !== null) {
      return selectOption.value;
    }

    return null;
  }

  public selectText(name: string) {
    let selectOption = <HTMLSelectElement>document.getElementById(name);
    if (selectOption !== null) {
      return selectOption.options[selectOption.selectedIndex].text;
    }

    return null;
  }

  public inputText(name: string) {
    let input = <HTMLInputElement>document.getElementById(name);
    if (input !== null) {
      return input.value;
    }

    return null;
  }

  public inputSetText(name: string, text: string) {
    let input = <HTMLInputElement>document.getElementById(name);
    if (input !== null) {
      input.value = text;
    }
  }

  public formatTable(number: string): string {
    return this.fillString(number, 3, '0');
  }

  public fillString(number: string, size: number, char: string = ' ', position: TypePosition = TypePosition.left): string {
    let filled = '';

    if (number.length === size) {
      return number;
    }

    for (let i = number.length; i < size; i++) {
      filled = filled + char;
    }

    switch (position) {
      case (TypePosition.left): {
        return filled + number;
      }
      case (TypePosition.right): {
        return number + filled;
      }
    }
  }

  public formatNumber(value: number, places: number = 2, symbol: string = ''): string {
    if (!value) {
      value = 0;
    }

    let number = value.toFixed(places).replace(',', 'p').replace('.', ',').replace('p', '.');
    return symbol + number;
  }

  public removeAccents(word: string) {
    let newWord = word.toLowerCase();

    newWord = newWord.replace(new RegExp(/\s/g),       '');
    newWord = newWord.replace(new RegExp(/[àáâãäå]/g), 'a');
    newWord = newWord.replace(new RegExp(/æ/g),        'ae');
    newWord = newWord.replace(new RegExp(/ç/g),        'c');
    newWord = newWord.replace(new RegExp(/[èéêë]/g),   'e');
    newWord = newWord.replace(new RegExp(/[ìíîï]/g),   'i');
    newWord = newWord.replace(new RegExp(/ñ/g),        'n');
    newWord = newWord.replace(new RegExp(/[òóôõö]/g),  'o');
    newWord = newWord.replace(new RegExp(/œ/g),        'oe');
    newWord = newWord.replace(new RegExp(/[ùúûü]/g),   'u');
    newWord = newWord.replace(new RegExp(/[ýÿ]/g),     'y');
    newWord = newWord.replace(new RegExp(/\W/g),       '');

    return newWord;
  }

  public roundNumber(value : number, decimalPlaces : number = 2){
    return BTRoundUtils.roundTo(value, decimalPlaces);
  }

  public editSelectOnFocus(elementName : any) : void {
    setTimeout(() => {
      $('#'+ elementName).on('focus', function (){
        $(this).select();
      });
    }, 0);
  }

  public selectAll(elementName : string, element : any = null){
    if (element === null){
      element = <HTMLInputElement>document.getElementById(elementName);
    }

    if (element != null){
      element.select();
    }
  }

  private hasFocus(element : any) : boolean{
    return element === document.activeElement;
  }

  private isVisible(element : any) : boolean{    
    if (BTObjectUtils.isNullOrUndefined(element)){
      return false;
    }

    return element.offsetWidth > 0 && element.offsetHeight > 0;
  }

  private applyFocus(elementName : string, selectAll : boolean) : any {
    let element = document.getElementById(elementName);

    if (BTObjectUtils.isNullOrUndefined(element)){
      return null;
    }

    if (!this.isVisible(element)){
      return null;
    }

    if (this.hasFocus(element)) {
      return element;
    }

    element.focus();

    if (selectAll){
      this.selectAll(elementName, element);
    }

    return element;
  }

  private applyFocusInLoop(elementName : string, selectAll : boolean, times : number = 0){
    if (times > 6){
      return;
    }

    let element = this.applyFocus(elementName, selectAll) ;

    if (element == null){
      setTimeout(() => {
        this.applyFocusInLoop(elementName, selectAll, times + 1);
      }, 200);
      return;
    }

    /*setTimeout(() => {
      if (!this.hasFocus(element)){
        this.applyFocusInLoop(elementName, selectAll, times + 1);
      }
    }, 200);*/
  }

  public setFocus(elementName : any, selectAll : boolean = false, dalayed : boolean = false, time : number = 0) : void{
    if (BTStringUtils.isEmpty(elementName)){
      return;
    }

    if (time <= 0){
      time = 200;
    }

    if (!dalayed){
      this.applyFocusInLoop(elementName, selectAll);
      return;
    }

    setTimeout(() => {
      this.applyFocusInLoop(elementName, selectAll);
    }, time);
  }

  public generateGUID(){
    const S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };

    return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
  }

  getValueProperty(object : any, field: string, subfield: string = ''): string {
    if (object !== null && object[field]) {
      if (subfield === '') {
        return object[field];
      } else {
        let tag = object[field];
        if (tag[subfield]) {
          return tag[subfield];
        }
      }
    } else {
      return null;
    }
  }

  getFormValue(form : FormGroup, field : string, isBoolean : boolean = false) : any{
    let value: any;

    if (form.controls[field] && form.controls[field].value != null) {
      value = form.controls[field].value;
    }

    if (isBoolean) {
      if (value) {
        return 1;
      } else {
        return 2;
      }
    } else {
      return value;
    }
  }

  setFormValue(form : FormGroup, field : string, value : any, markAsDirty : boolean = true, datatype : DataType = DataType.any) : void{
    if (datatype === DataType.boolean){
      if (value === 1){
        value = true;
      } else {
        value = false;
      }
    }

    if (datatype == DataType.date){
      value = (<Date>value).toISOString().substring(0,10);
    }

    if (form.controls[field]){
      if (markAsDirty === true){
        form.controls[field].markAsDirty();
      }

      (<FormControl>form.controls[field]).setValue(value);
    }
  }

  copyObject(source : any) : any {
    return BTObjectUtils.copy(source);
  }

  copyToClipboard(text){    
    if (BTStringUtils.isEmpty(text)){
      return;
    }

    (<any>navigator).clipboard.writeText(text).then(
      () => {        
      })
  }  

  public dayOfWeek(dayOfWeek : Number) : string{
    if (dayOfWeek < 1 || dayOfWeek > 7 || dayOfWeek == null || dayOfWeek == undefined){
      return 'Invalid Value ' + dayOfWeek;
    }

    if (dayOfWeek == 1){
      return 'Domingo'
    }

    if (dayOfWeek == 2){
      return 'Segunda-Feira'
    }

    if (dayOfWeek == 3){
      return 'Terça-Feira'
    }

    if (dayOfWeek == 4){
      return 'Quarta-Feira'
    }

    if (dayOfWeek == 5){
      return 'Quinta-Feira'
    }

    if (dayOfWeek == 6){
      return 'Sexta-Feira'
    }

    if (dayOfWeek == 7){
      return 'Sábado'
    }
  }

  public findObjectOnArray(array : any, lambdaFuncion : (element : any) => boolean) : any{
    for (let i = 0; i < array.length; i++){
      if (lambdaFuncion(array[i])){
        return array[i];
      }
    }

  }

  public ifThen(condition : boolean, trueValue : number, falseValue : number) : number{
    if (condition){
      return trueValue;
    }

    return falseValue;
  }

  public SortArray(array : any, property : string) : any{
    debugger;
    if (array.length == 0){
      return "";
    }
    
    if (array.hasOwnProperty(property)){
      return "";
    }

    return array.sort(function(a, b){return a[property] - b[property]});
  }
}
