export const petID = 12
export const getpetI= function(){
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));    
      return text; 
}
