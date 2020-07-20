export class BTObjectUtils {

    public static isNullOrUndefined(param : any) : boolean{
        return param == null || param == undefined;
    }

    public static isArray(param : any) : boolean{
        if (BTObjectUtils.isNullOrUndefined(param)){
            return false;
        }

        return Array.isArray(param);
    }

    public static isEmptyArray(param : any) : boolean{
        if (!BTObjectUtils.isArray(param)){
            return true;
        }

        return param.length == 0;
    }

    public static isEmptyObject(obj) {
      if (BTObjectUtils.isNullOrUndefined(obj)){
        return;
      }
      
      for(const key in obj) {
          if(obj.hasOwnProperty(key)){
              return false;
          }
      }
      return true;
    }

    public static copy(obj : any) : any{
        if (BTObjectUtils.isNullOrUndefined(obj)){
            return null;
        }

        return JSON.parse(JSON.stringify(obj));
    }

    public static verifyProperty(object : any, propertyName : string, propertyValue : any){
        if (BTObjectUtils.isNullOrUndefined(object)){
            return;
        }

        if (!object.hasOwnProperty(propertyName) || object[propertyName] == undefined){
          object[propertyName] = propertyValue;
        }
    }

    public static verifyPropertyArray(array : any[], propertyNames : string[], propertyValue : any){
        if (!BTObjectUtils.isArray(array)){
            return;
        }

        if (!BTObjectUtils.isArray(propertyNames)){
            return;
        }

        for (let i = 0; i < array.length; i ++ ){
          for (let x = 0; x < propertyNames.length; x ++ ){
            this.verifyProperty(array[i], propertyNames[x], propertyValue);
          }
        }
    }

    public static lastIndexObject(array){
      if (array.length == 0){
        return [];
      }

      return array[array.length - 1];
    }
}
