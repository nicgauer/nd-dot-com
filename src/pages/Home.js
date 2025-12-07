import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>neighbor dog</h1>
        <h4>Bark Bark</h4>
        <p>A Band that sounds like a Band from Minnesota</p>
        <div>
          <iframe title="Cat Song by Neighbor Dog - Bandcamp Player" style={{ border: 0, width: '350px', height: '442px' }} src="https://bandcamp.com/EmbeddedPlayer/track=547416725/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/" seamless><a href="https://neighbordogmn.bandcamp.com/track/cat-song">Cat Song by Neighbor Dog</a></iframe>
          <iframe title="Move On by Neighbor Dog - Bandcamp Player" style={{ border: 0, width: '350px', height: '442px' }} src="https://bandcamp.com/EmbeddedPlayer/track=3384024259/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://neighbordogmn.bandcamp.com/track/move-on">Move On by Neighbor Dog</a></iframe>
        </div>
        
      </header>
    </div>
  );
}

export default Home;

