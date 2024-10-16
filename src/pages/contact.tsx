import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Banner from '../../static/img/banner.png';


function ContactInfo() {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === 'dark';
    return (
        <main className={`${isDarkMode ? 'bg-[#1c1c1d]' : 'bg-white'} w-screen min-h-[500px] h-full`}>
            <div className='max-w-[90%] lg:max-w-[70%] h-fit bg-[#3e3e42] m-auto my-10 lg:my-20 flex flex-col lg:flex-row'>
                <div className='p-6 sm:p-10 lg:max-w-[50%]'>
                <div className='text-2xl sm:text-3xl lg:text-4xl text-neutral-50'>Contact Us</div>
                <div className='text-xs sm:text-sm text-neutral-50 w-full lg:w-[70%] pt-4'>
                    We are excited to hear from you and discuss how we can help with your project or answer any questions you may have.
                </div>
                <div className='text-neutral-50 pt-4'>Via email:</div>
                <div className='text-neutral-50'>contact@orochi.network</div>
                </div>
                <div className='flex-1 lg:flex'>
                <img src={Banner} className='max-h-full max-w-full w-full h-auto lg:h-full sm:hidden lg:block' />
                </div>
            </div>
        </main>
    );
}

export default function Contact(): JSX.Element {
  return (
    <Layout
        title='Contact'
        description="Description will go into a meta tag in <head />"
    >
        <ContactInfo />
    </Layout>
  );
}
