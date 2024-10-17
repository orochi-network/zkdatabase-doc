import { Redirect } from '@docusaurus/router';
import HomeSvg from '@site/static/img/Blog.svg';

function HomepageHeader() {
  return (
    <div className='w-full h-fit bg-[#3e3e42] p-10 flex flex-row justify-between gap-20'>
      <div className='w-[70%]'>
        <div className='text-4xl text-neutral-50'>zkDatabase Documentation</div>
        <div className='text-lg text-neutral-50 pt-8'>
          Welcome to the official zkDatabase Documentation. Whether you're a developer, database administrator, or just starting your journey with zkDatabase, our documentation provides you with the information and knowledge needed to build applications on zkDatabase.
        </div>
      </div>
      <div className='w-[30%] flex items-center justify-center'>
        <HomeSvg />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Redirect to="/docs/intro" />
  );
}
