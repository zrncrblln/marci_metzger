import estateRoom from "@/assets/blog-estate-room.jpg";
import bedroom from "@/assets/blog-bedroom.jpg";
import livingRoom from "@/assets/blog-living-room.jpg";

const posts = [
  { title: "The Estate Room", tag: "New", image: estateRoom },
  { title: "Modern Villa Bedroom", tag: "Popular", image: bedroom },
  { title: "Modern Villa Living Room", tag: "New", image: livingRoom },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Blog</p>
          <h2 className="section-heading mb-4">
            Discover insights, trends, &<br />Inspirations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <div key={post.title} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{post.title}</h3>
                <span className="flex items-center gap-1 text-xs text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {post.tag}
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
