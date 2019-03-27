import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Announcements = () => (
    <Fragment>
        <Helmet>
            <title>Parish Announcements | St. Kizito's Catholic Parish, Kuje - Abuja.</title>
        </Helmet>
        <section className="announcements container">
            <h3>Announcements from the Parish Priest</h3>
            <ol>
                <li>
                    <h5>Catechesis for All:</h5>
                    <p>
                        Children & Adult - Every Sunday evening at 4pm - 5:45pm. Come with your heart and soul to hear the word of God and boost your faith in God and also to have a cleaner knowledge of what the church teaches.
                    </p>
                </li>
                <li>
                    <p>
                        Heads of organization are to submit one passport photograph in the parish office to enable the parish update her website.
                    </p>
                </li>
                <li>
                    <p>
                        Pray with the scripture and learn to meidtate with the scriptures every <strong>Friday from 7pm to 8pm</strong>
                    </p>
                </li>
            </ol>
            <h4 className="center">Other Announcements</h4>
            <ol>
                <li>
                    <p>
                        CMO general meeting comes up this Saturday 30th immeidately after 6:30am mass at the CMO Hall. All married men in the parish are expected to attend.
                    </p>
                </li>
                <li>
                    <p>
                        CMO EXCO meeting holds on Wednesday immediately after evening Mass at the Parish Hall. Members please take note.
                    </p>
                </li>
                <li>
                    <p>
                        St. Vincent De Paul Zone 7 Youths are holding their meeting today at Gideon Mutum's compound in angwan Kaduna by 5pm prompt. All youths in the zone are expected to be in attendance.
                    </p>
                </li>
                <li>
                    <p>
                        Parishioners are hereby informed that the Laity week starts form 24th to 31st March, 2019, let us all get set to participate actively.
                    </p>
                </li>
                <li>
                    <p>
                        Interested Catholics who wish to be affiliate members of teh Child Jesus to share in the life, mission and apostolic Ministry of the Congregation should please register with Sr. Mary Gertrude Aham 08036621555, 08021052070
                    </p>
                </li>
                <li>
                    <p>
                        Blessed candles are available in the Parish bookshop. Buy for your family and enhance your prayer life.
                    </p>
                </li>
                <li>
                    <p>
                        Call for your medical care at the Parish Clinic through this number 08136321488. You can also make enquiry on how to take care of the aged. There are also special vacines for Typhoid, Rotve etc for children. Contact Mrs. Bagobiri.
                    </p>
                </li>
            </ol>
        </section>
    </Fragment>
);

export default Announcements;