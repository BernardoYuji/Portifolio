import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg text-white py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Esquerda */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Bernardo Yuji — Todos os direitos reservados.
        </p>

        {/* Direita (ícones sociais) */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/BernardoYuji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/bernardo-hanashiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
