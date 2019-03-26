import React from 'react';

const Values = () => (
    <section className="values">
        <div className="row">
            <div className="col s12 m4 l4 value">
                <span className="mdi mdi-church value-icon"></span>
                <h4>Our Mission</h4>
                <p>
                    By evangelizing, the Church seeks to bring about in all Catholics such an enthusiasm for their faith that, in living their faith in Jesus and strengthened by the sacraments. 
                </p>
            </div>
            <div className="col s12 m4 l4 value">
                <span className="mdi mdi-clover value-icon"></span>
                {/*<span className="mdi mdi-heart value-icon"></span>*/}
                <h4>Our Values</h4>
                <p>
                    The Church's core value is spreading the message of salvation through Jesus Christ to all people
                    in all contexts.
                </p>
            </div>
            <div className="col s12 m4 l4 value">
                <span className="mdi mdi-account-multiple value-icon"></span>
                <h4>Who we are?</h4>
                <p>
                    A network of friends, inspired by Gospel values, growing in holiness and building a more just world through personal relationships with and service to people in need.
                </p>
            </div>
            {/*<div className="col s12 m6 l3 value">
                <span className="mdi mdi-clover value-icon"></span>
                <h4>Who we are?</h4>
                <p>
                Inspired by Gospel values, the Society of St. Vincent de Paul, a Catholic lay organization, leads women and men to join together to grow spiritually by offering person-to-person service to those who are needy and suffering in the tradition of its founder, Blessed Frédéric Ozanam, and patron, St. Vincent de Paul.
                </p>
</div>*/}
        </div>
    </section>
);

export default Values;