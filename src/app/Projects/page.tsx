import { Card } from "@/components/ui/card";
import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { env } from "process";

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string; // "clone_url" é alterado para "html_url"
  // outras propriedades que você queira incluir
}

async function fetchGitHubProjects(): Promise<GitHubProject[]> {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    const token = env.GITHUB_ACCESS_TOKEN;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "szsouza") {
          repositories(
            first: 6
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              id
              name
              description
              url
            }
          }
        }
      }
    `,
  });

  const { repositories } = data.user;

  return repositories.nodes.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.url,
  }));
}

async function Projects(): Promise<JSX.Element> {
  const projects = await fetchGitHubProjects();

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
                href={project.html_url}
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
