import Granim from 'granim'
import BackgroundImage from '../assests/pomodoro-img-resized.png';

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
                ['#F7FEFE', '#cacaca'],
                ['#FFF1F1', '#cacaca']
            ],
            transitionSpeed: 2500
        }
    }
});

export default granimInstance;