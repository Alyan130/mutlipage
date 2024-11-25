import "./section3.css";
export default function Section3(){
    return(
      <section className="section3">
        <div className="subscribe">
            <div className="image">
            
            </div>
            <div className="textc">
                  <h2>Want to stay in touch?</h2>
                  <h1>newsletter SUBSCRIBE </h1>
                  <p>In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.</p>
                  <div className="fields">
                  <input type="email" placeholder="Enter your email" />
                  <button>Subscribe now</button>
                  </div>
            </div>
        </div>
      </section>
    );
}