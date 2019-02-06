import React, { Component } from 'react';
// import scriptLoader from './ScriptLoader';

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
          script.id = 'waveform';
          document.body.appendChild(script);
      
          script.onload = () => {
            if (callback) callback();
          };
        }
      
        if (existingScript && callback) callback();
      };

      componentWillMount() {
            this.loadWavesurfer(() => {
              const plugin = document.getElementById('waveform');
              console.log(plugin);

              this.setState({ wavesurferReady: true });
            });

          this.setState({ wavesurferReady: true });
      };
    
    render() {
        return (
            <div id="waveform"></div>
        );
    }
};

export default Wavesurfer;