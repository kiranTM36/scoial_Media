import React from 'react'

const Ecard = () => {
    return (
        <div>

            <div className="flex flex-col bg-white shadow-md w-72 overflow-hidden rounded-lg">
                <img className='w-72 h-48 object-cover'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 font-medium ease-in">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2 hover:scale-105 hover:shadow-md active:scale-95 transition-all duration-300 font-medium ease-in">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecard