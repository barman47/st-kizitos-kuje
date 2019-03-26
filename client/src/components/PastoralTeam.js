import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import PastoralTeamCard from './common/PastoralTeamCard';
import pope from '../img/pope.jpg';
import onaiyekan from '../img/Onaiyekan1.jpg';
import anselm from '../img/anselm.jpg';

class PastoralTeam extends Component {
    componentDidMount () {
        const elems = document.querySelectorAll('.materialboxed');
        // eslint-disable-next-line
        const instances = M.Materialbox.init(elems);
    }
    render () {
        return (
            <Fragment>
                <Helmet>
                    <title>Pastoral Team | St. Kizito's Catholic Parish, Kuje - Abuja.</title>
                </Helmet>
                <section className="pastoral-team">
                    <h3>Pas<span className="underline">toral Team</span></h3>
                    <div className="row">
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={pope}
                                alt="Pope Francis"
                                name="His Holiness Pope Francis"
                                position="Catholic Pontiff"
                            />
                        </div>
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={onaiyekan}
                                alt="Cardinal Onaiyekan"
                                name="John Cardinal Onaiyekan"
                                position="Archbishop of Abuja"
                            />
                        </div>
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={anselm}
                                alt="Bishop Anselm Umoren"
                                name="Most Rev. Anselm Umoren, MSP"
                                position="Auxiliary Bishop of Abuja"
                            />
                        </div>
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={pope}
                                alt="Fr. Hyacinth Okafor "
                                name="Rev. Fr. Hyacinth Okafor, CM"
                                position="Parish Priest"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={pope}
                                alt="Fr. Clement Eru"
                                name="Fr. Clement Eru, CM"
                                position="Associate Priest"
                            />
                        </div>
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={pope}
                                alt="Fr. Victor Nyoroh"
                                name="Fr. Victor Nyoroh, CM"
                                position="Associate Priest"
                            />
                        </div>
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={pope}
                                alt="Fr. John Ogbe"
                                name="Fr. John Ogbe, CM"
                                position="Associate Priest"
                            />
                        </div>
                        <div className="col s12 m6 l3">
                            <PastoralTeamCard 
                                src={pope}
                                alt="Catechist Akuso A.L."
                                name="Catechist Akuso A.L."
                                position="Catechist"
                            />
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
} 


export default PastoralTeam;