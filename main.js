function submit(){
var synth= window.speechSynthesis;
utterthis= new SpeechSynthesisUtterance("Your Order has been Placed!");
synth.speak(utterthis);
window.alert("Your Order Has Been Placed!")
}

