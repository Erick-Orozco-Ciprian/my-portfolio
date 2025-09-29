import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Layout from "../layouts/layout";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    const matchesTag = filterTag ? p.tags.includes(filterTag) : true;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);

  const allTags = Array.from(new Set(projectsData.flatMap((p) => p.tags)));

  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#3D405B] mb-8">Featured Projects</h1>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}?filtered=${filteredProjects.map(fp => fp.slug).join(",")}`}
              className="bg-[#F2CC8F] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {p.images?.[0] && (
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-72"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#3D405B] mb-2">{p.title}</h2>
                <p className="text-[#3D405B] opacity-90">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Search & Filter */}
        <h2 className="text-3xl font-bold text-[#3D405B] mb-2">All Projects</h2>
        <p className="text-[#3D405B]/80 mb-4">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 rounded-lg border border-[#E07A5F] flex-grow text-[#3D405B]"
          />
          <select
            value={filterTag || ""}
            onChange={(e) => setFilterTag(e.target.value || null)}
            className="p-3 rounded-lg border border-[#E07A5F] text-[#3D405B]"
          >
            <option value="">All Tags</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}?filtered=${filteredProjects.map(fp => fp.slug).join(",")}`}
              className="bg-[#FAF0E6] rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {p.images?.[0] && (
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-72"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#3D405B] mb-1">{p.title}</h3>
                <p className="text-[#3D405B] opacity-90">{p.description}</p>
              </div>
            </Link>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-[#3D405B] mt-8 col-span-full">
              No projects match your search/filter.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}
