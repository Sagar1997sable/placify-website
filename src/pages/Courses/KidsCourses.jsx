
import { Link } from 'react-router-dom';


const bannerImg = 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg';
const classImg = 'https://images.pexels.com/photos/8613079/pexels-photo-8613079.jpeg';
const happyImg = 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg';

const KidsCourses = () => {
  
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-yellow-600 mb-4">Kids English Course</h1>
            <p className="text-lg text-gray-600 mb-6">
              A fun-filled spoken English course specially crafted for young minds. Learn through stories, games, and real-life play!
            </p>
             <Link
              to="/?course=Kids%20Training"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book a Free Demo
            </Link>
          </div>
          <div className="flex-1">
            <img src={bannerImg} alt="Kids Learning Banner" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* What They’ll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8">What Kids Will Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Alphabet & phonics fun</li>
              <li>Basic vocabulary with pictures</li>
              <li>Simple sentence speaking</li>
              <li>Storytelling & role-play</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Listening & speaking skills</li>
              <li>Picture-based grammar</li>
              <li>Confidence building activities</li>
              <li>Fun games & quizzes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual 1 */}
      <section className="bg-gradient-to-r from-yellow-100 to-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <img src={classImg} alt="Interactive Class" className="rounded-xl w-full lg:w-1/2 shadow" />
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Interactive Learning</h3>
            <p className="text-gray-700 text-lg">
              From show-and-tell to hands-on activities, we ensure every session is engaging, active, and fun.
            </p>
          </div>
        </div>
      </section>

      {/* Visual 2 */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Happy Confident Kids</h3>
            <p className="text-gray-700 text-lg">
              Our aim is to nurture confidence through language and help kids express themselves freely from a young age.
            </p>
          </div>
          <img src={happyImg} alt="Happy Kids Learning" className="rounded-xl w-full lg:w-1/2 shadow" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-yellow-50">
        <h3 className="text-2xl font-semibold text-yellow-800 mb-4">
          Ready to make English fun for your child?
        </h3>
         <Link
              to="/?course=Kids%20Training"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
            >
              Book the Free Demo Now
            </Link>
      </section>

    
    </div>
  );
};

export default KidsCourses;
