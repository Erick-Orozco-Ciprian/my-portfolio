import Link from "next/link";

import { projectsData } from "../../data/projects";

const FeaturedProjects = () => {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-[#3D405B] mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block bg-[#F2CC8F] rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold text-[#3D405B] mb-2">{project.title}</h3>
            <p className="text-[#3D405B] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-[#E07A5F] text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          href="/projects"
          className="px-6 py-2 rounded-lg bg-[#81B29A] text-white hover:bg-[#6A9C84] transition"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
