import React from 'react'

const ServicesTwoCols = ({price, title, image,content, isDark}) => {
  return (
    <section className={`py-24 ${isDark ? "bg-black text-white" : ""}`}>
        <div className="container">
            <div className={`flex items-center  ${isDark ? "flex-row-reverse" : ""} gap-10`}>
                <div className="content  basis-[55%]">
                    <h1 className='text-accent'>{title}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam aperiam nisi consequuntur totam dolorem molestiae pariatur repellendus delectus porro?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aperiam rerum eveniet voluptatem saepe veritatis neque, obcaecati tenetur quos laborum ea commodi adipisci, quam dignissimos facilis vitae fuga ex ducimus.</p>
                    <div>
                        <h5 className='mb--0'>Price Start At</h5>
                        <h4 className='text-accent'>{price}</h4>
                        <small>Price may vary depending on the design and development</small>
                    </div>
                </div>
                <div className='img basis-[45%] grid place-content-center'>
                    <img src={`${image}`} alt="" className='size-[300px] rounded-full object-cover' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesTwoCols
