import { SelectArticle } from "../database/schema";

export const mockRecentArticles: SelectArticle[] = [
  {
    id: 4,
    coverUrl: null,
    userId: 4,
    title: "The Bright Future of Web 3.0?",
    lead: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    content:
      "The Bright Future of Web 3.0 is a topic that has garnered significant attention as we explore the next evolution of the internet. This article discusses the potential of Web 3.0 to empower users and decentralize control, while also addressing the challenges and questions that arise in this new digital landscape.",
    createdAt: new Date("2023-01-08"),
    updatedAt: new Date("2023-01-09"),
  },
  {
    id: 1,
    coverUrl: null,
    userId: 1,
    title: "Hydrogen VS Electric Cars",
    lead: "Will hydrogen-fueled cars ever catch up to EVs?",
    content:
      "As the automotive industry shifts towards sustainable energy, the debate between hydrogen and electric vehicles intensifies. While electric vehicles (EVs) have gained significant traction due to their efficiency and established infrastructure, hydrogen-fueled cars offer a promising alternative with faster refueling times and longer ranges. This article explores the technological advancements, market trends, and environmental impacts of both options.",
    createdAt: new Date("2023-01-06"),
    updatedAt: new Date("2023-01-07"),
  },
  {
    id: 2,
    coverUrl: null,
    userId: 2,
    title: "The Downsides of AI Artistry",
    lead: "What are the possible adverse effects of on-demand AI image generation?",
    content:
      "On-demand AI image generation has revolutionized the creative landscape, but it also raises several concerns. Issues such as copyright infringement, ethical dilemmas regarding consent, and the potential for misinformation are at the forefront of this discussion. This article delves into the implications of AI-generated art and the responsibilities of creators and consumers in this new digital age.",
    createdAt: new Date("2023-01-04"),
    updatedAt: new Date("2023-01-05"),
  },
  {
    id: 3,
    coverUrl: null,
    userId: 3,
    title: "Is VC Funding Drying Up?",
    lead: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    content:
      "Venture capital (VC) funding has seen a significant decline, with reports indicating a 50% year-over-year drop. This shift raises questions about the future of startups and innovation. In this article, we analyze the factors contributing to this trend, the impact on emerging businesses, and what it means for the broader economy. We also explore potential strategies for startups to navigate this challenging funding landscape.",
    createdAt: new Date("2023-01-02"),
    updatedAt: new Date("2023-01-03"),
  },
];

export const mockTrendingArticles: SelectArticle[] = [
  {
    id: 1,
    coverUrl: "/images/image-retro-pcs.jpg",
    userId: 1,
    title: "Reviving Retro PCs",
    lead: "What happens when old PCs are given modern upgrades?",
    content: "What happens when old PCs are given modern upgrades?",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    coverUrl: "/images/image-top-laptops.jpg",
    userId: 1,
    title: "Top 10 Laptops of 2022",
    lead: "Our best picks for various needs and budgets.",
    content: "Our best picks for various needs and budgets.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    coverUrl: "/images/image-gaming-growth.jpg",
    userId: 1,
    title: "The Growth of Gaming",
    lead: "How the pandemic has sparked fresh opportunities.",
    content: "How the pandemic has sparked fresh opportunities.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
