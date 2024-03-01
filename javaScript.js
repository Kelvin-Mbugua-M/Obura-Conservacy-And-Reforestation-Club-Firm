document.getElementsById("hotel").innerHTML+="sdjvercknw,cjewhd,jwqekhbqwkjdxgbewykdugbqwdiqwkj";
let converter=document.getElementById("input_button");
let output_currency=document.getElementsById("dollar_output");
feed=((Math.random)*100).floor
function Cash_Convert(){
    
    if(converter.isNan()){
        return 0;
    }
    let currency_D=converter*Denomination_Value;
    output_currency.innerHtml="Converts to" + currency_D +" "+ Denomination;

    

}
function Yuan(){
 let Denomination = "Yuan";
 
 let Denomination_Value = feed
 return Cash_Convert()
}
var Dollar()=>{
    let Denomination = "Dollar $ ";
    let Denomination_Value = feed+42.15
    return Cash_Convert()
}
function Pound(){
    let Denomination = "pounds";
    let Denomination_Value = feed+131.57;
    return Cash_Convert()
}