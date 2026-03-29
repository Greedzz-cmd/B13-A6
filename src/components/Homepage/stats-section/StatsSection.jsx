import React from 'react';

const StatsSection = () => {
    return (
        <div className='flex justify-center gap-40 bg-primary text-6xl text-white py-15 text-center'>
            <div>
                <h3 className='font-bold mb-6'>50K+</h3>
                <p className='text-2xl'>Active Users</p>
            </div>
            <div className='border border-l border-white'></div>
            <div>
                <h3 className='font-bold mb-6'>200+</h3>
                <p className='text-2xl'>Premium Tools</p>
            </div>
            <div className='border border-l border-white'></div>
            <div>
                <h3 className='font-bold mb-6'>4.9</h3>
                <p className='text-2xl'>Rating</p>
            </div>
        </div>
    );
};

export default StatsSection;