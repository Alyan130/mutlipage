import "./hero.css"
export default function Hero(){
    return(
     <section>
        <div className="background">
         <video
         autoPlay
         loop
         muted
         className="video"
         >
            <source src="/assassins-creed-valhalla-wallpaperwaifu-com.mp4" type="video/mp4" />
         </video>
         <div className="content">
          <h1>SURVIVE AT ALL COSTS</h1>
          <p>Experience new ASSASSIN’S CREED VALHALLA</p>
          <button className="btn">
            Purchase Now | $14.99
          </button>
          </div>
         </div>
     </section>
    );
}