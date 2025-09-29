import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../../layouts/layout";
import { projectsData } from "../../data/projects";

interface ProjectDetailProps {
    project: typeof projectsData[number] | null;
    allProjects: typeof projectsData[number][];
}

export default function ProjectDetail({ project, allProjects }: ProjectDetailProps) {
    const router = useRouter();
    const [filteredProjects, setFilteredProjects] = useState(allProjects);

    useEffect(() => {
        if (router.query.filtered) {
            const slugs = (router.query.filtered as string).split(",");
            const filtered = allProjects.filter((p) => slugs.includes(p.slug));
            if (filtered.length > 0) setFilteredProjects(filtered);
        }
    }, [router.query.filtered, allProjects]);

    if (!project) {
        return (
            <Layout>
                <p className="text-center mt-20 text-[#3D405B]">Project not found.</p>
            </Layout>
        );
    }

    const currentIndex = filteredProjects.findIndex((p) => p.slug === project.slug);
    const prevProject = currentIndex > 0 ? filteredProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < filteredProjects.length - 1 ? filteredProjects[currentIndex + 1] : null;

    return (
        <Layout>
            {/* Hero Banner */}
            <div className="bg-[#F2CC8F] rounded-2xl shadow-lg p-12 mt-8 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
                    <div className="flex-1 mb-6 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#3D405B] mb-4">{project.title}</h1>
                        <p className="text-[#3D405B] opacity-90 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-xs bg-[#E07A5F] text-white rounded-full shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/projects"
                        className="mt-4 md:mt-0 text-[#3D405B]/80 hover:text-[#3D405F] underline underline-offset-4"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </div>

            {/* Details Section */}
            <section className="max-w-6xl mx-auto px-6 mt-10 mb-10 text-[#3D405B] bg-[#FAF0E6] rounded-2xl shadow-md p-8">
                {(Array.isArray(project.details) ? project.details : []).map((detail, index) => (
                    <p key={index} className="mb-6 leading-relaxed">{detail}</p>
                ))}
            </section>

            {/* Project Images */}
            {project.images?.length > 0 && (
                <div className="max-w-6xl mx-auto px-6 mb-12 grid md:grid-cols-2 gap-6">
                    {project.images.map((img, index) => (
                        <div
                            key={index}
                            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <Image
                                src={img}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-64 md:h-80"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Prev/Next Navigation */}
            <section className="max-w-6xl mx-auto px-6 flex justify-between mb-16">
                {prevProject ? (
                    <Link
                        href={`/projects/${prevProject.slug}?filtered=${router.query.filtered || ""}`}
                        className="px-4 py-2 bg-[#E07A5F] text-white rounded-lg shadow-md hover:bg-[#d66c4e] transition duration-300"
                    >
                        ← {prevProject.title}
                    </Link>
                ) : <div></div>}

                {nextProject ? (
                    <Link
                        href={`/projects/${nextProject.slug}?filtered=${router.query.filtered || ""}`}
                        className="px-4 py-2 bg-[#E07A5F] text-white rounded-lg shadow-md hover:bg-[#d66c4e] transition duration-300"
                    >
                        {nextProject.title} →
                    </Link>
                ) : <div></div>}
            </section>
        </Layout>
    );
}

// Static Paths
export async function getStaticPaths() {
    const paths = projectsData.map((p) => ({ params: { slug: p.slug } }));
    return { paths, fallback: false };
}

// Static Props
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const project = projectsData.find((p) => p.slug === params.slug) || null;
    const allProjects = projectsData;
    return { props: { project, allProjects } };
}
