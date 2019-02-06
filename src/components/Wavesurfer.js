import React, { Component } from 'react';
import song from '../testsong.mp3';

class Wavesurfer extends Component {
    constructor(props) {
        super(props);
        this.state = { wavesurferReady: false};

        this.loadWavesurfer = this.loadWavesurfer.bind(this);
      }

      loadWavesurfer = (callback) => {
        const existingScript = document.getElementById('waveform');
      
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/wavesurfer.js';
          script.id = 'wavesurfer';
          document.body.appendChild(script);
      
          script.onload = () => {
            if (callback) callback();
          };
        }
      
        if (existingScript && callback) callback();
      };

      componentWillMount() {
            this.loadWavesurfer(() => {
              // select wavesurfer
              const wavesurferInstance = window.WaveSurfer;
            
              // create the instance
              const wavesurfer = wavesurferInstance.create({
                container: '#waveform',
                progressColor: 'purple',
                waveColor: 'violet',
                scrollParent: true
            });
            
            // load the song
            wavesurfer.load(song);

            wavesurfer.on('ready', function () {
              wavesurfer.play();
          });

              this.setState({ wavesurferReady: true });
            });

      };
    
    render() {

        return (
          <div>
            <div id="waveform"></div>
          </div>
        );
    }
};

export default Wavesurfer;