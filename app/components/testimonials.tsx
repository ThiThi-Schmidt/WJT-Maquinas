export default function Testimonials() {
  return (
    <div className="py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-16">Testimonials</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-lg lg:text-xl text-gray-600 italic leading-relaxed mb-8">
            &ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/person-1.png" alt="Maria Jones" className="w-20 h-20 rounded-full mb-4 object-cover" />
            <h3 className="font-bold text-gray-900">Maria Jones</h3>
            <span className="text-sm text-gray-500">CEO, Co-Founder, XYZ Inc.</span>
          </div>
        </div>
      </div>
    </div>
  );
}