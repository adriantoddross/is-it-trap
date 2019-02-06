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
              const wavesurfer = window.WaveSurfer;
            
              // create the instance
              const wavesurferInstance = wavesurfer.create({
                container: '#waveform',
                waveColor: 'violet',
                progressColor: 'purple',
            });
            
            // load the song
            wavesurferInstance.load(song);

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