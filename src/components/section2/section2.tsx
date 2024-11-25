import "./section2.css";

export default function Section2() {
type data={
  htext:string,
 ptext:string,
}

const card:data[]=[
    {htext:"OS:",ptext:`Windows 7 64-bit only (No OSX support at this time)`},
    {htext:"PROCESSOR:",ptext:`Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2`},
    {htext:"MEMORY:",ptext:`8 GB RAM`},
    {htext:"STORAGE:",ptext:`8 GB available space`},
]


    return (
        <>
            <section className="section2">
                <div className="background2">
                    <video
                        autoPlay
                        loop
                        muted
                        className="video2"
                    >
                        <source src="/ASSASSIN S CREED _ ACTION SHORT _ 4K.mp4" type="video/mp4" />
                    </video>
                    <div className="content2">
                        <h2>Can My Computer Run this game?</h2>
                        <h1>system requirements</h1>
                    </div>
                    <div className="specs">
                     <div className="s1">
                      {card.map((e,index)=>
                        <div key={index} className="as1">
                           <h2>{e.htext}</h2>
                        <p>{e.ptext}</p>
                        </div>                       
                      )}
                     </div>
                     <div className="s2">
                        <h2>GRAPHICS:</h2>
                            <p>NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
                     </div>
                    </div>
                </div>
            </section>
        </>
    );
}