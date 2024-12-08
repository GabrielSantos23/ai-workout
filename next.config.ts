import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "1mb", // Define o limite de tamanho do corpo da requisição
    },
    externalResolver: true, // Se estiver usando resolvers personalizados
  },
};

export default nextConfig;
