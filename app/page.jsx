import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
    Unlock Your Academic Potential
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Save, Share, and Explore AI-Powered Prompts Tailored for Students – Your Shortcut to Smarter Learning and Creative Success
    </p>

    <Feed />
  </section>
);

export default Home;
