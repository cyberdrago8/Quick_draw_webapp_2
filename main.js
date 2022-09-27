function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canas.mouseReleased(createCanvas);
    synth = window.speechSynthesis;
}

function updateCanvas() {
    background("white");
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX ,mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}



function gotResult(error, result)
{
    if(error){
        console.error(error)
    }
    console.log(result);
    document.getElementById('Score').innerHTML = 'Score : ' + results[0].score;

    document.getElementById('confidence').innerHTML = 'confidence : ' + Mathround(results[0].confidence * 100) + '%';

    utterThis = new SpeechSynthesis(results[0].label);
    synth.speak(utterThis)
}



