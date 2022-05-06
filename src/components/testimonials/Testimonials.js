import './Testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    const data = [
        {
            avatar: Avatar1,
            name: 'Tina Shaw',
            review: 'We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with Mohad and his team has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on monthly reports so we know how our site is doing. I would recommend them to anyone looking for website design or SEO work! (Fiver -2020)' 
        },
        {
            avatar: Avatar2,
            name: 'Shatta Wale',
            review: 'My new website is everything that I wanted.You are much better than other people I have hired so far. What I loved about you was the fact that you started with a plan and executed it. You were also very easy to communicate with and were able to work from concepts rather than needing me to design the website myself. (Upwork -2021)'
        },
        {
            avatar: Avatar3,
            name: 'Kwame Despite',
            review: 'It has been a pleasure working with you. I appreciate your dedication to the projects that you and your team are on. It is nice from the customers stand point to be able to get in touch with you and your team and you guys always made yourselves available. You did a great job for us and I would recommend you to anyone. (Fiver -2021)'
        },
     
    ]

    return (
        <section id={"testimonials"}>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className={"container testimonials__container"}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={true}
            >

                {data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className={"testimonial"}>
                            <div className={"client__avatar"}>
                                <img src={avatar} alt={"Client Image"}/>
                            </div>
                            <h5 className={"client__name"}>{name}</h5>
                            <small className={"client__review"}>{review}</small>
                        </SwiperSlide>
                    )
                })}



            </Swiper>

        </section>
    )
}

export default Testimonials