export default function Testimonials({ scrollContainerRef }) {
  const testimonials = [
    {
      name: "Amelia Joseph",
      role: "Chief Manager",
      message:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      image: "/C1.png",
      bgColor: "bg-blue-500 text-white",
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      message:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
      image: "/C2.png",
      bgColor: "bg-[#F8F9FF] text-black",
    },
    {
      name: "Jacob J.",
      role: "Chief Manager",
      message:
        "Embrace really nails it! Creativity meets approachable style. They're the pros where artistry meets strategy. Thrilled with what we've achieved!",
      image: "/C3.png",
      bgColor: "bg-[#F8F9FF] text-black",
    },
  ];
  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-wrap lg:flex-nowrap space-y-5 justify-center lg:justify-start  sm:space-x-6  md:overflow-hidden p-6 sm:items-end  lg:ml-32"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`p-8 rounded-3xl w-80 lg:w-[28rem]  h-72 flex-shrink-0 shadow-sm ${testimonial.bgColor}`}
        >
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">{testimonial.name}</h2>
              <p className="text-sm">{testimonial.role}</p>
            </div>
          </div>
          <p className="">{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
}
