export class BTRoundUtils {
    public static roundTo(value : number, decimalPlaces : number = 2){
        return parseFloat(value.toFixed(Math.round(decimalPlaces)));
    }
}
