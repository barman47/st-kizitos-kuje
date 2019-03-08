import React, { Component } from 'react';
import M from 'materialize-css'
import pope from '../img/pope.jpg';

class OurPriests extends Component {
    
    componentDidMount () {
        const elems = document.querySelectorAll('.materialboxed');
        // eslint-disable-next-line
        const instances = M.Materialbox.init(elems);
    }

    render () {
        return (
            <section className="pastoral-team">
                <h3>Meet our Priests</h3>
                <p>St. Kizito Parish Kuje , One Big Family is blessed with these humble servants of God. We pray that the good Lord in his infinite mercy will continue to strengthen and protect them as they serve him.</p>
                <div className="row">
                    <div className="col s12 m6 l3">
                        <div className="card small hoverable">
                            <div className="card-image">
                                <img className="materialboxed responsive-img" src={pope} alt="Pope Francis"/>
                            </div>
                            <div className="card-content">
                                <p className="materialboxed priest-name">Rev. Fr. Hyacinth Okafor, CM</p>
                            </div>
                            <div className="card-action">
                                <p className="priest-title">Parish Priest</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="card small hoverable">
                            <div className="card-image">
                                <img className="materialboxed responsive-img" src={pope} alt="Pope Francis"/>
                            </div>
                            <div className="card-content">
                                <p className="priest-name">Fr. Clement Eru, CM</p>
                            </div>
                            <div className="card-action">
                                <p className="priest-title">Associate Priest</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="card small hoverable">
                            <div className="card-image">
                                <img className="materialboxed responsive-img" src={pope} data-caption="Fr. Victor Nyoroh, CM" alt="Pope Francis"/>
                            </div>
                            <div className="card-content">
                                <p className="priest-name">Fr. Victor Nyoroh, CM</p>
                            </div>
                            <div className="card-action">
                                <p className="priest-title">Associate Priest</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l3">
                        <div className="card small hoverable">
                            <div className="card-image">
                                <img className="materialboxed responsive-img" src={pope} alt="Pope Francis"/>
                            </div>
                            <div className="card-content">
                                <p className="priest-name">Fr. John Ogbe, CM</p>
                            </div>
                            <div className="card-action">
                                <p className="priest-title">Associate Priest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurPriests;


// // White Theme Version
// import React, { Component } from 'react';
// import M from 'materialize-css'
// import pope from '../img/pope.jpg';

// class OurPriests extends Component {
    
//     componentDidMount () {
//         const elems = document.querySelectorAll('.materialboxed');
//         // eslint-disable-next-line
//         const instances = M.Materialbox.init(elems);
//     }

//     render () {
//         return (
//             <section className="pastoral-team">
//                 {/*<h3>Pa<span className="underline">storal Te</span>am&nbsp;</h3>*/}
//                 <h3>Meet our <span className="underline">Priests</span></h3>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse error ut eligendi ratione laboriosam, corporis doloribus odit necessitatibus? Consectetur!</p>
//                 <div className="row">
//                     <div className="col s12 m6 l3">
//                         <div className="card small hoverable">
//                             <div className="card-image">
//                                 <img className="materialboxed responsive-img" data-caption="Rev. Fr. Hyacinth Okafor, CM" src={pope} alt="Pope Francis"/>
//                             </div>
//                             <div className="card-content">
//                                 <p>Rev. Fr. Hyacinth Okafor, CM</p>
//                             </div>
//                             <div className="card-action">
//                                 <p>Parish Priest</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col s12 m6 l3">
//                         <div className="card small hoverable">
//                             <div className="card-image">
//                                 <img className="materialboxed responsive-img" data-caption="Fr. Lement Eru, CM" src={pope} alt="Pope Francis"/>
//                             </div>
//                             <div className="card-content">
//                                 <p>Fr. Lement Eru, CM</p>
//                             </div>
//                             <div className="card-action">
//                                 <p>Associate Priest</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col s12 m6 l3">
//                         <div className="card small hoverable">
//                             <div className="card-image">
//                                 <img className="materialboxed responsive-img" data-caption="Fr. Victor Nyoroh, CM" src={pope} alt="Pope Francis"/>
//                             </div>
//                             <div className="card-content">
//                                 <p>Fr. Victor Nyoroh, CM</p>
//                             </div>
//                             <div className="card-action">
//                                 <p>Associate Priest</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col s12 m6 l3">
//                         <div className="card small hoverable">
//                             <div className="card-image">
//                                 <img className="materialboxed responsive-img" data-caption="Fr. John Ogbe, CM" src={pope} alt="Pope Francis"/>
//                             </div>
//                             <div className="card-content">
//                                 <p>Fr. John Ogbe, CM</p>
//                             </div>
//                             <div className="card-action">
//                                 <p>Associate Priest</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

// export default OurPriests;