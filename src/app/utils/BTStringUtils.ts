export class BTStringUtils {
    public static nonNullString(value : string){
        if (value == undefined || value == null){
            return "";
        }

        return value;
    }

    public static trim(value : string) : string{
        return BTStringUtils.nonNullString(value).trim();
    }

    public static isEmpty(value : string) : boolean{
        return BTStringUtils.trim(value).length == 0;
    }

    public static isNotEmpty(value : string) : boolean{
        return !BTStringUtils.isEmpty(value);
    }

    public static equals(value1 : string, value2 : string, caseSensitive : boolean = true) : boolean{
        if (caseSensitive){            
            return BTStringUtils.nonNullString(value1) == BTStringUtils.nonNullString(value2);
        }

        return BTStringUtils.nonNullString(value1).toUpperCase() == BTStringUtils.nonNullString(value2).toUpperCase();
    }

    public static prepareXMLToJSON(AXML : string) : string{        
        AXML = AXML.replace(/&/g , '&amp;', );
        AXML = AXML.replace(/"/g , '&quot;');
        AXML = AXML.replace(/""/g, '&#39;' );
        AXML = AXML.replace(/</g , '&lt;'  );
        AXML = AXML.replace(/>/g , '&gt;'  );
        AXML = AXML.replace(/\//g, '&#x2F;');

        return AXML;
    }

    public static pestoreXMLFromJSON(AJSONXml){
        AJSONXml = AJSONXml.replace('&amp;', '&');
        AJSONXml = AJSONXml.replace('&quot;', '"');
        AJSONXml = AJSONXml.replace('&#39;', '""');
        AJSONXml = AJSONXml.replace('&lt;', '<');
        AJSONXml = AJSONXml.replace('&gt;', '>');
        AJSONXml = AJSONXml.replace('&#x2F;', '/');
    }

    public static startWithNumber(value : string) : boolean {
        if (BTStringUtils.nonNullString(value).match(/^\d/)){
            return true;
        }

        return false;
    }

    public static removerDots(value : string){
        return value.replace(/\./g, '');
    }

    public static isNumeric(value : any){
        return !isNaN(value);
    }
}