import React from 'react';
import Advertisement from '../../../components/Advertisement';
import user1 from '../../../asset/img/img1.png';
import user2 from '../../../asset/img/img2.png';
import user from '../../../asset/img/img-user7.png';

function MainSingle() {
  return (
    <main className="container custorm-container px-0 ">
      <div className="single-post m-auto">
        <section>
          <div className="form-introduce">
            <span className="tag rounded">Technology</span>
            <h2>
              The Impact of Technology on the Workplace: <br /> How Technology
              is Changing
            </h2>
            <div className="infor-user">
              <div className="user">
                <img className="img-fluid" src={user} alt="" />
                <span>Jason Francisco</span>
              </div>
              <time>August 20, 2022</time>
            </div>
          </div>
        </section>
        <img className="img-fluid" src={user1} alt="" />
        <section>
          <article>
            <p>
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>
            <br />
            <br />
            <p>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </article>
          <article>
            <h4>Research Your Destination</h4>
            <p>
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </article>
          <article>
            <h4>Plan Your Itinerary</h4>
            <p>
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <br />
            <br />
            <p>
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>
          </article>
        </section>
        <section>
          <article className="italics">
            “ Traveling can expose you to new environments and potential health
            risks, so it's crucial to take precautions to stay safe and healthy.
            ”
          </article>
        </section>
        <img className="img-fluid" src={user2} alt="" />
        <Advertisement />
        <section>
          <article>
            <h4>Pack Lightly and Smartly</h4>
            <p>
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </p>
          </article>
          <article>
            <h4>Stay Safe and Healthy</h4>
            <p>
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </p>
          </article>
          <article>
            <h4>Immerse Yourself in the Local Culture</h4>
            <p>
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </article>
          <article>
            <h4>Capture Memories</h4>
            <p>
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </p>
          </article>
          <article>
            <h4>Conclusion:</h4>
            <p>
              Traveling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and tricks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}

export default MainSingle;
