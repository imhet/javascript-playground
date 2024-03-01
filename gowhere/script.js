const prizes = [
    { text: 'macbook14pro', color: '#f44336', probability: 0.1 },
    { text: 'iPhone13', color: '#9c27b0', probability: 0.3 },
    { text: 'xiaomi', color: '#3f51b5', probability: 0.2 },
    { text: '100元优惠券', color: '#00bcd4', probability: 0.2 },
    { text: '感谢参与', color: '#4caf50', probability: 0.2 },
];

const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(canvas.width, canvas.height) / 2;
let angle = 0;
let spinning = false;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let startAngle = 0;
    let endAngle = 0;

    for (let i = 0; i < prizes.length; i++) {
        startAngle = endAngle;
        endAngle = startAngle + (Math.PI * 2 * prizes[i].probability);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = prizes[i].color;
        ctx.fill();

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((startAngle + endAngle) / 2);
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(prizes[i].text, radius / 2, 0);
        ctx.restore();
    }
}

function spinWheel() {
    if (!spinning) {
        angle = angle % (Math.PI * 2);

        ctx.clearRect(centerX - 10, centerY - radius - 10, 20, radius + 20);
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(-5, -radius - 5);
        ctx.lineTo(5, -radius - 5);
        ctx.lineTo(0, -radius - 15);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();

        ctx.restore();

        angle += 0.1;
        requestAnimationFrame(spinWheel);
    }
}

function startSpin() {
    if (!spinning) {
        genRandom()
        spinning = true;
        spinWheel();
        pointerRotate()
        setTimeout(stopSpin, 5000);
    }
}

function pointerRotate() {

   const pointer = document.getElementById('pointer');
   const rotation = 360 * random + 720;
    // 设置动画
    pointer.style.transform = 'rotateZ(' + rotation + 'deg)';
    pointer.style.pointerEvents = 'none';
    // 停止旋转并弹出中奖内容
    setTimeout(() => {
        pointer.style.pointerEvents = 'auto';
    }, 5000);
}

function stopSpin() {
    spinning = false;

    const selectedPrize = getSelectedPrize();
    alert('中奖内容：' + selectedPrize.text);
}

function getSelectedPrize() {
    let startAngle = 0;
    let endAngle = prizes[0].probability;

    for (let i = 0; i < prizes.length; i++) {
        if (random >= startAngle && random < endAngle) {
            return prizes[i];
        }

        startAngle = endAngle;
        endAngle += prizes[i + 1].probability;
    }
}

var random = Math.random()

function genRandom() {
    random = Math.random()
}

drawWheel();
