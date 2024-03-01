import { Card } from "@/components/ui/card";
import { env } from "process";
import React from "react";
interface GitHubProject {
  id: number;
  name: string;
  description: string;
  clone_url: string;
  // outras propriedades que você queira incluir
}

async function fetchGitHubProjects() {
  const response = await fetch(`https://api.github.com/users/szsouza/repos`, {
    cache: "force-cache",
  });
  const projects: GitHubProject[] = await response.json();
  return projects;
}

async function Projects() {
  const projects: GitHubProject[] = await fetchGitHubProjects();

  return (
    <div className="flex justify-center items-center w-full flex-wrap">
      <div className="flex flex-wrap justify-center items-center gap-4 m-auto">
        {projects.map((project) => (
          <Card key={project.id} className="w-64">
            <div className="p-4 flex flex-col items-center justify-between h-64">
              <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
              <a
                className="block mt-4 bg-gray-800 text-white py-2 px-4 rounded text-center"
                href={project.clone_url}
              >
                Acesse o Repositório
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
