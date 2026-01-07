// Import utilities and loader(s) from astro
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// Define collection(s)
const project = defineCollection({ 
    //loader: file("src/data/project/sun-exchange.json"),
    loader: glob({ pattern: '**/[^_]*.json', base: "./src/data/project" }),
    //type: 'content',
    schema: z.object({
        slug: z.string(),
        isdraft: z.string(),
        company: z.string(),
        title: z.string(),
        url: z.string().url(),
        link: z.string(),
        featureimg: z.string(),
        datecompleted: z.string(),
        challengetitle: z.string(),
        challenge: z.string(),
        role: z.string(),
        technologies: z.string(),
        banner: z.object({
            bullets: z.array(z.string()),
            src: z.string(),
            alt: z.string(),
            backgroundcolor: z.string(),
            bulletcolor: z.string()
        }),
        solutions: z.array(
            z.object({
                title: z.string(),
                tag: z.string(),
                link: z.string(),
                problem: z.string(),
                solution: z.string(),
                solutionbullets: z.array(z.string()),
                impact: z.string(),
                impactbullets: z.array(z.string()),
                gallery: z.array(
                    z.object({
                        src: z.string(),
                        alt: z.string(),
                        caption: z.string()
                    })
                ),
            })
        ),
    })
});

export interface IProjectCollection {
    slug: string;
    isdraft: string;
    company: string;
    title: string;
    url: string;
    link: string;
    featureimg: string;
    datecompleted: string;
    challengetitle: string;
    challenge: string;
    role: string;
    technologies: string;
    banner: {
        bullets: string[];
        src: string;
        alt: string;
        backgroundcolor:string;
        bulletcolor:string;
    },
    solutions: {
        title: string;
        tag: string;
        link: string;
        problem: string;
        solution: string;
        solutionbullets: string[];
        impact: string;
        impactbullets: string[];
        gallery: {
            src: string;
            alt: string;
            caption: string;
        }[];
    }[];        
}

export interface ISolutionProps {
  title: string;
  tag: string;
  link: string;
  problem: string;
  solution: string;
  solutionbullets: string[];
  impact: string;
  impactbullets: string[];
  gallery: { 
    src: string;
    alt: string;
    caption: string;
  }[];
}

// Export collections object to register collection(s)
export const collections = { project };

