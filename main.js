function setup() {
 canvas=createCanvas(screen.width-50,500)
 background("rgb(2, 255, 179)")
 canvas.parent("conozco_tu_direccion")   
}
fares=window.webkitSpeechRecognition;
alexa=new fares()
alexa.lang="es_MX"
te_escuche=""
function preload() {
    floppa=loadImage("Big_Floppa_and_Justin_2_(cropped).jpg")
    sus=loadImage("sus.gif")
}
function draw(){
    if (te_escuche=="floppa" || te_escuche=="flopa") {
        x=Math.random()*screen.width-50
        y=Math.random()*500
        image(floppa,x,y,80,80)
    }
    if (te_escuche=="Parangaricutirimicuaro") {
        background("rgb(2, 255, 179)")
        te_escuche=""
    }
    if (te_escuche=="0/7" || te_escuche=="0 entre 7") {
        voz_de_fares("0 por que todo multiplicado por cero es ceroooooooooooo00")
        te_escuche=""
    }
    if (te_escuche.toLowerCase()=="sus") {
        x=Math.random()*screen.width-50
        y=Math.random()*500
        image(sus,x,y,150,150)
    }
}
function se_que_tramas() {
    alexa.start()
}
alexa.onresult=conversacion_guardada
function conversacion_guardada(nube) {
    console.log(nube)
    te_escuche=nube.results[0][0].transcript
    document.getElementById("googlepirata").innerHTML=te_escuche
}
function voz_de_fares(hola) {
    voz=window.speechSynthesis
    cerebro=new SpeechSynthesisUtterance(hola)
    voz.speak(cerebro)
}
