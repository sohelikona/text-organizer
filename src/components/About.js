import React, { useState } from 'react';

export default function About(props) {

// const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
//   })
let myStyle = {
  color: props.mode === 'dark'?'white':'black',
  backgroundColor: props.mode === 'dark'?'black':'white'
}


  return (
    <div className='container' style={myStyle}>
      <h1 className='my-4'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        
       <h3> <strong>Analyze your text</strong></h3>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sun maxime corporis fugit nemo quos molestias illum, ipsa rerum, et accusamus ullam, quia magnam dolorum! Temporibus eius, reiciendis eos ex iste fugiat sequi vero eveniet maxime obcaecati placeat, quidem voluptatem facilis a consectetur cumque velit reprehenderit, sunt aperiam ea architecto! Consequatur distinctio consequuntur excepturi iusto exercitationem sunt labore dolor eaque debitis animi? In commodi eius dolorem, ducimus animi libero perspiciatis labore maxime! Eius, impedit quis. Asperiores harum eius, numquam maiores saepe eligendi totam exercitationem ullam praesentium consequatur nihil voluptatem nulla magni iure, temporibus odio earum. Animi tempore ex corrupti nisi similique pariatur quae laudantium, maxime exercitationem aliquam? Quia, libero. Sapiente dicta facere, necessitatibus omnis quia dolor unde ex hic quod voluptate commodi inventore accusamus eaque. Ab est illum facere quia, ut reiciendis fuga perferendis commodi non minima. Tempore explicabo obcaecati aspernatur incidunt vero accusamus reprehenderit? Non voluptates optio eveniet dolorem.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro possimus ipsa ab eius? Nemo, ut nostrum. Eos laudantium accusantium totam? Velit maxime temporibus voluptate id architecto placeat reiciendis repellendus recusandae eos quia tempora magni, illo eius accusantium dolor totam obcaecati, culpa molestiae dignissimos? Assumenda voluptatum, recusandae aperiam perspiciatis natus soluta repudiandae cupiditate a, hic repellendus animi tempore quasi sunt? Voluptas, consequatur! Eveniet veritatis earum ipsum voluptatum hic excepturi autem? Aliquam totam deleniti provident, reiciendis amet odit ut vitae, autem aspernatur soluta quidem ad voluptates, fuga velit. Cum est eius eos, et nulla distinctio aspernatur natus corporis enim nam eveniet ullam?
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, enim vero. Recusandae nemo doloribus iusto deserunt atque soluta sit molestias, ut delectus provident aspernatur ab eum maiores culpa id illum quia temporibus molestiae quisquam laborum nihil animi labore? Recusandae, ex deleniti quibusdam nisi dolorem sed, distinctio quasi maiores aliquid expedita nihil saepe animi aperiam asperiores beatae ad ut omnis quos unde corporis tenetur iure! Sed praesentium sapiente distinctio maxime voluptatem pariatur est nostrum fuga sunt maiores! Eveniet eum nostrum voluptatibus? Laboriosam, nobis qui officiis rem ducimus quia dicta ab pariatur aut, reprehenderit assumenda debitis porro iure explicabo voluptatibus ipsa similique facere ratione. Porro aspernatur reiciendis deserunt maiores! Ullam repellendus expedita, facilis harum ea ipsam in molestiae animi modi minus saepe?
      </div>
    </div>
  </div>
</div>

    </div>
  );
}




















































































































 


















