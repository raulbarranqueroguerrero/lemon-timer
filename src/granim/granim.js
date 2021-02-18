import Granim from 'granim'
import BackgroundImage from '../assests/pomodoro-background-img.jpg';

var granimInstance = new Granim({
    element: '#image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: BackgroundImage,
        blendingMode: 'multiply',
        stretchMode: ['stretch-if-bigger', 'stretch'],
    },
    states : {
        "default-state": {
            gradients: [
                ['#80d3fe', '#cacaca'],
                ['#f0ab51', '#cacaca']
            ],
            transitionSpeed: 9000
        }
    }
});

export default granimInstance;