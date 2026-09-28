import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className=' py-20 '>
            <div className='grid grid-cols-2 gap-10 items-centre justify between container mx-auto px-24 py-35 bg-gray-900 text-gray-300 rounded-2xl'>
            <div >
            <h2 className='text-3xl font-semibold pb-4 text-[20xl]'>Books to freshen up <br />your bookshelf</h2>
            <button className="btn btn-active btn-success text-[10px]">View The List</button>
            </div>
            <div>
                <Image src='/images/hero_img.jpg' width={200} height={250} alt='image of a book' className='rounded-2xl'></Image>
            </div>
        </div>
        </section>
    );
};

export default Banner;